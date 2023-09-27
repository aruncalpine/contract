import {
  ConfigEntityResponse,
  FeatureEntityResponseCollection,
  HeroSectionEntityResponse,
  SocialLinkEntityResponse,
} from 'graphql/types';
import { create } from 'zustand';

export type PageDataProps = {
  config: ConfigEntityResponse;
  features: FeatureEntityResponseCollection;
  heroSection: HeroSectionEntityResponse;
  socialLink: SocialLinkEntityResponse;
};

export const usePageData = create<{
  pageData?: PageDataProps;
  setPageData: (e: PageDataProps) => void;
}>((set) => ({
  pageData: undefined,
  setPageData: (e: PageDataProps): void =>
    set({
      pageData: e,
    }),
}));
