import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/theme';

export function Details({route}){
    const { cep, logradouro, complemento, bairro, localidade, uf } = route.params;

    return (
        <LinearGradient
            colors={[theme.colors.cinzaescuro, theme.colors.azulescuro]}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <View style={styles.busca}>
                    <Text style={styles.cep}>CEP: {JSON.stringify(cep)}</Text>
                    <Text style={styles.info}>{JSON.stringify(logradouro)}</Text>
                    <Text style={styles.info}>Complemento: {JSON.stringify(complemento)}</Text>
                    <Text style={styles.info}>{JSON.stringify(bairro)}</Text>
                    <Text style={styles.info}>{JSON.stringify(localidade)} - {JSON.stringify(uf)}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}