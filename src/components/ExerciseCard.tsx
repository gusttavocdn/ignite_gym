import { Heading, HStack, Image, VStack, Text, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg='gray.500'
        alignItems='center'
        p={2}
        pr={4}
        rounded='md'
        mb={3}
      >
        <Image
          source={{
            uri: 'https://github.com/gusttavocdn.png',
          }}
          alt='Imagem do exercício'
          w={16}
          h={16}
          rounded='md'
          resizeMode='cover'
        />
        <VStack flex={1} ml={4}>
          <Heading color='gray.100' fontSize='lg'>
            Remada unilateral
          </Heading>

          <Text color='gray.200' fontSize='sm' mt={1} numberOfLines={2}>
            3 séries x 10 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name='chevron-thin-right' color='gray.300' />
      </HStack>
    </TouchableOpacity>
  );
}
