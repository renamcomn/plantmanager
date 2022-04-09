import React from 'react';
import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
    View
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import Watering from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import Button from '../components/Button';

export default function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😀
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas
                    plantinhas com muito cuidado.
                </Text>

                <View style={styles.footer}>
                    <Button title='Continuar'/>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30
    },
    emoji: {
        fontSize: 78
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        lineHeight: 38,
        marginTop: 15,
        color: colors.heading
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        textAlign: 'center',
        paddingVertical: 10,
        color: colors.heading
    },
    footer: {
        width: '100%',
        paddingHorizontal: 50,
        marginTop: 20
    }
});