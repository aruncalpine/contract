import { extendTheme } from '@chakra-ui/react';
import components from './components';
import { STYLES } from './styles';

const theme = extendTheme({
  styles: STYLES,
  components,
  colors: {
    black: '#0A071A',
  },
});

export default theme;
