import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/theme';

export function Details({route}){
    const resultado = route.params.cep;

    useEffect(() => {
        console.log('tela 2 = ', resultado.cep)
    }, [])

    return (
        <LinearGradient
            colors={[theme.colors.cinzaescuro, theme.colors.azulescuro]}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <View style={styles.busca}>
                    <Text style={styles.cep}>CEP: {resultado.cep}</Text>
                    <Text style={styles.info}>{resultado.logradouro}</Text>
                    <Text style={styles.info}>Complemento: {resultado.complemento}</Text>
                    <Text style={styles.info}>{resultado.bairro}</Text>
                    <Text style={styles.info}>{resultado.localidade} - {resultado.uf}</Text>
                </View>
            </View>
        </LinearGradient>
    );
}