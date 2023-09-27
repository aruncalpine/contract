import { useMutation } from '@apollo/client';
import { Box, Button, Center, Icon, Input, Text, useToast } from '@chakra-ui/react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import validateEmail from '@utils/validateEmail';
import { client } from 'graphql/client';
import { CREATE_BETA_LIST_SUBSCRIBER } from 'graphql/mutations';
import { USE_CONSTANT_CONTACT } from 'graphql/queries';
import { Query } from 'graphql/types';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';

const ConstantContactForm = dynamic((): any => import('components/ConstantContactForm').then((mod) => mod.default), {
  ssr: false,
});

const SignupInput: FC = () => {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [createBetaListSubscriber] = useMutation(CREATE_BETA_LIST_SUBSCRIBER);

  const sucessToast = (): void => {
    toast({
      title: 'Thanks for signing up!',
      status: 'success',
      position: 'bottom-right',
    });
    setLoading(false);
    setEmail('');
  };

  const onClick = (): void => {
    client
      .query({
        query: USE_CONSTANT_CONTACT,
        fetchPolicy: 'network-only',
      })
      .then(async ({ data }: { data: Query }) => {
        const useConstantContact = data.config?.data?.attributes?.use_constant_contact;

        if (!email) {
          toast({
            title: 'Email is required',
            status: 'error',
            position: 'bottom-right',
          });
          return;
        }

        if (!validateEmail(email)) {
          toast({
            title: 'Invalid Email',
            status: 'error',
            position: 'bottom-right',
          });
          return;
        }

        setLoading(true);

        if (!useConstantContact) {
          try {
            await createBetaListSubscriber({
              variables: {
                email,
              },
            });
          } finally {
            sucessToast();
          }
        }

        const timeout = setTimeout(() => {
          const emailContainer = document.getElementById('email_address_2');

          if (emailContainer) {
            (document.getElementById('email_address_2') as HTMLInputElement).value = email;
            (document.querySelector('button.ctct-form-button') as HTMLButtonElement).click();

            let counter = 0;

            const interval = setInterval(() => {
              const x = document.getElementById('success_message_2') as HTMLElement;

              if (!(window.getComputedStyle(x).display === 'none')) {
                sucessToast();
                clearInterval(interval);
              }

              counter += 1;

              if (counter === 10) {
                sucessToast();
                clearInterval(interval);
              }
            }, 1000);
          } else {
            console.log('🤡'); // eslint-disable-line
            toast({
              title: 'Thanks for signing up!',
              status: 'success',
              position: 'bottom-right',
            });
            setLoading(false);
            setEmail('');
          }

          clearTimeout(timeout);
        }, 3000);
      });
  };

  return (
    <Box pos="relative" zIndex={2}>
      <Input
        placeholder="yourname@email.com"
        border="none"
        mt="35px"
        mb="26px"
        fontSize={{
          base: '16px',
          xl: '18px',
        }}
        textAlign="center"
        _placeholder={{
          textAlign: 'center',
          color: '#ffffff',
          opacity: 0.5,
        }}
        _focus={{
          boxShadow: 'none',
        }}
        onChange={(e): void => setEmail(e.target.value)}
        value={email}
      />
      <Box
        maxW={{
          base: '90vw',
          xl: '600px',
        }}
        m="auto"
      >
        <Box borderBottom="1px solid #ffffff" mb="24px" opacity="0.5" mx={5} />
      </Box>

      <Center onClick={onClick} cursor="pointer">
        <Button
          borderRadius="100px"
          color="white"
          rightIcon={<Icon as={ArrowRightIcon} />}
          colorScheme="purple"
          bg="#6B5ECD"
          mb="54px"
          isLoading={loading}
          isDisabled={loading}
        >
          <Text
            size={{
              base: 'xxs',
              xl: 'sm',
            }}
            my="12px"
          >
            Sign up now
          </Text>
        </Button>
      </Center>

      <ConstantContactForm />
    </Box>
  );
};

export default SignupInput;
