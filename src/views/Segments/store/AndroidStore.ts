import { AbstractDeviceStore } from "views/Segments/store/AbstractDeviceStore";
import { AndroidPropertiesMap } from "models/Constants";
import { action } from "mobx";

export class AndroidStore extends AbstractDeviceStore {
  static propertiesMap = AndroidPropertiesMap;

  constructor() {
    super(AndroidStore);
  }

  //######### static ###########//

  @action static addNewItem() {
    super.addNewItem(new AndroidStore());
  }
}
