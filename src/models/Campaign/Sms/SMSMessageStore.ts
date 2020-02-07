import {ISMSMessage} from "interfaces/IVariant";
import {observable} from "mobx";

export class SMSMessageStore implements ISMSMessage {
 @observable message: string = "";
 @observable sender: string = "";

 update(model: ISMSMessage): void {
  Object.assign(this, model);
 }
}
