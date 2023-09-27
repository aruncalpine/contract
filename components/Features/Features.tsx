import { Box, Card, Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type FeatureProps = {
  title: string;
  description: string;
  content: ReactElement;
};

const Features: FC<FeatureProps> = ({ title, description, content }) => (
  <Card
    mb="64px"
    mx={{
      base: '20px',
      xl: 0,
    }}
  >
    <Box
      mx={{
        base: '14px',
        lg: '66px',
      }}
      background="#f8f9fd"
      mt="32px"
      mb="58px"
    >
      <Text variant="gradient" mb="82px" mt="37px">
        {title}
      </Text>

      <Box>{content}</Box>
    </Box>

    <Box maxW="847px" m="auto">
      <Text
        mx={{
          base: '16px',
          xl: 0,
        }}
        size={{
          base: 'xs',
          lg: 'sm',
        }}
        textAlign="center"
        my="44px"
      >
        {description}
      </Text>
    </Box>
  </Card>
);

export default Features;
