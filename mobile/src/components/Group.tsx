import { Text, Pressable, IPressableProps } from 'native-base';

type Props = IPressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: Props) {
  return (
    <Pressable
      {...rest}
      bg='gray.600'
      h={10}
      w={24}
      mr={3}
      rounded='md'
      justifyContent='center'
      alignItems='center'
      overflow='hidden'
      isPressed={isActive}
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 1,
      }}
    >
      <Text
        color={isActive ? 'green.500' : 'gray.200'}
        textTransform='uppercase'
        fontSize='xs'
        fontWeight='bold'
      >
        {name}
      </Text>
    </Pressable>
  );
}
