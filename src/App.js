import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TarefaList from './views/TarefaList'
import TarefaForm from './views/TarefaForm'
import { Button, Icon } from 'react-native-elements'
import { TarefasProvider } from './context/TarefasContext'

const Stack = createStackNavigator()

export default props => {
    return (
        <TarefasProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="TarefaList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="TarefaList"
                        component={TarefaList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Tarefas",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate("TarefaForm")}
                                        type="clear"
                                        icon={<Icon name="add" size={33} color="white"/>}
                                    />
                                )
                            }
                        }}
                    />
                    <Stack.Screen
                        name="TarefaForm"
                        component={TarefaForm}
                        options={{
                            title: "Formulário de Tarefas"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </TarefasProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#20B2AA'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}