import {action, observable} from "mobx";

// interfaces
import {IOneTimeRun} from "interfaces/ICampaign";
import {RunType} from "types/commonTypes";

// models
import {ONE_TIME_RUN_TYPE} from "models/Constants";

export class OneTimeRunStore implements IOneTimeRun {
 type: RunType = ONE_TIME_RUN_TYPE;

 @observable appTimezone: boolean = true;
 @observable later?: Date;
 @observable now: boolean = true;
 @observable userTimezone: boolean = false;

 @action update(model: IOneTimeRun) {
  Object.assign(this, model);
 }
}
