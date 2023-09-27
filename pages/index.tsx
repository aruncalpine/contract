import { Box } from '@chakra-ui/react';
import Header from '@components/Header';
import { client } from 'graphql/client';
import { GET_DATA } from 'graphql/queries';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC, useEffect } from 'react';
import Feature from 'sections/feature';
import HeroSection from 'sections/hero/hero';
import { PageDataProps, usePageData } from 'store/usePageData';

const Home: FC<{ data: PageDataProps }> = ({ data }) => {
  const setPageData = usePageData((e) => e.setPageData);

  setPageData(data);

  useEffect(() => {
    (async (): Promise<void> => {
      const { data } = await client.query({
        query: GET_DATA,
      });

      setPageData({
        config: data.config,
        features: data.features,
        heroSection: data.heroSection,
        socialLink: data.socialLink,
      });
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Contract Registry</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Box>
        <HeroSection />
        <Feature />
      </Box>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: GET_DATA,
  });

  return {
    props: {
      data: {
        config: data.config,
        features: data.features,
        heroSection: data.heroSection,
        socialLink: data.socialLink,
      },
    },
  };
};

export default Home;
