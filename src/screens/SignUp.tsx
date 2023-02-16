import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome'),
  email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
  password: yup
    .string()
    .required('Informe a senha')
    .min(6, 'Mínimo de 6 caracteres'),
  password_confirmation: yup
    .string()
    .required('Confirme a senha')
    .oneOf([yup.ref('password')], 'As senhas não coincidem'),
});

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export function SignUp() {
  const { goBack } = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema),
  });

  const handleGoBack = () => {
    goBack();
  };

  const handleSignUp = (formData: FormDataProps) => {
    // console.log(data);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          alt='Pessoas treinando'
          resizeMode='contain'
          position='absolute'
        />

        <Center my={24}>
          <LogoSvg />

          <Text color='gray.100' fontSize='sm'>
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center>
          <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
            Crie sua conta
          </Heading>

          <Controller
            control={control}
            name='name'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Nome'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='E-mail'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Senha'
                onChangeText={onChange}
                value={value}
                errorMessage={errors.password?.message}
                secureTextEntry
              />
            )}
          />

          <Controller
            control={control}
            name='password_confirmation'
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder='Confirme sua senha'
                onChangeText={onChange}
                value={value}
                onSubmitEditing={handleSubmit(handleSignUp)}
                returnKeyType='send'
                errorMessage={errors.password_confirmation?.message}
                secureTextEntry
              />
            )}
          />

          <Button
            title='Criar e acessar'
            onPress={handleSubmit(handleSignUp)}
          />
        </Center>

        <Button
          title='Voltar para login'
          variant='outline'
          mt={24}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
