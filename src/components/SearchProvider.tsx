import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { ReactNode } from "react";
import siteSettings from "../siteSettings";

const headless = provideHeadless({
  apiKey: "2d8c550071a64ea23e263118a2b0680b",
  experienceKey: siteSettings.experienceKey,
  locale: "en",
  experienceVersion: "STAGING",
});

export interface SearchProviderProps {
  children: ReactNode;
}

export default function Searchprovider(props: SearchProviderProps) {
  return (
    <SearchHeadlessProvider searcher={headless}>
      {props.children}
    </SearchHeadlessProvider>
  );
}
