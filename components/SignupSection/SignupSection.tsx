import { Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

const SignupSection: FC = () => {
  return (
    <Box mt="129px" textAlign="center" mb="120px" px="22px">
      <Text
        size={{
          base: 'xl',
          lg: '64',
        }}
        color="#0A071A"
      >
        Sign up for our Private Beta now
      </Text>
      <Text
        size={{
          base: 'sm',
          lg: 'lg',
        }}
        mt="24px"
        mb="28px"
        color="#0A071A"
      >
        For auditors who want to be part of our Auditor Catalog
      </Text>
      <Link href="/get-early-access">
        <Text
          color="#6B5ECD"
          size={{
            base: 'xxs',
            lg: 'sm',
          }}
          fontWeight={600}
          cursor="pointer"
        >
          Get Early Access
        </Text>
      </Link>

      <Box
        mt="76px"
        display="flex"
        justifyContent="center"
        gap="21px"
        flexDirection={{
          base: 'column',
          lg: 'row',
        }}
      >
        {/* <SaleInfo
          content={
            <Box color="white">
              <Text size="96" mb="4px">
                50%
              </Text>
              <Text size="xl" mb="24px">
                OFF
              </Text>
              <Text size="lg" opacity="0.5">
                Yearly fee
              </Text>
            </Box>
          }
        />
        <SaleInfo
          content={
            <>
              <Text fontSize="lg" mb="4px">
                for the first
              </Text>
              <Text fontSize="96">2yrs.</Text>
            </>
          }
        /> */}
      </Box>
    </Box>
  );
};

export default SignupSection;
