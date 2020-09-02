import LaunchClass from "../models/launchClass";
import ILaunch from "../models/ILaunch";
import { Classification } from "../Constants";

export default function jsonToLaunchMapper(launchJSON: any): ILaunch {
  let launch: LaunchClass = new LaunchClass();

  if (launchJSON.id) {
    launch.id = launchJSON.id;
  }
  if (
    launchJSON.links &&
    launchJSON.links.flickr &&
    launchJSON.links.flickr.original &&
    launchJSON.links.flickr.original.length > 0
  ) {
    launch.img = launchJSON.links.flickr.original[0];
  }
  if (launchJSON.name) {
    launch.name = launchJSON.name;
  }
  if (launchJSON.date_utc) {
    launch.date = launchJSON.date_utc;
  }
  if (launchJSON.details) {
    launch.details = launchJSON.details;
  }
  if (launchJSON.success != null) {
    launch.success = launchJSON.success;
  }
  if (launchJSON.upcoming != null) {
    launch.upcoming = launchJSON.upcoming;
  }
  if (launchJSON.rocket) {
    launch.rocketId = launchJSON.rocket;
  }

  /* fill missing object parameters by logic*/
  //classification:
  if (launch.success) {
    launch.classification = Classification.SUCCESS;
  } else if (launch.upcoming) {
    launch.classification = Classification.UPCOMING;
  } else {
    launch.classification = Classification.FAILED;
  }

  return launch;
}
