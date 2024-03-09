import React from 'react';
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable, StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { BlurView } from 'expo-blur';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome6 size={28} style={{ marginBottom: -3 }} {...props} />;
}

const TABS = [
  {
    tabName: 'home',
    icon: 'house',
  },
  {
    tabName: 'cats',
    icon: 'cat',
  },
  {
    tabName: 'cars',
    icon: 'car',
  },
  {
    tabName: 'boats',
    icon: 'sailboat',
  },
];


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // headerShown: useClientOnlyValue(false, true),
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              overflow: 'hidden',
              backgroundColor: "transparent",
            }}
          />
        )
      }}>
      {TABS.map((tab) => (
        <Tabs.Screen
          key={tab.tabName}
          name={tab.tabName}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name={tab.icon as any} color={color} />,
            tabBarLabel: tab.tabName,
          }}
        />
      ))}

    </Tabs>
  );
}
