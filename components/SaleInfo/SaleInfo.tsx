import { Box } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

const SaleInfo: FC<{
  content: ReactElement;
}> = ({ content }) => (
  <Box
    bg="linear-gradient(223.59deg, #3F1093 -8.2%, rgba(63, 16, 147, 0) 95.14%), #1C083D"
    px="29px"
    py="34px"
    borderRadius="12px"
    minW={{
      base: '100%',
      md: 300,
    }}
    h={{
      base: '348px',
      lg: '300px',
    }}
  >
    <Box display="grid" placeContent="center" h="100%">
      {content}
    </Box>
  </Box>
);

export default SaleInfo;
