"usestrict";
let localUserName = "";
let localPassword = "";
let visibile = document.querySelector(".home");
validate = function () {
  let userName = document.getElementById("username").value;

  let password = document.getElementById("password").value;
  sessionStorage.setItem("username", userName);
  sessionStorage.setItem("password", password);
  localUserName = sessionStorage.getItem("username");
  localPassword = sessionStorage.getItem("password");
  console.log(localPassword, localUserName);
  if (localPassword && localUserName) {
    // visibile.style.visibility = "visible";

    window.location = "home.html";
  } else {
    alert("Username or Password is missing");
    // visibile.style.cvisibility = "hidden";
  }
};
logout = function () {
  sessionStorage.clear();
  // visibile.style.visibility = "hidden";

  window.location = "login.html";
};
