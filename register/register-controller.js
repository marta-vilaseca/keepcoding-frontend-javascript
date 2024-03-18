import { loaderController } from "../loader/loader-controller.js";
import { dispatchEvent } from "../utils/dispatchEvent.js";
import { createUser } from "./register-model.js";

export function registerController(registerForm) {
  const spinner = registerForm.querySelector("#loader");
  const { showLoader, hideLoader } = loaderController(spinner);

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    handleregisterFormSubmit(registerForm);
  });

  function handleregisterFormSubmit(registerForm) {
    let errors = [];

    if (!isEmailValid(registerForm)) {
      errors.push("el email no tiene un formato correcto");
    }

    if (!arePasswordsEqual(registerForm)) {
      errors.push("las contraseñas no son iguales");
    }

    showFormErrors(errors);

    if (errors.length === 0) {
      registerUser(registerForm);
    }
  }

  function isEmailValid(registerForm) {
    const email = registerForm.querySelector("#email");
    const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    return emailRegExp.test(email.value);
  }

  function arePasswordsEqual(registerForm) {
    const password = registerForm.querySelector("#password");
    const passwordConfirm = registerForm.querySelector("#password-confirm");

    return password.value === passwordConfirm.value;
  }

  function showFormErrors(errors) {
    for (const error of errors) {
      dispatchEvent(
        "register-notification",
        {
          message: error,
          type: "error",
        },
        registerForm
      );
    }
  }

  async function registerUser(registerForm) {
    const email = registerForm.querySelector("#email");
    const password = registerForm.querySelector("#password");

    try {
      showLoader();
      await createUser(email.value, password.value);
      dispatchEvent(
        "register-notification",
        {
          message: "Te has registrado correctamente",
          type: "success",
        },
        registerForm
      );

      setTimeout(() => {
        window.location.href = "index.html";
      }, 2000);
    } catch (error) {
      dispatchEvent(
        "register-notification",
        {
          message: error,
          type: "error",
        },
        registerForm
      );
    } finally {
      hideLoader();
    }
  }
}
