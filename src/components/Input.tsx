import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from 'native-base';

type Props = IInputProps & {
  errorMessage?: string | null;
};

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        {...rest}
        bg='gray.700'
        h={14}
        px={4}
        isInvalid={invalid}
        borderWidth={0}
        color='white'
        fontFamily='body'
        placeholderTextColor='gray.300'
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: 'green.500',
        }}
      />

      <FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
    </FormControl>
  );
}
