import { Box, Text } from '@chakra-ui/react';
import SignupInput from '@components/SignupInput';
import { FC } from 'react';

const Waitlist: FC = () => {
  return (
    <Box mx="20px">
      <Box
        maxW={1440}
        m="auto"
        mb={`-150px`}
        zIndex={2}
        pos="relative"
        borderRadius="24px"
        bg="linear-gradient(109.48deg, #830BB2 3.98%, #F7FB32 113.6%)"
        px="20px"
      >
        <Text
          size={{
            base: 'lg',
            xl: 'xl',
          }}
          py={{
            base: '44px',
            xl: '92px',
          }}
          textAlign="center"
        >
          Join the waitlist
        </Text>

        <SignupInput />

        <Text
          size={{
            base: 'xxs',
            lg: 'sm',
          }}
          textAlign="center"
        >
          This will be used only to email you about early access. <br /> We won’t spam you or sell your information.
        </Text>
        <Box h="70px" />
      </Box>
    </Box>
  );
};

export default Waitlist;
