import React from "react";
import { CheckCircleOutlined, NotInterestedOutlined } from "@material-ui/icons";

export default ({...props}) => {
  return props.checked ? <CheckCircleOutlined color="primary"/> : <NotInterestedOutlined color="error"/>
}
