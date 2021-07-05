import React, { createContext, useReducer } from "react"
import tarefas from '../data/tarefas'

const initialState = { tarefas }
const TarefasContext = createContext({})

const actions = {
    createTarefa (state, action) {
        const tarefa = action.payload
        tarefa.id = Math.random()
        return {
            ...state,
            tarefas: [...state.tarefas, tarefa],
        }
    },
    updateTarefa(state, action) {
        const tarefa = action.payload
        return {
            ...state,
            tarefas: state.tarefas.map(t => t.id === tarefa.id ? tarefa : t)
        }
    },
    deleteTarefa(state, action) {
        const tarefa = action.payload
        return {
            ...state,
            tarefas: state.tarefas.filter(t => t.id !== tarefa.id)
        }
    }
}

export const TarefasProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <TarefasContext.Provider value={{ state, dispatch }}>
            {props.children}
        </TarefasContext.Provider>
    )
}

export default TarefasContext