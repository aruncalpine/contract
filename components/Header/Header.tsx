import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Header: FC = () => {
  const router = useRouter();
  // const config = usePageData((e) => e.pageData)?.config!;

  return (
    <Box bg="#1C083D" pt="75px" pb="42px" pos="relative" px={10}>
      <Box pos="absolute" top="0" left="50%">
        <Image
          style={{ mixBlendMode: 'screen', opacity: 0.5 }}
          src="/svgs/big-circle.svg"
          height={462}
          width={462}
          alt="big circle"
        />
      </Box>
      <Box
        maxW="1440px"
        m="auto"
        display="flex"
        justifyContent={{
          base: 'center',
          lg: 'space-between',
        }}
      >
        <Flex
          alignItems="center"
          justifyContent={{
            base: 'center',
            lg: 'flex-start',
          }}
        >
          <Image
            // src={getStrapiImageUrl(config.data?.attributes?.logo)}
            src="https://contract-reg-strapi.gameficap.com/uploads/cr_logo_4854357497.svg"
            alt="Contract Registry Logo"
            width={37}
            height={38}
          />
          <Text size="sm" ml="6px" mt="-8px">
            Contract Registry
            {/* {config.data?.attributes?.website_title} */}
          </Text>
        </Flex>
        {router.pathname === '/get-early-access' && (
          <Flex
            pos="relative"
            zIndex="99"
            alignItems="center"
            onClick={(): void => {
              window.location.href = '/';
            }}
            cursor="pointer"
            display={{
              base: 'none',
              lg: 'flex',
            }}
          >
            <Text size="sm" ml="6px" mt="-8px">
              Back to home
            </Text>
            <Icon as={ArrowRightIcon} fontSize="24px" ml="8px" />
          </Flex>
        )}
      </Box>
    </Box>
  );
};

export default Header;
