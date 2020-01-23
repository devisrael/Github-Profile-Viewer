class Github {
  constructor() {
    this.client_id = "70aca0bf110a0a9e2720";
    this.client_secret = "e3720a0eb2df481ff392b0b7af6fa51b0d86d8aa";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repo = await repoResponse.json();

    return {
      profile,
      repo
    };
  }
}
