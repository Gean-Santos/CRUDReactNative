import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, TextInput, Picker } from 'react-native'

export default class FormLembrete extends Component {

    state = this.props.value || {
        conteudo: '',
        prioridade: 'MEDIA',
        arquivado: false
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value) {
            this.setState(nextProps.value)
        }
    }
    render() {
        return (
            <View style={styles.container}>

                <View>
                    <View>
                        <Text>Conteudo</Text>
                        <TextInput
                            placeholder='Digite o conteudo da mensagem'
                            value={this.state.conteudo}
                            onChangeText={conteudo => this.setState({ conteudo })}
                        />

                    </View>
                    <View>
                        <Text>Prioridade</Text>
                        <Picker
                            selectedValue={this.state.prioridade}
                            onValueChange={prioridade => this.setState({ prioridade })}>
                            <Picker.Item label='Baixa' value='BAIXA' />
                            <Picker.Item label='Média' value='MEDIA' />
                            <Picker.Item label='Alta' value='ALTA' />
                        </Picker>
                    </View>
                    <View>
                        <Text>Arquivar</Text>
                        <Picker
                            selectedValue={this.state.arquivado}
                            onValueChange={arquivado => this.setState({ arquivado })}>
                            <Picker.Item label='Sim' value />
                            <Picker.Item label='Não' value={false} />
                        </Picker>
                    </View>
                </View>

                <View>
                    <Button title='Salvar' disabled={this.state.conteudo === ''}
                        onPress={() => this.props.onSave(this.state)} />
                    <Button title='Cancelar' onPress={this.props.onCancel} />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})