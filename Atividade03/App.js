import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Menu from './components/Menu';
import Pedidos from './components/Pedidos';
import Carrinho from './components/Carrinho';
import Context from './Context';


const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              if (route.name == 'Menu')
                return <Ionicons name="menu" size={size} color={color} />;
              else if (route.name == 'Carrinho')
                return <Ionicons name="cart" size={size} color={color} />;
            },
          })}>
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="Carrinho" component={Carrinho} />
          <Tab.Screen
            name="Pedidos"
            component={Pedidos}
            options={{ display: 'none', tabBarButton: () => null }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Context>
  );
};
