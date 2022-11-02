"usestrict";

let interfacePage = function () {
  if (localStorage.length != 0) {
    window.location = "home.html";
  } else {
    window.location = "login.html";
  }
};
validate = function () {
  let userName = document.getElementById("username").value;

  let password = document.getElementById("password").value;
  if (userName && password) {
    localStorage.setItem("username", userName);
    localStorage.setItem("password", password);
  } else {
    alert("Username or Password is missing");
  }
  // console.log(localPassword, localUserName);
  document.getElementById("username").value = "";

  document.getElementById("password").value = "";
  interfacePage();
};
