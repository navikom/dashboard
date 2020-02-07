import {action, observable} from "mobx";
import {ContentDeviceViewStore} from "views/Campaigns/store/ContentDeviceViewStore";
import {IInAppVariant, IMobileMessage, IPushVariant} from "interfaces/IVariant";
import {IContentPushOrInApp} from "interfaces/IContentStep";

export class ContentPushOrInAppViewStore extends ContentDeviceViewStore implements IContentPushOrInApp {

 @observable keyValueEnabled: boolean = false;
 constructor(variant: IPushVariant | IInAppVariant) {
  super(variant);
 }

 @action updateKeyValuePair(index: number, key: string, value: string): void {
  const data = this.variant.data as IMobileMessage;
  data.updateKeyValuePair(index, key, value);
 };

 @action deleteKeyValue(index: number): void {
  const data = this.variant.data as IMobileMessage;
  data.deleteKeyValue(index);
 }

 @action clear(): void {
  const data = this.variant.data as IMobileMessage;
  data.clearKeyValuePairs();
 }

 @action createKeyValue = (): void => {
  const data = this.variant.data as IMobileMessage;
  data.createKeyValue();
 };

 @action switchKeyValueEnabled = (): void => {
  if(this.keyValueEnabled) {
   this.setKeyValueDisabled();
  } else {
   this.setKeyValueEnabled();
  }
 }

 @action setKeyValueEnabled(): void {
  this.keyValueEnabled = true;
  this.createKeyValue();
 };

 @action setKeyValueDisabled(): void {
  this.keyValueEnabled = false;
  this.clear();
 };

 @action updateKey(index: number, key: string): void {
  const data = this.variant.data as IMobileMessage;
  data.updateKeyValuePair(index, key, data.keyValuePairs[index][1]);
 }

 @action updateValue(index: number, value: string): void {
  const data = this.variant.data as IMobileMessage;
  data.updateKeyValuePair(index, data.keyValuePairs[index][0], value);
 }

}
