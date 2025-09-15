import { Tabs } from 'expo-router';

import { useColorScheme } from '@/apps/expo-mobile/hooks/use-color-scheme';
import { Colors } from '@/apps/expo-mobile/constants/theme';
import { HapticTab } from '@/apps/expo-mobile/components/haptic-tab';
import { IconSymbol } from '@/apps/expo-mobile/components/ui/icon-symbol.ios';

import { Greet } from '@/packages/shared/greet';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  Greet("Yağız")

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
