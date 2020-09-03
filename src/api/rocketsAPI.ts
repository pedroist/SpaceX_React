import axios from "axios";

const API_BASE_ADDRESS = "https://api.spacexdata.com/v4";

export default class LaunchesAPI {
  /*---HTTP REQUESTS-------------------------------------*/

  /**GET /rockets/:id
   * Get Rocket by id
   */
  static getRocketsHttpRequest(id: string) {
    const url = `${API_BASE_ADDRESS}/rockets/${id}`;

    return axios.get<any>(url);
  }
}
