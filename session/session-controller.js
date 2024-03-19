import { buildAuthenticatedSession, buildSession } from "./session-view.js";
import { getUserDetails } from "../utils/getUserDetails.js";

export const sessionController = async (nav) => {
  if (await isUserLoggedIn()) {
    const token = localStorage.getItem("token");
    try {
      const userDetails = await getUserDetails(token);
      nav.innerHTML = buildAuthenticatedSession(userDetails);

      const logoutButton = nav.querySelector("button");
      logoutButton.addEventListener("click", async () => {
        localStorage.removeItem("token");
        await sessionController(nav);
      });
    } catch (error) {
      console.error("No se ha podido cargar la info de usuario:", error);
    }
  } else {
    nav.innerHTML = buildSession();
  }
};

async function isUserLoggedIn() {
  return localStorage.getItem("token");
}
