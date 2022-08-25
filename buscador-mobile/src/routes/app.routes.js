import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from '../global/theme';

import { Home } from '../screens/Home';
import { Details } from '../screens/Details';

const Stack = createNativeStackNavigator();

export function Routes(){
    return(
        <NavigationContainer>

            <Stack.Navigator initialRouteName='Home'>

                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        title: 'Busca Cep',
                        headerStyle:{
                            backgroundColor: theme.colors.cinzaescuro
                        },
                        headerTintColor: theme.colors.cinzaescuro
                    }}
                />

                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        title:'Resultado da busca',
                        headerStyle:{
                            backgroundColor: theme.colors.cinzaescuro
                        },
                        headerTintColor: theme.colors.branco,
                        headerTitleStyle:{
                            fontSize: 18
                        }
                    }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
}