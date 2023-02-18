import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Box, useTheme } from 'native-base';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '@hooks/useAuth';
import { Loading } from '@components/Loading';

export function Routes() {
  const { colors } = useTheme();
  const theme = DefaultTheme;

  const { user, isLoadingUserStorageData } = useAuth();

  theme.colors.background = colors.gray[700];

  if (isLoadingUserStorageData) {
    return <Loading />;
  }

  console.log(user);
  return (
    <Box flex={1} bg='gray.700'>
      <NavigationContainer>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
