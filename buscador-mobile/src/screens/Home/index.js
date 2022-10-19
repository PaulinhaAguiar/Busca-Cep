import React, { useState } from 'react';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome5';
import { Load } from '../../components/Load';
import api from '../../services/api';
import { styles } from './styles';
import { theme } from '../../global/theme';

export function Home({navigation}){
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSearch(){
        setLoading(true);

        if(input === ''){
            setLoading(false);
            Alert.alert('OPS!','Informe um cep para prosseguir...');
            return;
        }
    
        try{
            const response = await api.get(`${input}/json`);
            setInput('');
            setLoading(false);
            navigation.navigate('Details', { 
                cep: response.data.cep,
                logradouro: response.data.logradouro,
                complemento: response.data.complemento,
                bairro: response.data.bairro,
                localidade: response.data.localidade,
                uf: response.data.uf
            });
        }
        catch(error){
            Alert.alert('Tente novamente','Ocorreu um erro ao buscar o cep...');
            console.log(error)
            setLoading(false);
            setInput('');
        }
      }

    return (
        <LinearGradient 
            colors={[theme.colors.cinzaescuro, theme.colors.azulescuro]}
            style={styles.gradient}
        >
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Busca CEP</Text>

                <View style={styles.viewSearch}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Informe o CEP...'
                        placeholderTextColor={theme.colors.branco}
                        value={input}
                        onChangeText={(text) => setInput(text)}
                    />

                    <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={handleSearch}>
                        {
                            loading ? 
                            <Load />
                            :
                            <>
                                <Text style={styles.txtBtn}>Buscar</Text>
                                <FontAwesome name='search' size={18} color={theme.colors.branco} />
                            </>
                        }
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}