import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'

export default class ListaLembretes extends Component {
    state = {
        lembretes: []
    }
    componentDidMount() {
        fetch('https://deviup.com.br:3001/api/lembrete', { method: 'GET' })
            .then(T => T.json())
            .then(lembretes => this.setState({ lembretes }))
    }
    onDelete(id) {
        Alert.alert(
            'Exclusão de lembrete',
            'Você confirma a exclusão deste lembrete?', [
                { text: 'Não', style: 'cancel' },
                {
                    text: 'Sim',
                    onPress: () => {

                        fetch(`https://deviup.com.br:3001/api/lembrete/${id}`,
                            { method: 'DELETE' })
                            .then(T => T.id)
                            .then(() => this.setState({
                                lembretes: this.state.lembretes.filter(T => T.id !== id)
                            }))
                    }
                }
            ])
    }
    render() {

        const { lembretes } = this.state

        return (

            <View >

                <View >
                    <Text style={styles.container}>Lembrete</Text>
                    <Button style={styles.botao} title='Adicionar' onPress={() => this.props.history.push('/cadastro')} />
                </View>

                <View >
                    {lembretes.map((lembrete, key) => (
                        <View key={key}>
                            <Text>{lembrete.conteudo}</Text>
                            <Button title='Editar' onPress={() => this.props.history.push('/' + lembrete.id)} />
                            <Button title='Excluir' onPress={() => this.onDelete(lembrete.id)} />
                        </View>
                    ))}
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50
    },
    subcontainer: {
        flex: 0.9,

    },
    botao: {
        height: 40,
        width: 50,
        paddingTop: 20,
        paddingBottom: 20,
        flex: 1
    },
    styleKey: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})


