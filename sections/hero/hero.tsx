import { Box, Text } from '@chakra-ui/react';
import SignupInput from '@components/SignupInput';
import { getImageAttributes, getStrapiImageUrl } from '@utils/getStrapiImageUrl';
import { toMarkup } from '@utils/toMarkup';
import Image from 'next/image';
import { FC } from 'react';
import { usePageData } from 'store/usePageData';

const HeroSection: FC = () => {
  const pageData = usePageData((e) => e.pageData)?.heroSection.data?.attributes;

  return (
    <>
      <Box bg="#1C083D">
        <Box pos="relative">
          <Box
            pos="absolute"
            right={0}
            top={{
              base: -70,
              xl: 0,
            }}
            zIndex={1}
            mixBlendMode="color-dodge"
            marginTop="-200px"
            opacity="0.75"
          >
            <Image src="/svgs/right-small-circle.svg" width={550} height={550} alt="small circle" />
          </Box>
        </Box>

        <Box pos="relative" maxW="1440px" m="auto" textAlign="center">
          <Box
            pos="absolute"
            bottom={{
              base: 200,
              xl: 10,
            }}
            left={{
              base: -40,
              xl: 0,
            }}
            zIndex={1}
            mixBlendMode="color-dodge"
            opacity="0.75"
          >
            <Image src="/svgs/small-circle.svg" width={550} height={550} alt="small circle" />
          </Box>

          <Text
            size={{
              base: 'lg',
              sm: 'xl',
              xl: '2xl',
            }}
            mb="32px"
            dangerouslySetInnerHTML={{
              __html: `${pageData?.title}`.replace('\n', '<br />'),
            }}
          />
          <Box
            mx={{
              base: '20px',
              xl: 0,
            }}
          >
            <Text
              size={{
                base: 'sm',
                xl: 'md',
              }}
              maxW="1000px"
              m="auto"
              mb="77px"
            >
              {pageData?.subtitle}
            </Text>
          </Box>
          <Text
            size={{
              base: 'xs',
              xl: 'sm',
            }}
          >
            {pageData?.waitlist_headline}
          </Text>
          <SignupInput />
          <Box
            h={{
              base: '100px',
              xl: '272px',
            }}
          />
        </Box>
      </Box>

      <Box
        marginTop={{
          base: '-100px',
          xl: '-272px',
        }}
      >
        <Box maxW="1440px" m="auto" pos="relative" zIndex={2}>
          <Box
            px={{
              base: '20px',
              md: 0,
            }}
          >
            <Image
              src={getStrapiImageUrl(pageData?.hero_image)}
              width={5168}
              height={1920}
              alt={getImageAttributes(pageData?.hero_image)?.alternativeText ?? ''}
            />
          </Box>
          <Box
            m="auto"
            maxW="850px"
            px={{
              base: '20px',
              md: 0,
            }}
          >
            <Text
              size={{
                base: 'sm',
                xl: 'lg',
              }}
              color="#0A071A"
              textAlign="center"
              py={{
                base: '64px',
                xl: '115px',
              }}
              mt={{
                base: '50px',
                md: 0,
              }}
              dangerouslySetInnerHTML={{
                __html: toMarkup(pageData?.callout_text ?? ''),
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
