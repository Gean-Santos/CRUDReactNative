import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import FormLembrete from '../components/FormLembrete'

export default class CadastroLembrete extends Component {
    onSave(data) {
        fetch('https://deviup.com.br:3001/api/lembrete', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json'
            }
        })
            .then(T => T.json())
            .then(() => this.props.history.push('/')).catch(e => console.log('error:', e.message))
    }
    render() {
        return (

            <View >
                <Text style={styles.container}> Cadastro Lembrete </Text>
                <FormLembrete onSave={this.onSave.bind(this)}
                    onCancel={() => this.props.history.push('/')} />
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 50
    }
})