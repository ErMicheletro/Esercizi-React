const identità = {nome:"Mara", cognome:"Maionchi"};
const musica = 'Crust punk';

class Person extends React.Component {
    constructor(attributi){
    super(attributi);
    debugger
    }
    render(){
        return(
        <div>
            <h1>Anagrafica persona</h1>
            <h2>{this.props.anagrafica.nome}</h2>
            <h2>{this.props.anagrafica.cognome}</h2>
            <h2> Ascolta {this.props.genere}</h2>
        </div>
        )
    }
}

ReactDOM.render(<Person anagrafica={identità} genere={musica}/> , document.getElementById('root'));