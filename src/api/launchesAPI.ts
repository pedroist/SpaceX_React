import axios from "axios";

const API_BASE_ADDRESS = "https://api.spacexdata.com/v4";

export default class LaunchesAPI {
  static getLaunches() {
    const url = `${API_BASE_ADDRESS}/launches`;

    return axios.get<any[]>(url);
  }
}
