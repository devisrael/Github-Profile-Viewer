// DOM VARIABLES
const searchUser = document.querySelector(".form__input");
const settings = document.querySelector(".settings__icon");
const primaryColor = document.querySelector(".primary");
const secondaryColor = document.querySelector(".secondary");

const github = new Github();
const ui = new UI();

// EVENT lISTENER
searchUser.addEventListener("keyup", e => {
  // get user input
  let userText = e.target.value;

  // check if input is empty
  if (userText != "") {
    // make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert();
      } else {
        // console.log(data.repo);
        ui.showProfile(data.profile, data.repo);
        // ui.showRepo(data.repo);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});

// SETTINGS
settings.addEventListener("click", () => {
  document.querySelector(".settings__dropdown").classList.toggle("show");
});

settings.addEventListener("blur", () => {
  document.querySelector(".settings__dropdown").classList.remove("show");
});

primaryColor.addEventListener("click", () => {
  document.documentElement.style.setProperty("--primary", "#073642");
  document.documentElement.style.setProperty("--secondary", "#B58900   ");
});
secondaryColor.addEventListener("click", () => {
  document.documentElement.style.setProperty("--primary", "#1a1a1a");
  document.documentElement.style.setProperty("--secondary", "#f0ad4e   ");
});
