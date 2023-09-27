import { ApolloProvider } from '@apollo/client';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Footer from '@components/Footer';
import theme from '@utils/theme';
import { client } from 'graphql/client';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { FC } from 'react';
import 'utils/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    localStorage.setItem('version', '0.0.4');
  }

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Box bg="#F5F5F5" minH="100vh" scrollBehavior="smooth">
          <Component {...pageProps} />
          {router.pathname === '/' && <Footer />}
        </Box>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
