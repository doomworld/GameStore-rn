import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Text from '../Text';

const GameScreen = ({ route, navigation }) => {
	const { game } = route.params;
	console.log(game);

	return (
		<GameContainer>
			<StatusBar barStyle="light-content" />
			<GameArtContainer>
				<GameArt source={game.cover} />
				<BackButton onPress={() => navigation.goBack()}>
					<Ionicons name="ios-close" size={40} color="#ffffff" />
				</BackButton>
			</GameArtContainer>
			<GameInfoContainer>
				<GameThumbContainer>
					<GameThumb source={game.cover} />
				</GameThumbContainer>
				<GameInfo>
					<Text heavy medium>
						{game.title}
					</Text>
					<Text color="#9a9a9a">{game.teaser}</Text>
				</GameInfo>
				<Download>
					<Ionicons name="md-cloud-download" size={24} color="#ffffff" />
				</Download>
			</GameInfoContainer>
			<GameStatusContainer>
				<Text heavy color="#9a9a9a">
					{`${game.rating} `} <Ionicons name="star" size={14} color="#FFD700" />
				</Text>
				<Text>{game.category[0]}</Text>
				<Text>{game.age}</Text>
				<Text>Game of the day</Text>
			</GameStatusContainer>
		</GameContainer>
	);
};

const GameContainer = styled.View`
	background-color: #343434;
	flex: 1;
`;

const GameArtContainer = styled.View`
	position: relative;
`;

const GameArt = styled.Image`
	height: 350px;
	width: 100%;
	border-bottom-right-radius: 32px;
	border-bottom-left-radius: 32px;
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	top: 48px;
	left: 16px;
	background-color: #9a9a9a;
	border-radius: 40px;
`;

const GameInfoContainer = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 16px 0;
	margin: 8px 16px;
`;

const GameThumbContainer = styled.View`
	shadow-color: #000000;
	shadow-offset: 1px 1px;
	shadow-opacity: 0.5;
	shadow-radius: 2px;
`;

const GameThumb = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 16px;
`;

const GameInfo = styled.View`
	width: 0;
	flex-grow: 1;
	margin: 0 8px 0 16px;
`;

const Download = styled.View`
	background-color: #819ee5;
	width: 45px;
	height: 45px;
	border-radius: 20px;
	align-items: center;
	justify-content: center;
`;

const GameStatusContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin: 0 16px;
`;

export default GameScreen;
