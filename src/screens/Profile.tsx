import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import {
  Center,
  ScrollView,
  Text,
  VStack,
  Skeleton,
  Heading,
} from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const PHOTO_SIZE = 33;

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(true);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Perfil' />

      <ScrollView
        contentContainerStyle={{
          paddingBottom: 36,
        }}
      >
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded='full'
              startColor='gray.500'
              endColor='gray.400'
            />
          ) : (
            <UserPhoto
              source={{ uri: 'https:github.com/gusttavocdn.png' }}
              size={PHOTO_SIZE}
              alt='Foto do usuario'
            />
          )}

          <TouchableOpacity>
            <Text
              color='green.500'
              fontWeight='bold'
              fontSize='md'
              mt={2}
              mb={8}
            >
              Alterar foto
            </Text>
          </TouchableOpacity>

          <Input placeholder='Nome' bgColor='gray.600' />
          <Input
            placeholder='Email'
            bgColor='gray.600'
            value='gusttavo.x.santos@gmail.com'
            isDisabled
          />
        </Center>

        <VStack px={10} mt={12} mb={9}>
          <Heading color='gray.200' fontSize='md' mb={2}>
            Alterar Senha
          </Heading>

          <Input placeholder='Senha' bgColor='gray.600' secureTextEntry />
          <Input placeholder='Nova Senha' bgColor='gray.600' secureTextEntry />
          <Input
            placeholder='Confirme a nova senha'
            bgColor='gray.600'
            secureTextEntry
          />

          <Button title='Atualizar' mt={4} />
        </VStack>
      </ScrollView>
    </VStack>
  );
}
