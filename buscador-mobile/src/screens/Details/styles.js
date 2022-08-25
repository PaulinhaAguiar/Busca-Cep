import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5%'
    },
    gradient: {
        flex: 1
    },
    busca: {
        backgroundColor: theme.colors.branco,
        width: '90%',
        height: '60%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    cep: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    info: {
        fontSize: 18,
        fontWeight: '500',
        marginTop: '15%'
    }
});