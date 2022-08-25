import React from "react";
import { View, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/theme';

export function Load(){
    return(
        <View style={styles.container}>
            <ActivityIndicator
                size='small'
                color={theme.colors.branco}
            />
        </View>
    );
}