const API_BASE_ADDRESS = "https://api.spacexdata.com/v4";

export default class Api {
  static getLaunches() {
    const url = `${this.API_BASE_ADDRESS}/launches`;

    return axios({
      method: "get",
      url: url
    });
  }
}
