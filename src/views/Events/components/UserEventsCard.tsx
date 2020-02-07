import { FormRow } from "components/Grid/FormRow";
import { Dictionary, DictionaryService } from "services/Dictionary/Dictionary";
import React from "react";
import GridContainer from "components/Grid/GridContainer";

export const UserEventsCard = ({...props}) => (
  <GridContainer spacing={1}>
    <GridContainer item xs={12} spacing={3}>
      <FormRow data={[
        [Dictionary.defValue(DictionaryService.keys.firstSeen), Dictionary.timeDateString(props.user.createdAt)],
        [Dictionary.defValue(DictionaryService.keys.lastSeen), Dictionary.timeDateString(props.user.lastEvent)],
        [Dictionary.defValue(DictionaryService.keys.identified), Dictionary.timeDateString(props.user.createdAt)]
      ]}/>
    </GridContainer>
    <GridContainer item xs={12} spacing={3}>
      <FormRow data={[
        [Dictionary.defValue(DictionaryService.keys.totalEvents), props.user.eventsCount],
        [Dictionary.defValue(DictionaryService.keys.totalTime), props.user.totalTime], ["", ""]
      ]}/>
    </GridContainer>
  </GridContainer>
);
