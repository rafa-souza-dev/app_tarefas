import React, {  useContext, useState } from 'react'
import {  View, FlatList, Alert } from 'react-native'
import { Icon, ListItem } from "react-native-elements";
import { Button } from 'react-native-elements';
import TarefasContext from '../context/TarefasContext';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default props => {

    const { state, dispatch } = useContext(TarefasContext)

    const [isSelected, setSelected] = useState(false)

    function confirmTarefaDeletion(tarefa) {
        Alert.alert('Excluir Tarefa', 'Deseja excluir a tarefa?', [
            {
                text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteTarefa',
                        payload: tarefa
                    })
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function botaoDeletar (tarefa) {
        return (
            <>
                <Button 
                    onPress={() => confirmTarefaDeletion(tarefa)}
                    type="clear"
                    icon={<Icon name="delete" size={30} color="red" />}
                />
            </>
        )
    }

    function getTarefaItem({ item: tarefa }) {
        return <View>
                <ListItem key={tarefa.id} bottomDivider
                onPress={() => props.navigation.navigate('TarefaForm', tarefa)}>
                    <ListItem.Content>
                        <ListItem.Title>{tarefa.materia}</ListItem.Title>
                        <ListItem.Subtitle>{tarefa.detalhes}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Content>
                        <BouncyCheckbox
                            textColor="black"
                            fillColor="green"
                            fontFamily="Arial"
                            text="Marcar como concluída"
                            iconStyle={{ borderColor: "blue" }}
                        />
                    </ListItem.Content>
                    <ListItem.Content right>
                        {botaoDeletar(tarefa)}
                    </ListItem.Content>
                </ListItem>
            </View>
    }

    return (
        <View>
            <FlatList
                data={state.tarefas}
                keyExtractor={tarefa => tarefa.id.toString()}
                renderItem={getTarefaItem}
            />
        </View>
    )
}