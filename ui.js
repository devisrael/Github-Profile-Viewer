class UI {
  constructor() {
    this.profile = document.querySelector(".info__container");
    this.title = `<header>
    <h1 class="title">
      <b>Github</b> Profile Viewer
      <span class="author">
        by
        <b
          ><a href="https://github.com/devisrael" target="_blank"
            >devisrael</a
          >
        </b>
      </span>
    </h1></header>`;
  }

  showProfile(user, repos) {
    this.profile.innerHTML = `
      ${this.title}
      <div class="main__img">
      <a href="${user.html_url}" target="_blank"><img src="${user.avatar_url}" alt=""/></a>
      <p class="main__img__name">${user.name}</p>
      <a href="${user.html_url}" target="_blank" class="main__img__username">${user.login}</a> 
      <a href="${user.blog}" target="_blank" class="main__img__blog">${user.blog}</a><br>
    </div>
    <div class="main__contact">
      <span class="location">
        <svg class="main__contact__icon">
          <use xlink:href="vendor/icon/sprit.svg#icon-location"></use>
        </svg>
        <p>${user.location}</p>
      </span>
      <span class="company">
        <svg class="main__contact__icon">
          <use xlink:href="vendor/icon/sprit.svg#icon-suitcase"></use>
        </svg>
        <p> ${user.company}.</p>
      </span>
     
    </div>
    <div class="main__detail">
      <div class="repo">
      ${repos.length}
        <b>repositories</b>
      </div>
      <div class="follower">
        ${user.followers}
        <b>followers</b>
      </div>
      <div class="following">
        ${user.following}
        <b>following</b>
      </div>
    </div>
      `;
  }

  clearProfile() {
    ui.profile.innerHTML = this.title;
  }

  showAlert() {
    ui.profile.innerHTML = `
    <div class="alert">
    <p>user not found</p>
    </div>
    `;
    setTimeout(() => {
      this.clearProfile();
    }, 3000);
  }
  // showRepo(repos) {
  //   let count = repos.length;
  //   return count;
  // }
}
