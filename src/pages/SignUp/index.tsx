import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    View,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container,
    Title,
    BackToSignIn,
    BackToSignInText,
} from './style';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <Image source={logoImg} />
                        <View>
                            <Title>Crie sua conta</Title>
                        </View>

                        <Input name="name" icon="user" placeholder="Nome" />

                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input
                            name="password"
                            icon="lock"
                            placeholder="Senha"
                        />
                        <Button onPress={() => {}}>Entrar</Button>

                    </Container>
                </ScrollView>

                <BackToSignIn onPress={() => {}}>
                    <Icon name="arrow-left" size={20} color="#fff" />
                    <BackToSignInText>
                        Voltar para logon
                    </BackToSignInText>
                </BackToSignIn>
            </KeyboardAvoidingView>
        </>
    );
};
export default SignUp;
