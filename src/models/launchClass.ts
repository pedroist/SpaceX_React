import { Classification } from "../Constants";
export default class LaunchClass {
  id: string;
  img?: string;
  name?: string;
  date?: Date;
  details?: string;
  success?: boolean;
  classification?: string; //field obtain by the success and upcoming parameters
  upcoming?: boolean;
  rocketId?: string;
  rocketName?: string; //field obtain through the rocket API with the id

  constructor() {}

  public jsonToLaunchMapper(launchJSON: any) {
    if (launchJSON.id) {
      this.id = launchJSON.id;
    }
    if (
      launchJSON.links &&
      launchJSON.links.flickr &&
      launchJSON.links.flickr.original &&
      launchJSON.links.flickr.original.length > 0
    ) {
      this.img = launchJSON.links.flickr.original[0];
    }
    if (launchJSON.name) {
      this.name = launchJSON.name;
    }
    if (launchJSON.date_utc) {
      this.date = launchJSON.date_utc;
    }
    if (launchJSON.details) {
      this.details = launchJSON.details;
    }
    if (launchJSON.success != null) {
      this.success = launchJSON.success;
    }
    if (launchJSON.upcoming != null) {
      this.upcoming = launchJSON.upcoming;
    }
    if (launchJSON.rocket) {
      this.rocketId = launchJSON.rocket;
    }

    /* fill missing object parameters by logic*/
    //classification:
    if (this.success) {
      this.classification = Classification.SUCCESS;
    } else if (this.upcoming) {
      this.classification = Classification.UPCOMING;
    } else {
      this.classification = Classification.FAILED;
    }
  }
}
