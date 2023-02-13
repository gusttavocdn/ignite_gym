import { Text, View, StatusBar } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoading] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (fontsLoading) {
    return (
      <NativeBaseProvider>
        <Loading />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#202024',
        }}
      >
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </NativeBaseProvider>
  );
}
