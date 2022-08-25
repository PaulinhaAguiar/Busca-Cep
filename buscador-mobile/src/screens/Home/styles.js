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
    title: {
        color: theme.colors.branco,
        fontSize: 50
    },
    viewSearch: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    input: {
        backgroundColor: 'rgba(255,255,255, 0.2)',
        width: '100%',
        padding: 15,
        borderRadius: 8,
        shadowColor: 'rgba(0,0,0,0.5)',
        marginVertical: 25,
        color: theme.colors.branco,
        fontSize: 16,
        textAlign: 'center'
    },
    btn: {
        backgroundColor: theme.colors.azul,
        padding: 10,
        borderRadius: 8,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    txtBtn: {
        color: theme.colors.branco,
        fontSize: 18,
        textTransform: 'uppercase',
        marginRight: 15,
        fontWeight: '700'
    }
});