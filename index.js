const parent = document.querySelector(".form-fields-left");
const message = document.createElement("div");
message.setAttribute("class", "message");
message.style.marginTop = "-0.25rem";

const check = function () {
    console.log("check");
  if (
    document.getElementById("password").value ==
    document.getElementById("confirm-password").value
  ) {    
    message.style.color = "green";
    message.innerHTML = "matching";
    parent.appendChild(message);
  } else {
    message.style.color = "red";
    message.innerHTML = "not matching";
    parent.appendChild(message);
  }
};
