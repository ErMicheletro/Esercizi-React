const identità = {nome:"Mara", cognome:"Maionchi", età:"81"};
const musica = 'Crust punk';

class Person extends React.Component {
    constructor(attributi){
        super(attributi);
        this.state={peso:75}
    }
    cambiaPeso(event){
        this.setState({peso:100})
        event.preventDefault();
    }
    render(){
        return(
        <div>
            <h1>Anagrafica persona</h1>
            <h2>{this.props.anagrafica.nome}</h2>
            <h2>{this.props.anagrafica.cognome}</h2>
            <h2>{this.props.anagrafica.età}</h2>
            <h2>{this.state.peso}</h2>
            <h2> Ascolta {this.props.genere}</h2>
            <form onSubmit={this.cambiaPeso.bind(this)}>
                <input type="text" name="peso"/>
                <button type="Submit">Invia</button>
            </form>
        </div>
        )
    }
}

ReactDOM.render(<Person anagrafica={identità} genere={musica}/> , document.getElementById('root'));