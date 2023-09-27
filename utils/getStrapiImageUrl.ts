import { IMAGE_URL } from 'constants/url';
import { Maybe, UploadFile, UploadFileEntityResponse } from 'graphql/types';

export const getStrapiImageUrl = (object: Maybe<UploadFileEntityResponse> | undefined): string => {
  return IMAGE_URL + object?.data?.attributes?.url || '';
};

export const getStrapiBlurUrl = (object: Maybe<UploadFileEntityResponse> | undefined): string => {
  return object?.data?.attributes?.blurhash ?? '';
};

export const getImageAttributes = (
  object: Maybe<UploadFileEntityResponse> | undefined
): Maybe<UploadFile> | undefined => {
  return object?.data?.attributes;
};
