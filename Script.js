"usestrict";

validate = function () {
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(username, password);
  if (userName && password) {
    window.location = "home.html";
  }
};

logout = function () {
  window.location = "login.html";
};
