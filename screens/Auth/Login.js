import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { InputCustom, ButtonCustom } from './../../CustomComponent';
import Logo from '../../assets/imageSvg/ImageSVG';

const { width, height } = Dimensions.get('window');
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigation = useNavigation();
    return (
        <ImageBackground style={styles.wrapper} source={images.login} resizeMode="stretch">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.logo}>
                    <Logo />
                </View>
                <Text style={styles.title}>Log In</Text>
                <View style={styles.form}>
                    <View style={styles.formGroup}>
                        <InputCustom
                            style={styles.input}
                            placeholder="Email address"
                            keyboardType="email-address"
                            value={email}
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            placeholderTextColor="#fff"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <InputCustom
                            style={{ ...styles.input, paddingRight: 45 }}
                            placeholder="Password"
                            showPass={!showPass}
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor="#fff"
                        />
                        <TouchableOpacity style={styles.showPass} onPress={() => setShowPass(!showPass)}>
                            <Image source={showPass ? icons.viewPass : icons.hiddenPass} />
                        </TouchableOpacity>
                    </View>
                    <ButtonCustom
                        style={{ marginTop: 21.5 }}
                        text="Login"
                        onPress={() => navigation.navigate('ScreenBottomTab')}
                    />
                </View>
                <Text style={styles.textForgot} onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgot password?
                </Text>

                <View style={styles.noAccount}>
                    <Text style={styles.noAccountText}>
                        Don’t have an account?{' '}
                        <Text style={styles.sign} onPress={() => navigation.navigate('SignUp')}>
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 20,
        // height: height,
    },
    logo: {
        marginTop: 36,
        // marginTop: 36,
    },
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textMedium,
    },
    form: {
        alignItems: 'center',
        marginTop: 82,
    },
    formGroup: {
        marginBottom: 16.5,
        justifyContent: 'center',
        width: WIDTH.width100,
    },

    showPass: {
        position: 'absolute',
        right: 0,
        padding: 10,
    },
    textForgot: {
        color: COLORS.white,
        marginTop: 23,
    },
    noAccount: {
        marginTop: 195,
        marginBottom: 89,
        flex: 1,
        justifyContent: 'center',
    },
    noAccountText: {
        color: '#6F6D6D',
        fontSize: SIZES.medium,
        fontWeight: 600,
    },
    sign: {
        color: COLORS.white,
    },
});

export default Login;
