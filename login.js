// Toggle Password Visibility
document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.classList.replace("bx-hide", "bx-show");
    } else {
      passwordInput.type = "password";
      this.classList.replace("bx-show", "bx-hide");
    }
  });
  