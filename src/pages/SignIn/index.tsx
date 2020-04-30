import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    View,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container,
    Title,
    ForgotPassword,
    ForgotPasswordText,
    CreateAccountButton,
    CreateAccountButtonText,
} from './style';

import logoImg from '../../assets/logo.png';

const Signin: React.FC = () => {
    const navigation = useNavigation();

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
                            <Title>Faça seu logon</Title>
                        </View>

                        <Input name="email" icon="mail" placeholder="E-mail" />
                        <Input
                            name="password"
                            icon="lock"
                            placeholder="Senha"
                        />
                        <Button onPress={() => {}}>Entrar</Button>

                        <ForgotPassword onPress={() => {}}>
                            <ForgotPasswordText>
                                Esqueci minha senha
                            </ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>

                <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
                    <Icon name="log-in" size={20} color="#ff9000" />
                    <CreateAccountButtonText>
                        Criar uma conta
                    </CreateAccountButtonText>
                </CreateAccountButton>
            </KeyboardAvoidingView>
        </>
    );
};
export default Signin;
