import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const LiveScreen = () => {
	return (
		<LiveScreenContainer>
			<Text color="#7a7a7a">Live screen</Text>
		</LiveScreenContainer>
	);
};

const LiveScreenContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export default LiveScreen;
