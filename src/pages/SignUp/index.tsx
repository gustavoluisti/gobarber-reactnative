import React, { useRef } from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    View,
    ScrollView,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, BackToSignIn, BackToSignInText } from './style';

import logoImg from '../../assets/logo.png';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
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
                            <Title>Crie sua conta</Title>
                        </View>
                        <Form
                            ref={formRef}
                            onSubmit={(data) => {
                                console.log(data);
                            }}
                        >
                            <Input
                                autoCapitalize="words"
                                name="name"
                                icon="user"
                                placeholder="Nome"
                            />

                            <Input
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                                name="email"
                                icon="mail"
                                placeholder="E-mail"
                                returnKeyType="next"
                            />
                            <Input
                                secureTextEntry
                                name="password"
                                icon="lock"
                                placeholder="Senha"
                                textContentType="newPassword"
                                returnKeyType="send"
                                onSubmitEditing={() => formRef.current?.submitForm()}
                            />
                            <Button
                                onPress={() => formRef.current?.submitForm()}
                            >
                                Entrar
                            </Button>
                        </Form>
                    </Container>
                </ScrollView>

                <BackToSignIn onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" size={20} color="#fff" />
                    <BackToSignInText>Voltar para logon</BackToSignInText>
                </BackToSignIn>
            </KeyboardAvoidingView>
        </>
    );
};
export default SignUp;
