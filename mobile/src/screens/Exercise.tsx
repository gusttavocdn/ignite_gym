import {
  Center,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Box,
  ScrollView,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';

export function Exercise() {
  const { goBack } = useNavigation<AppNavigatorRoutesProps>();

  const handleGoBack = () => {
    goBack();
  };

  return (
    <VStack flex={1}>
      <ScrollView>
        <VStack px={8} bg='gray.600' pt={12}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon as={Feather} name='arrow-left' color='green.500' size={6} />
          </TouchableOpacity>

          <HStack
            justifyContent='space-between'
            mt={4}
            mb={8}
            alignItems='center'
          >
            <Heading color='gray.100' fontSize='lg' flexShrink={1}>
              Puxada Frontal
            </Heading>
            <HStack alignItems='center'>
              <BodySvg />
              <Text color='gray.100' ml={1} textTransform='capitalize'>
                Costas
              </Text>
            </HStack>
          </HStack>
        </VStack>

        <VStack p={8}>
          <Image
            w='full'
            h={80}
            source={{
              uri: 'https://github.com/gusttavocdn.png',
            }}
            alt='Nome do Exercicio'
            mb={3}
            resizeMode='cover'
            overflow='hidden'
            rounded='lg'
          />
          <Box bg='gray.600' rounded='md' pb={4} px={4}>
            <HStack
              alignItems='center'
              justifyContent='space-around'
              mb={6}
              mt={5}
            >
              <HStack alignItems='center'>
                <SeriesSvg />
                <Text color='gray.200' ml={2}>
                  3 séries
                </Text>
              </HStack>

              <HStack alignItems='center'>
                <RepetitionSvg />
                <Text color='gray.200' ml={2}>
                  3 séries
                </Text>
              </HStack>
            </HStack>

            <Button title='Marcar como realizado' />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
