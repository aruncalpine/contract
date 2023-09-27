import { Box } from '@chakra-ui/react';
import Features from '@components/Features';
import SignupSection from '@components/SignupSection';
import { getImageAttributes, getStrapiImageUrl } from '@utils/getStrapiImageUrl';
import Image from 'next/image';
import { FC } from 'react';
import { usePageData } from 'store/usePageData';

const boxStyles = {
  0: {
    maxW: 709,
    maxH: 355,
    marginBottom: '-13px',
  },
  1: {
    maxW: 689,
    maxH: 402,
    marginBottom: '-55px',
  },
  2: {
    maxW: 701,
    maxH: 383,
    marginBottom: '-37px',
  },
  3: {
    maxW: 836,
    maxH: 308,
  },
};

const Feature: FC = () => {
  const pageData = usePageData((e) => e.pageData)?.features.data!;

  return (
    <>
      <Box maxW="1440px" m="auto">
        {pageData.map(({ attributes }, index) => (
          <Features
            key={attributes?.title}
            title={attributes?.title!}
            description={attributes?.description!}
            content={
              <Box m="auto" {...boxStyles[index]}>
                <Image
                  src={getStrapiImageUrl(attributes?.cover_image)}
                  width={getImageAttributes(attributes?.cover_image)!.width!}
                  height={getImageAttributes(attributes?.cover_image)!.height!}
                  alt={getImageAttributes(attributes?.cover_image)?.alternativeText ?? ''}
                />
              </Box>
            }
          />
        ))}

        <SignupSection />
      </Box>
    </>
  );
};

export default Feature;
