import React, {
    Component
} from 'react'


class TrabajoConFormularios extends Component {

    render() {
        return (
            <div>
                <form name="formulario1" id="formulario1id" action="">
                    <fieldset>
                        <legend>Formulario en React</legend>
                        <label for="campotexto1id">Nombre:</label>
                        <input type="text" name="campotexto1" id="campotexto1id" placeholder="Introduce tu nombre"></input><br />
                        <label for="campotexto2id">Busqueda:</label>
                        <input type="text" className="claseinput1"name="campotexto2" id="campotexto2id" placeholder="Término de busqueda"></input>
                        
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default TrabajoConFormularios
