const testoRosso = {color:"red"};

const HelloWorld = () => {
    var pianetaAzzurro="Mondo";
    var pianetaDeiMorti="Plutone";
    let testoRosso = {color:"#8f33ff" }
return (
        <div style={testoRosso}>
            <p>Ave {pianetaAzzurro}</p>
            <p>Il pianeta dei morti è {pianetaDeiMorti}</p>
        </div>
    );
}

ReactDOM.render(<HelloWorld/>, document.getElementById('root'));