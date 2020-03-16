import { action, observable } from "mobx";
import { IBehaviorTab, ISegment, ITechnologyTab, IUserTab } from "interfaces/ISegment";
import { UserTabStore } from "models/Segment/UserTabStore";

export class SegmentStore implements ISegment {
  @observable name!: string;
  @observable segmentId: number;

  @observable userTab?: IUserTab;
  @observable behaviorTab?: IBehaviorTab;
  @observable technologyTab?: ITechnologyTab;

  pk = "segmentId";

  constructor(model: ISegment) {
    this.segmentId = model.segmentId;
  }

  @action update(model: ISegment) {
    Object.assign(this, model);
  }

  static from(model: ISegment) {
    const segment = new SegmentStore(model);
    segment.update(model);
    return segment;
  }

  static newSegment() {
    const segment = new SegmentStore({segmentId: 0} as ISegment);
    segment.name = "";
    segment.userTab = new UserTabStore();
    return segment;
  }

}
