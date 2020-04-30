import React from 'react';
import { Image} from 'react-native';

import { Container, Title } from './style';

import logoImg from '../../assets/logo.png';

const Signin: React.FC = () => {
    return (
        <Container>
            <Image source={logoImg} />

            <Title>Faça seu logon</Title>
        </Container>
    )
}
export default Signin;
