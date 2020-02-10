import React , {Component} from 'react'
import SelectoresAtributo from './SelectoresAtributo.js'
import TrabajoConFormularios from './TrabajoConFormularios.js'


class App extends Component{

    render(){
        return (
            <div>
                <h1>Selectores de Atributo</h1>
                <SelectoresAtributo />
                <h1>Trabajo con Formularios</h1>
                <TrabajoConFormularios />
            </div>
        )
    
    }
        

}

export default App 