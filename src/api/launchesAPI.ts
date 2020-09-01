import axios from "axios";

const API_BASE_ADDRESS = "https://api.spacexdata.com/v4";

export default class LaunchesAPI {
  /*---HTTP REQUESTS-------------------------------------*/

  /**GET /launches or GET /launches/past or GET /launches/upcoming
   * Get All Launches or Past Launches or Upcoming Launches
   */
  static getLaunchesHttpRequest() {
    const url = `${API_BASE_ADDRESS}/launches`;

    return axios.get<any[]>(url);
  }
}
