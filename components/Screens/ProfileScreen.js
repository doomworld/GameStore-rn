import React from 'react';
import styled from 'styled-components';
import Text from '../Text';

const ProfileScreen = () => {
	return (
		<ProfileScreenContainer>
			<Text color="#7a7a7a">profile screen</Text>
		</ProfileScreenContainer>
	);
};

const ProfileScreenContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export default ProfileScreen;
