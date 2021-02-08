import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Text from '../Text';

const GameScreen = ({ route, navigation }) => {
	const { game } = route.params;

	const renderStar = () => {
		let stars = [];

		for (let s = 0; s <= 5; s++) {
			stars.push(
				<Ionicons
					name="ios-star"
					key={s}
					size={14}
					style={{ marginRight: 2 }}
					color={Math.floor(game.rating) >= s ? '#819ee5' : '#434958'}
				/>
			);
		}

		return <Stars>{stars}</Stars>;
	};

	return (
		<GameContainer>
			<StatusBar barStyle="light-content" />
			<GameArtContainer>
				<GameArt source={game.cover} />
				<BackButton onPress={() => navigation.goBack()}>
					<Ionicons
						name="ios-close"
						size={30}
						color="#ffffff"
						// borderRadius={99}
					/>
				</BackButton>
			</GameArtContainer>
			<GameInfoScrollViewContainer showVerticalScrollIndicator={false}>
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
					<Text bold color="#819ee5">
						Rating {'\t'}
						<Text heavy color="#9a9a9a">
							{game.rating}
						</Text>
					</Text>
					{renderStar()}
					<Text bold color="#819ee5">
						Category{'\t'}
						<Text small color="#9a9a9a">
							{game.category[0]}
						</Text>
					</Text>
				</GameStatusContainer>
				<GameStatusContainer>
					<Text bold color="#819ee5">
						Age {'\t'}
						<Text small bold color="#9a9a9a">
							{game.age}
						</Text>
					</Text>
					<Text bold color="#819ee5">
						Label {'\t'}
						<Text small bold color="#9a9a9a">
							Game of the day
						</Text>
					</Text>
				</GameStatusContainer>
				<ScreenShotsContainer>
					<ScreenShots horizontal={true} showHorizontalScrollIndicator={false}>
						{game.screenshots.map((screenshot, index) => {
							return (
								<ScreenShotContainer key={index}>
									<ScreenShot source={screenshot} />
								</ScreenShotContainer>
							);
						})}
					</ScreenShots>
				</ScreenShotsContainer>
				<Description small color="#9a9a9a">
					{game.description}
				</Description>
			</GameInfoScrollViewContainer>
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
	height: 250px;
	width: 100%;
	border-bottom-right-radius: 32px;
	border-bottom-left-radius: 32px;
`;

const BackButton = styled.TouchableOpacity`
	position: absolute;
	top: 48px;
	left: 16px;
	background-color: #9a9a9a;
	padding: 2px;
	border-radius: 99px;
`;

const GameInfoScrollViewContainer = styled.ScrollView``;

const GameInfoContainer = styled.View`
	flex-direction: row;
	align-items: center;
	padding: 16px 0;
	margin: 5px 16px;
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
	border-radius: 20px;
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
	border-radius: 25px;
	align-items: center;
	justify-content: center;
`;

const GameStatusContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
	margin: 5px 12px;
`;

const Stars = styled.View`
	flex-direction: row;
	align-self: center;
`;

const ScreenShotsContainer = styled.View`
	margin: 8px 0;
`;

const ScreenShots = styled.ScrollView``;

const ScreenShotContainer = styled.View`
	padding: 16px;
	shadow-color: #000000;
	shadow-offset: 1px 1px;
	shadow-opacity: 0.5;
	shadow-radius: 5px;
`;

const ScreenShot = styled.Image`
	width: 300px;
	height: 200px;
	border-radius: 12px;
`;

const Description = styled(Text)`
	margin: 0 16px;
	line-height: 22px;
	text-align: center;
`;

export default GameScreen;
