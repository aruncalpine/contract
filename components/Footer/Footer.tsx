import { Box, Center, Flex, Text, useToast } from '@chakra-ui/react';
import { getStrapiImageUrl } from '@utils/getStrapiImageUrl';
import Image from 'next/image';

import { FC } from 'react';
import { usePageData } from 'store/usePageData';

const Footer: FC = () => {
  const pageData = usePageData((e) => e.pageData)?.config!.data?.attributes;
  const socialLinks = usePageData((e) => e.pageData)?.socialLink.data?.attributes!;

  const toast = useToast();
  const goTo = (link?: string): void => {
    if (link) {
      const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
      if (newWindow) newWindow.opener = null;
      return;
    }

    toast({
      title: 'Coming soon',
      position: 'bottom-right',
    });
  };

  return (
    <Box>
      <Box pos="relative" bg="#1c083d" zIndex={1}>
        <Box pos="absolute" mixBlendMode="screen" top="0" left="100" opacity="0.5">
          <Image src="/svgs/footer-left-circle.svg" alt="footer-left-circle" width={350} height={500} />
        </Box>

        <Box pos="absolute" mixBlendMode="color-dodge" top="0" right="0" opacity="0.5" zIndex={1}>
          <Image src="/svgs/footer-right-circle.svg" alt="footer-right-circle" width={400} height={400} />
        </Box>
        <Box maxW={1440} m="auto">
          <Box pt="241px" pb="121px" mx="21px">
            <Flex
              justifyContent={{
                base: 'center',
                md: 'space-between',
              }}
              alignItems="center"
              flexDirection={{
                base: 'column',
                md: 'row',
              }}
            >
              <Box>
                <Image
                  src={getStrapiImageUrl(pageData?.pyxelchain_logo)}
                  className="built-by-pyxel-logo"
                  width={285}
                  height={95}
                  alt="logo"
                />

                <Text
                  size="xxs"
                  mt="24px"
                  textAlign={{
                    base: 'center',
                    md: 'left',
                  }}
                >
                  {pageData?.copyright_notice}
                </Text>
              </Box>

              <Box>
                <Text
                  textAlign={{
                    base: 'center',
                    md: 'left',
                  }}
                  size="sm"
                  mt={{
                    base: '44px',
                    md: 0,
                  }}
                >
                  {socialLinks.headline}
                </Text>
                <Flex mt="28px" alignItems="center" pos="relative" zIndex={2}>
                  {socialLinks.links!.map((item) => {
                    return (
                      <Box key={item?.title} mr="22px" cursor="pointer" onClick={(): void => goTo(item?.link ?? '')}>
                        <Image src={getStrapiImageUrl(item?.logo)} width={33} height={33} alt={item?.title ?? ''} />
                      </Box>
                    );
                  })}
                </Flex>
              </Box>
            </Flex>
          </Box>

          <Box
            display="grid"
            placeContent="center"
            cursor="pointer"
            onClick={(): void => {
              window.scrollTo({
                top: 0,
              });
            }}
            pb="21px"
          >
            <Center>
              <Image src={getStrapiImageUrl(pageData?.logo)} alt="Contract Registry Logo" width={37} height={38} />
            </Center>

            <Text size="xxs" color="#594B70">
              Back to top
            </Text>

            <Center>
              <Image src="/svgs/back-to-top.svg" alt="Contract Registry Logo" width={20} height={20} />
            </Center>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
