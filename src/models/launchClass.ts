import ILaunch from "./ILaunch";
export default class LaunchClass implements ILaunch {
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

  public launchClass(launch: any) {
    this.id = launch.id;
    if (launch.img) {
      this.img = launch.img;
    }
    if (launch.name) {
      this.name = launch.name;
    }
    if (launch.date) {
      this.date = launch.date;
    }
    if (launch.details) {
      this.details = launch.details;
    }
    if (launch.success) {
      this.success = launch.success;
    }
    if (launch.classification) {
      this.classification = launch.classification;
    }
    if (launch.upcoming) {
      this.upcoming = launch.upcoming;
    }
    if (launch.rocketId) {
      this.rocketId = launch.rocketId;
    }
    if (launch.rocketName) {
      this.rocketName = launch.rocketName;
    }
  }
}
