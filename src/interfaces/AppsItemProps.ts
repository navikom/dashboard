import { RouteComponentProps } from "react-router";

type AppMatch = {
  appId: string;
  pageName: string;
}

export interface AppsItemProps extends RouteComponentProps<AppMatch> {
}
