const headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "#44b175";

const body = document.getElementById("container");
body.style.backgroundColor = "rgb(245, 245, 245)";

const emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "lightsalmon";

const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "rgb(243, 209, 99)";

const emergencyTitle = document.querySelectorAll(".emergency-tasks h3");
for (i = 0; i < emergencyTitle.length; i += 1) {
    emergencyTitle[i].style.backgroundColor = "rgb(134, 88, 241)";
}

const noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (i = 0; i < noEmergencyTitle.length; i += 1) {
    noEmergencyTitle[i].style.backgroundColor = "black";
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(21, 48, 54)";
