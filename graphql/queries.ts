import { gql } from '@apollo/client';

export const GET_DATA = gql`
  {
    heroSection {
      data {
        attributes {
          title
          subtitle
          waitlist_headline
          waitlist_button_text
          callout_text
          hero_image {
            data {
              attributes {
                url
                blurhash
                width
                height
                alternativeText
              }
            }
          }
        }
      }
    }
    features {
      data {
        attributes {
          title
          description
          cover_image {
            data {
              attributes {
                width
                height
                blurhash
                url
                alternativeText
              }
            }
          }
        }
      }
    }
    config {
      data {
        attributes {
          copyright_notice
          logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          pyxelchain_logo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
          website_title
        }
      }
    }
    socialLink {
      data {
        attributes {
          headline
          links {
            title
            logo {
              data {
                attributes {
                  url
                  blurhash
                }
              }
            }
            link
          }
        }
      }
    }
  }
`;

export const USE_CONSTANT_CONTACT = gql`
  {
    config {
      data {
        attributes {
          use_constant_contact
        }
      }
    }
  }
`;
