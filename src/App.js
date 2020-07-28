import React, { Component } from 'react';
import TodoList from '../src/components/TodoList'
import ThemeSwitcher from '../src/components/ThemeSwitcher'
import * as themes from '../src/styles/themes/index'
import ThemeContext from './styles/themes/context'
import {ThemeProvider} from 'styled-components'








class App extends Component {
  //Criando um estado  para armazenar o tema usado
  state ={
    theme: themes.dark // Tema Padrao

  };
   
   // Função para fazer a alteração do tema
   toggleTheme = ()=>{
    this.setState({theme: this.state.theme === themes.dark? themes.light : themes.dark})
  }

  render(){
    return(
      <div>
  
        <ThemeContext.Provider value={this.state}  >
        <ThemeSwitcher toggleTheme={this.toggleTheme} />
        <ThemeContext.Consumer>
          { theme=>(
            <ThemeProvider theme={theme}>
              <TodoList  />

            </ThemeProvider>
            
          )}
        </ThemeContext.Consumer>
      
  
        </ThemeContext.Provider>
        
      </div>
    )
  }
  
   
}

export default App;
