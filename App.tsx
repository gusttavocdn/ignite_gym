import { Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/Loading';
import { THEME } from './src/theme';
import { SignUp } from '@screens/SignUp';

export default function App() {
  const [fontsLoading] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoading) {
    return (
      <NativeBaseProvider theme={THEME}>
        <Loading />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#202024',
        }}
      >
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <SignUp />
      </View>
    </NativeBaseProvider>
  );
}
