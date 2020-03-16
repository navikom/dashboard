import { AbstractDeviceStore } from "views/Segments/store/AbstractDeviceStore";
import { IOSPropertiesMap } from "models/Constants";
import { action } from "mobx";

export class IOSStore extends AbstractDeviceStore {
  static propertiesMap = IOSPropertiesMap;

  constructor() {
    super(IOSStore);
  }

  //######### static ###########//

  @action static addNewItem() {
    super.addNewItem(new IOSStore());
  }
}
