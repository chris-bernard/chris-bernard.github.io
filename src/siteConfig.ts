import siteConfigJson from "./siteConfig.json";

export interface SiteConfiguration {
  name: string;
  bio: string;
  profilePicture: string;
  url: string;
  blog: boolean;
  og: OpenGraph;
  iconLinks: IconLink[];
  customLinks: CustomLink[];
}

interface OpenGraph {
  description: string;
  locale: string;
  type: string;
}

interface IconLink {
  icon: string;
  url: string;
}

interface CustomLink {
  title: string;
  url: string;
}

export const SITE: SiteConfiguration = {
  ...siteConfigJson,
};
