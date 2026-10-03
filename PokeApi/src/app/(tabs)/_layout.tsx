import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { PokeProvider } from '@/context/pokecontext';
import { DragonProvider } from '@/context/dragoncontext';

export default function TabLayout() {
  return (
    <PokeProvider>
      <DragonProvider>
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: '#fcfdfc',
            tabBarActiveBackgroundColor: '#030317',
            tabBarStyle: {
              backgroundColor: '#d4d4d5',
            },
          }}
        >
          <Tabs.Screen name="index" options={{
            title: 'Sprites',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'images-sharp' : 'images-outline'} color={color} size={24} />
            ),
          }} />
          <Tabs.Screen name="datos" options={{
            title: 'Datos',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'bar-chart-sharp' : 'bar-chart-outline'} color={color} size={24} />
            ),
          }} />
          <Tabs.Screen name="dragonindex" options={{
            title: 'Basic',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'images-sharp' : 'images-outline'} color={color} size={24} />
            ),
          }} />
          <Tabs.Screen name="dragondata" options={{
            title: 'Datos',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'bar-chart-sharp' : 'bar-chart-outline'} color={color} size={24} />
            ),
          }} />
        </Tabs>
      </DragonProvider>
    </PokeProvider>
  );
}