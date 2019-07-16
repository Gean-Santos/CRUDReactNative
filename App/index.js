import React, { Component } from 'react'
import { View } from 'react-native'
import { NativeRouter, Switch, Route } from 'react-router-native'

import ListaLembretes from './views/ListaLembretes'
import CadastroLembrete from './views/CadastroLembrete'
import EditarLembrete from './views/EditarLembrete'

export default class App extends Component {
  render() {

    return (
      <NativeRouter>
        <View >
          <Switch>
            <Route path='/cadastro' component={CadastroLembrete} />
            <Route path='/:pageId' component={EditarLembrete} />
            <Route component={ListaLembretes} />
          </Switch>
        </View>
      </NativeRouter>
    )

  }

}


