"usestrict";
let localUserName = "";
let localPassword = "";
let visibile = document.querySelector(".home");
validate = function () {
  let userName = document.getElementById("username").value;

  let password = document.getElementById("password").value;
  localStorage.setItem("username", userName);
  localStorage.setItem("password", password);
  localUserName = localStorage.getItem("username");
  localPassword = localStorage.getItem("password");
  console.log(localPassword, localUserName);
  if (localPassword && localUserName) {
    // visibile.style.visibility = "visible";

    window.location = "home.html";
  } else {
    alert("Username or Password id missing");
    // visibile.style.cvisibility = "hidden";
  }
};
logout = function () {
  localStorage.clear();
  // visibile.style.visibility = "hidden";

  window.location = "login.html";
};
