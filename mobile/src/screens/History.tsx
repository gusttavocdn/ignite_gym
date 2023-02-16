import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Heading, VStack, SectionList, Text } from 'native-base';
import { useState } from 'react';

export function History() {
  const [exercises, setExercises] = useState<any>([]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercicíos' />

      <SectionList
        sections={exercises}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section: { title } }) => (
          <Heading color='gray.200' fontSize='md' mt={10} mb={3}>
            {' '}
            {title}
          </Heading>
        )}
        px={8}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color='gray.100' textAlign='center'>
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercíocios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* <HistoryCard /> */}
    </VStack>
  );
}
