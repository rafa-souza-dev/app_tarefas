import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import TarefasContext from '../context/TarefasContext'

export default ({route, navigation}) => {

    const [tarefa, setTarefa] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(TarefasContext)
    
    const [errorMateria, setErrorMateria] = useState(null)
    const [errorDetalhes, setErrorDetalhes] = useState(null)

    const validar = () => {
        let erro = false
        setErrorMateria(null)
        setErrorDetalhes(null)
        if (tarefa.materia == null || tarefa.materia == ""){
            setErrorMateria("Preencha a Matéria")
            erro = true
        }
        if (tarefa.detalhes == null || tarefa.detalhes == ""){
            setErrorDetalhes("Preencha os Detalhes")
            erro = true
        }
        return !erro
    }

    return (
        <View style={style.form}>
            <Text style={style.text}>Matéria:*</Text>
            <Input
                style={style.input} 
                onChangeText={materia => {
                    setTarefa({...tarefa, materia})
                    setErrorMateria(null)}}
                placeholder="Informe a Matéria"
                value={tarefa.materia}
                errorMessage={errorMateria}
            />
            <Text style={style.text}>Detalhes:*</Text>
            <Input
                style={style.input} 
                onChangeText={detalhes => {
                    setTarefa({...tarefa, detalhes})
                    setErrorDetalhes(null)}}
                placeholder="Informe os Detalhes"
                value={tarefa.detalhes}
                errorMessage={errorDetalhes}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    if (validar()) {
                        dispatch({
                            type: tarefa.id ? 'updateTarefa' : 'createTarefa',
                            payload: tarefa,
                        })
                        navigation.goBack()
                    }
                }}
            />

        </View>
    )
}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    form: {
        padding: 14,
    },
    text: {
        fontSize: 30,
    }

})