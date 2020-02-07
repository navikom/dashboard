import { action, computed, observable } from "mobx";

// models
import { Pagination } from "models/Pagination";
import { SegmentStore } from "models/Segment/SegmentStore";

// interfaces
import { ISegment } from "interfaces/ISegment";
import { Dictionary } from "services/Dictionary/Dictionary";

class SegmentsStore extends Pagination<ISegment> {
  @observable expressions!: string[];

  @computed get plainData() {
    return this.tableData((e: ISegment) => {
      return [e.segmentId!.toString(), e.name, Dictionary.timeDateString(e.createdAt), Dictionary.timeDateString(e.updatedAt)]
    });

  }

  constructor() {
    super("segmentId", "segment", 20, "pagination", [5, 10, 25, 50]);
  }

  @action push(data: ISegment[]) {
    let l = data.length;
    while (l--) {
      if(!this.has(data[l].segmentId)) {
        this.items.push(SegmentStore.from(data[l]));
      }
    }
  }

  @action setExpressions(list: string[]) {
    if(!this.expressions) {
      this.expressions = list;
    }
  }
}

export const Segments = new SegmentsStore();
