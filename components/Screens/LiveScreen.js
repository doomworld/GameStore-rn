import React from 'react';
import { StatusBar } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styled from 'styled-components';
import Text from '../Text';
import games from '../../gamesData';

const LiveScreen = () => {
	return (
		<LiveScreenContainer>
			<StatusBar barStyle="light-content" />
			<Header>
				<Text large bold>
					Streaming
				</Text>
				<SearchContainer>
					<Search placeholder="Search..." />
					<SearchIcon>
						<Entypo name="magnifying-glass" size={24} color="#838383" />
					</SearchIcon>
				</SearchContainer>
			</Header>
			<SectionContainer>
				<Text>Popular Games</Text>
				<PopularGames horizontal={true} showHorizontalScrollIndicator={false}>
					{games.map((game, index) => {
						return (
							<PopularGameContainer key={index}>
								<PopularGame source={game.cover} />
							</PopularGameContainer>
						);
					})}
				</PopularGames>
			</SectionContainer>
			<SectionContainer>
				<LiveGamesTitle>
					<Text>Live Now</Text>
					<Text bold color="#819ee5">
						View all
					</Text>
				</LiveGamesTitle>
			</SectionContainer>
			<LiveGames
				data={games}
				keyExtracter={(item) => String(item.id)}
				renderItem={({ item }) => (
					<LiveGameContainer>
						<LiveGame source={item.cover} />
						<LiveGameOver>
							<LiveGameTitle>
								<Text small bold>
									{item.title}
								</Text>
							</LiveGameTitle>
							<LiveGameBadge>
								<Text small bold>
									Live
								</Text>
							</LiveGameBadge>
						</LiveGameOver>
					</LiveGameContainer>
				)}
			/>
		</LiveScreenContainer>
	);
};

const LiveScreenContainer = styled.SafeAreaView`
	background-color: #343434;
	flex: 1;
`;

const Header = styled.View`
	margin: 20px 16px 0 16px;
`;

const SearchContainer = styled.View`
	position: relative;
	margin: 20px 8px;
	background-color: #404040;
	border-radius: 100px;
	justify-content: center;
`;

const Search = styled.TextInput`
	padding: 10px 64px 10px 32px;
	color: #c6c6c6;
`;

const SearchIcon = styled.TouchableOpacity`
	position: absolute;
	right: 16px;
`;

const SectionContainer = styled.View`
	margin: 0 16px;
`;

const PopularGames = styled.ScrollView`
	margin: 11px 0 16px -11px;
`;

const PopularGameContainer = styled.View`
	width: 80px;
	margin: 0 16px;
`;

const PopularGame = styled.Image`
	width: 80px;
	height: 80px;
	border-radius: 40px;
`;

const LiveGamesTitle = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const LiveGames = styled.FlatList`
	flex: 1;
	margin: 14px 16px 0 16px;
`;

const LiveGameContainer = styled.View`
	position: relative;
`;

const LiveGame = styled.Image`
	width: 100%;
	height: 300px;
	margin-bottom: 16px;
	border-radius: 12px;
`;

const LiveGameOver = styled.View`
	position: absolute;
	flex-direction: row;
	align-items: center;
	top: 8px;
	right: 16px;
`;

const LiveGameTitle = styled.View`
	background-color: #819ee5;
	border-radius: 4px;
	padding: 2px 8px;
	margin-right: 4px;
`;

const LiveGameBadge = styled.View`
	background-color: #e54949;
	border-radius: 4px;
	padding: 2px 8px;
`;

export default LiveScreen;
