import { gql } from '@apollo/client';

export const CREATE_BETA_LIST_SUBSCRIBER = gql`
  mutation createBetaListSubscriber($email: String!) {
    createBetaListSubscriber(data: { email_address: $email }) {
      data {
        attributes {
          email_address
        }
      }
    }
  }
`;

export const CREATE_EARLY_ACCESS_USER = gql`
  mutation createEarlyAccessUser(
    $name: String
    $email: String
    $website: String
    $timezone: String
    $business: String
  ) {
    createEarlyAccessUser(
      data: { name: $name, email_address: $email, website: $website, timezone: $timezone, business: $business }
    ) {
      data {
        id
      }
    }
  }
`;
