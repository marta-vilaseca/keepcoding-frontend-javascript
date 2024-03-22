import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { loginUser } from "./login-model.js";

export const loginController = (loginForm) => {
  const spinner = document.querySelector("#loader");
  // const { showLoader, hideLoader } = loaderController(spinner);

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    submitLogin(loginForm);
  });

  async function submitLogin(loginForm) {
    const { email, password } = getLoginData(loginForm);
    try {
      // showLoader();
      spinner.classList.toggle("hidden");
      const jwt = await loginUser(email, password);

      dispatchEvent(
        "login-notification",
        {
          message: "Te has logueado con éxito",
          type: "success",
        },
        loginForm
      );
      localStorage.setItem("token", jwt);
      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } catch (error) {
      dispatchEvent(
        "login-notification",
        {
          message: error,
          type: "error",
        },
        loginForm
      );
    } finally {
      // hideLoader();
      spinner.classList.toggle("hidden");
    }
  }

  const getLoginData = (loginForm) => {
    const formData = new FormData(loginForm);
    const email = formData.get("email");
    const password = formData.get("password");

    return {
      email: email,
      password: password,
    };
  };
};
