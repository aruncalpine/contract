import { useMutation } from '@apollo/client';
import { Box, Button, Center, Icon, Input, Select, Text, Textarea } from '@chakra-ui/react';
import Header from '@components/Header';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import validateEmail from '@utils/validateEmail';
import TIMEZONES from 'constants/timezones';
import { client } from 'graphql/client';
import { CREATE_EARLY_ACCESS_USER } from 'graphql/mutations';
import { GET_DATA, USE_CONSTANT_CONTACT } from 'graphql/queries';
import { Query } from 'graphql/types';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, ReactElement, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { PageDataProps, usePageData } from 'store/usePageData';

const ConstantContactForm = dynamic((): any => import('components/ConstantContactForm').then((mod) => mod.default), {
  ssr: false,
});

const boxStyles = {
  display: 'flex',
  color: '#474553',
  gap: '20px',
  flexDirection: {
    xs: 'column-reverse',
    lg: 'row',
  },
  width: '100%',
  mt: '32px',
};

const inputStyles = {
  size: 'sm',
  borderRadius: '6px',
  color: '#2D3748',
  fontSize: '16px',
  lineHeight: '24px',
};

const erroredBorder = '2px solid #E53E3E';
const erroredInput = {
  border: erroredBorder,
  _hover: {
    border: erroredBorder,
  },
  _focus: {
    border: erroredBorder,
  },
};

const GetEarlyAccess: FC<{ data: PageDataProps }> = ({ data }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm({
    mode: 'all',
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const router = useRouter();
  const [createEarlyAccessUser] = useMutation(CREATE_EARLY_ACCESS_USER);
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

  useEffect(() => {
    if (router.query.email) {
      setValue('email', router.query.email);
    }
  }, []);

  const email = watch('email');
  const name = watch('name');
  const website = watch('website');
  const timezone = watch('name');

  const isEmpty = !Boolean(email || name || website || timezone);

  const onSubmit = (data): void => {
    setLoading(true);

    void client
      .query({
        query: USE_CONSTANT_CONTACT,
        fetchPolicy: 'network-only',
      })
      .then(async ({ data: ccData }: { data: Query }) => {
        try {
          const useConstantContact = ccData.config?.data?.attributes?.use_constant_contact;

          if (!useConstantContact) {
            await createEarlyAccessUser({
              variables: data,
            });
            setLoading(false);
            setSent(true);
            reset();
          } else {
            (document.getElementById('email_address_1') as HTMLInputElement).value = data.email;
            (document.getElementById('custom_field_string_website_1') as HTMLInputElement).value = data.website;
            (document.getElementById('custom_field_string_timezone_1') as HTMLInputElement).value = data.timezone;
            (document.getElementById('custom_field_string_name_1') as HTMLInputElement).value = data.name;
            (document.getElementById('custom_field_string_description_of_business_1') as HTMLInputElement).value =
              data.business ?? 'N/A';
            (document.querySelector('button.ctct-form-button') as HTMLButtonElement).click();
          }
        } catch (ex) {
          console.log(ex); // eslint-disable-line
        } finally {
          const timeout = setTimeout(() => {
            setLoading(false);
            setSent(true);
            clearTimeout(timeout);
            reset();
          }, 3000);
        }
      });
  };

  return (
    <>
      <Head>
        <title>Contract Registry | Get Early Access</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Header />
      <Box bg="#1C083D">
        <Box pos="relative">
          <Box
            pos="absolute"
            right={0}
            top={{
              base: -70,
              xl: 0,
            }}
            zIndex={1}
            mixBlendMode="color-dodge"
            marginTop="-200px"
            opacity="0.75"
          >
            <Image src="/svgs/right-small-circle.svg" width={550} height={550} alt="small circle" />
          </Box>
        </Box>

        <Box pos="relative" maxW="1440px" m="auto" textAlign="center">
          <Box
            pos="absolute"
            bottom={{
              base: 200,
              xl: 10,
            }}
            left={{
              base: -40,
              xl: 0,
            }}
            zIndex={1}
            mixBlendMode="color-dodge"
            opacity="0.75"
          >
            <Image src="/svgs/small-circle.svg" width={550} height={550} alt="small circle" />
          </Box>
        </Box>

        <Box
          py="20px"
          mx={{
            base: '20px',
            lg: '60px',
          }}
          h={{
            base: 'inherit',
            lg: 'calc(100vh - 153.19px)',
          }}
          position="relative"
          zIndex="4"
        >
          <Box bg="#F8F9FD" borderRadius="24px" maxW="1044px" m="auto" px="16px">
            {!sent ? (
              <>
                <Text variant="gradient" pt="64px" pb="49px">
                  Sign up for early access
                </Text>
                <Text
                  color="#0A071A"
                  fontSize="22px"
                  lineHeight="32px"
                  mx="16px"
                  textAlign="center"
                  maxW="617px"
                  m="auto"
                >
                  Currently, we are offering a limited number of <br /> audit partners for our launch.
                </Text>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Box maxW="617px" m="auto">
                    <Box textAlign="left" w="100%" px="16px">
                      <Box
                        {...boxStyles}
                        flexDirection={{
                          base: 'column-reverse',
                          lg: 'row',
                        }}
                      >
                        <Box flex="1">
                          <Text mb="8px" size="16">
                            Name
                          </Text>
                          <Input
                            placeholder="Your Name"
                            {...inputStyles}
                            {...register('name', { required: true })}
                            {...(errors.name?.type === 'required' && erroredInput)}
                          />
                        </Box>
                        <Box flex="1">
                          <Text mb="8px" size="16">
                            Email
                          </Text>
                          <Controller
                            name="email"
                            control={control}
                            rules={{
                              required: true,
                              validate: validateEmail,
                            }}
                            render={({ field }): ReactElement => (
                              <Input
                                placeholder="yourname@gmail.com"
                                {...field}
                                {...inputStyles}
                                {...(errors.email && erroredInput)}
                              />
                            )}
                          />
                        </Box>
                      </Box>

                      <Box
                        {...boxStyles}
                        flexDirection={{
                          base: 'column-reverse',
                          lg: 'row',
                        }}
                      >
                        <Box flex="1">
                          <Text mb="8px" size="16">
                            Website
                          </Text>
                          <Input
                            placeholder="mysite.com"
                            {...inputStyles}
                            {...register('website', {
                              required: true,
                            })}
                            {...(errors.website?.type === 'required' && erroredInput)}
                          />
                        </Box>
                        <Box flex="1">
                          <Text mb="8px" size="16">
                            Timezone
                          </Text>
                          <Select
                            placeholder="Select timezone"
                            {...inputStyles}
                            fontSize="15px"
                            {...register('timezone', {
                              required: true,
                            })}
                            {...(errors.timezone?.type === 'required' && erroredInput)}
                          >
                            {TIMEZONES.map((item) => (
                              <option value={item} key={item}>
                                {item}
                              </option>
                            ))}
                          </Select>
                        </Box>
                      </Box>

                      <>
                        <Box color="#474553" mt="32px" mb="61px">
                          <Text mb="8px" size="16">
                            Describe Business
                          </Text>
                          <Textarea placeholder="A few description of your business" {...register('business')} />
                        </Box>

                        <Center cursor="pointer">
                          <Button
                            borderRadius="100px"
                            color="white"
                            rightIcon={<Icon as={ArrowRightIcon} />}
                            colorScheme="purple"
                            bg="#6B5ECD"
                            mb="54px"
                            type="submit"
                            isDisabled={Boolean(Object.keys(errors).length) || loading || isEmpty}
                            isLoading={loading}
                          >
                            <Text size="xxs" my="12px">
                              Sign up
                            </Text>
                          </Button>
                        </Center>
                      </>
                    </Box>
                  </Box>
                </form>
              </>
            ) : (
              <>
                <Text variant="gradient" pt="127px" pb="49px">
                  Thank You
                </Text>
                <Text
                  color="#0A071A"
                  fontSize="22px"
                  lineHeight="32px"
                  mx="16px"
                  textAlign="center"
                  maxW="617px"
                  m="auto"
                  pb="152px"
                >
                  A contract expert will be in touch shortly.
                </Text>
              </>
            )}
          </Box>
        </Box>
        <ConstantContactForm />
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

export default GetEarlyAccess;
