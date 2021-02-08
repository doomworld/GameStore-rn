import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/Screens/HomeScreen';
import GameScreen from './components/Screens/GameScreen';
import ProfileScreen from './components/Screens/ProfileScreen';
import LiveScreen from './components/Screens/LiveScreen';
import { Entypo } from '@expo/vector-icons';
// import { useFonts } from '@expo-google-fonts/inter';
import Text from './components/Text';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
	showLabel: false,
	style: {
		backgroundColor: '#343434',
		borderTopColor: '#343434',
		paddingBottom: 12,
	},
};

const NavScreen = () => {
	return (
		<Tab.Navigator
			tabBarOptions={tabBarOptions}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					let iconName;
					switch (route.name) {
						case 'HomeScreen':
							iconName = 'home';
							break;
						case 'LiveScreen':
							iconName = 'game-controller';
							break;
						case 'ProfileScreen':
							iconName = 'user';
							break;

						default:
							iconName = 'home';
							break;
					}

					return (
						<TabBarIconContainer focused={focused}>
							<Entypo name={iconName} size={24} color="#ffffff" />
						</TabBarIconContainer>
					);
				},
			})}
		>
			<Tab.Screen name="HomeScreen" component={HomeScreen} />
			<Tab.Screen name="LiveScreen" component={LiveScreen} />
			<Tab.Screen name="ProfileScreen" component={ProfileScreen} />
		</Tab.Navigator>
	);
};

// custom loading screen
const LoadingScreen = () => {
	return (
		<Loading>
			<Text medium bold>
				Loading...
			</Text>
		</Loading>
	);
};

export default function App() {
	// let [fontsLoaded] = useFonts({});

	// if (fontsLoaded) {
	// 	return <LoadingScreen />;
	// }

	return (
		<NavigationContainer>
			<Stack.Navigator mode="modal" headerMode="none">
				<Stack.Screen name="App" component={NavScreen} />
				<Stack.Screen name="GameScreen" component={GameScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const TabBarIconContainer = styled.View`
	background-color: ${(props) => (props.focused ? '#819ee5' : '#343434')};
	padding: 2px 16px;
	border-radius: 32px;
`;

const Loading = styled.View`
	flex: 1;
	align-items: center;
	justfy-content: center;
`;
