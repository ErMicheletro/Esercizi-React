const identità = {nome:"Mara", cognome:"Maionchi", età:"81"};
const musica = 'Crust punk';

const ImgProfile = function (attributi){
    return (
        <div>
            <img src="/assets/img/Mara_Maionchi_Crust_Punk.png" title={attributi.configImg.titolo} width={attributi.configImg.larghezza}/>
        </div>
    );
}

class Person extends React.Component {
    debugger
    constructor(attributi){
        super(attributi);
        //set a state + deafult value
        this.state={peso:75, occupazione:"Agitatrice delle masse"};
        //puntatore al valore del tag input
        this.inputPesoRef = React.createRef();
        this.inputProfessioneRef = React.createRef();
    }
    inviaForm(event){
        const newPeso = this.inputPesoRef.current.value;
        this.setState({peso:newPeso})
        const newOccupazione = this.inputProfessioneRef.current.value;
        this.setState({occupazione:newOccupazione})
        event.preventDefault();
    }
    getTitle(){
        return this.props.anagrafica.nome + '_' + this.props.anagrafica.cognome;
    }
    render(){
        return(
        <div class="persona_component">
            <ImgProfile configImg={{titolo:this.getTitle(), larghezza:'400'}}/>
            <h1>Anagrafica persona</h1>
            <h2>Nome: {this.props.anagrafica.nome}</h2>
            <h2>Cognome: {this.props.anagrafica.cognome}</h2>
            <h2>Anni: {this.props.anagrafica.età}</h2>
            <h2>Peso: {this.state.peso} Kg</h2>
            <h2>Occupazione: {this.state.occupazione}</h2>
            <h2> Ascolta {this.props.genere}</h2>
            <form onSubmit={this.inviaForm.bind(this)}>
                <label>Peso</label>
                <input type="text" name="peso" ref={this.inputPesoRef}/>
                <label></label>
                <input type="text" name="professione" ref={this.inputProfessioneRef}/>
                <button type="Submit">Invia</button>
            </form>
        </div>
        )
    }
}

ReactDOM.render(<Person anagrafica={identità} genere={musica}/> , document.getElementById('root'));