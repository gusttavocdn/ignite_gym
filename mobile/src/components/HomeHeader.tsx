import { HStack, Heading, Text, VStack, Icon } from 'native-base';
import { UserPhoto } from './UserPhoto';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '@hooks/useAuth';

import defaultUserPhotoImg from '@assets/userPhotoDefault.png';

export function HomeHeader() {
  const {
    user: { name, avatar },
    signOut,
  } = useAuth();

  return (
    <HStack bg='gray.600' pt={16} pb={5} px={8} alignItems='center'>
      <UserPhoto
        size={16}
        source={avatar ? { uri: avatar } : defaultUserPhotoImg}
        alt='Imagem do usuario'
        mr={4}
      />

      <VStack flex={1}>
        <Text color='gray.100' fontSize='md'>
          Olá,
        </Text>

        <Heading color='gray.100' fontSize='md'>
          {name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={signOut}>
        <Icon as={MaterialIcons} name='logout' color='gray.200' size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
