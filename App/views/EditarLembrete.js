import React, { Component } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native';
import FormLembrete from '../components/FormLembrete'
export default class EditarLembrete extends Component {
    state = {
        lembrete: undefined
    }
    onSave(data) {
        const pageId = this.props.match.params.pageId
        fetch('https://deviup.com.br:3001/api/lembrete/' + pageId, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(T => T.json())
            .then(() => this.props.history.push('/'))
    }
    componentDidMount() {
        const pageId = this.props.match.params.pageId
        fetch('https://deviup.com.br:3001/api/lembrete/' + pageId, { method: 'GET' })
            .then(T => T.json())
            .then(lembrete => this.setState({ lembrete }))
    }
    render() {
        const { lembrete } = this.state
        return (

            <View style={styles.container}>
                <Text style={styles.texto}> Editar Lembrete </Text>
                {!lembrete && (
                    <Text>Não há dados</Text>
                )}

                {lembrete && (
                    <FormLembrete value={lembrete} onSave={this.onSave.bind(this)} onCancel={
                        () => this.props.history.push('/')} />
                )}
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {


    },
    texto: {
        paddingTop: 40
    }
})