import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons';
import Text from '../Text';
import games from '../../gamesData';

const ProfileScreen = ({ route, navigation }) => {
	return (
		<ProfileScreenContainer>
			<StatusBar barStyle="light-content" />
			<AvatarContainer>
				<AvatarBorder>
					<Avatar source={require('../../assets/profile.jpg')} />
				</AvatarBorder>
				<Text large bold>
					Dr. Doom
				</Text>
			</AvatarContainer>
			<Badge>
				<Text small heavy>
					Doomworld
				</Text>
			</Badge>
			<Stats>
				<Stat>
					<Text large heavy>
						250 <Text color="#9a9a9a">Games</Text>
					</Text>
				</Stat>
				<Stat>
					<Text large heavy>
						3 <Text color="#9a9a9a">Purchases</Text>
					</Text>
				</Stat>
			</Stats>
			<Text center medium>
				Purchased Games
			</Text>
			<Games
				data={games}
				keyExtracter={(item) => String(item.id)}
				renderItem={({ item }) => (
					<Game>
						<GameImage source={item.cover} />
						<Info>
							<Text>{item.title}</Text>
							<Text small color="#9a9a9a">
								{Math.floor(Math.random() * 1000) + 1} Sales
							</Text>
						</Info>
						<Text heavy color="#819ee5">
							${Math.floor(Math.random() * 50) + 1}
						</Text>
					</Game>
				)}
			/>
			<Account>
				<Settings>
					<Entypo name="cog" size={24} color="#ffffff" />
				</Settings>
				<Logout>
					<Text heavy>Logout</Text>
				</Logout>
			</Account>
		</ProfileScreenContainer>
	);
};

const ProfileScreenContainer = styled.View`
	flex: 1;
	background-color: #343434;
`;

const AvatarContainer = styled.View`
	margin: 20px 0 5px 0;
	align-items: center;
`;

const AvatarBorder = styled.View`
	padding: 1px;
	border: 2px solid;
	border-color: #819ee5;
	border-radius: 99px;
	margin-bottom: 8px;
`;

const Avatar = styled.Image`
	width: 84px;
	height: 84px;
	border-radius: 99px;
`;

const Badge = styled.View`
	background-color: #819ee5;
	align-self: center;
	padding: 3px 9px;
	border-radius: 8px;
`;

const Stats = styled.View`
	flex-direction: row;
	align-items: center;
	align-self: center;
	margin: 15px 0;
`;

const Stat = styled.View`
	margin: 0 10px;
`;

const Games = styled.FlatList`
	margin: 18px 10px 0 10px;
`;

const Game = styled.View`
	flex-direction: row;
	align-items: center;
	margin-bottom: 10px;
`;

const GameImage = styled.Image`
	width: 60px;
	height: 60px;
	border-radius: 10px;
`;

const Info = styled.View`
	flex: 1;
	margin: 0 10px;
`;

const Account = styled.View`
	margin: 20px 10px 5px;
	flex-direction: row;
`;
const Settings = styled.TouchableOpacity`
	background-color: #819ee5;
	padding: 8px;
	border-radius: 8px;
`;
const Logout = styled.TouchableOpacity`
	flex: 1;
	background-color: #404040;
	border-radius: 8px;
	align-items: center;
	justify-content: center;
	margin-left: 16px;
`;

export default ProfileScreen;
