import {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1]= useState();
  const [linea2, setLinea2]= useState();
  const [imagen, setImagen]= useState();

  const onChangeLinea1 = function(e){
      setLinea1(e.target.value.toUpperCase());
  }
  const onChangeLinea2 = function(e){
      setLinea2(e.target.value.toUpperCase());
  }
  const onChangeImagen = function(e){
      setImagen(e.target.value);
  }
  const onClickExportar = function(e){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.download =  'meme.png';
      link.href = img;
      link.click();
  });
  }
  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select><br />

      <input onChange={onChangeLinea1} type="text" placeholder="Línea 1" /><br />
      <input onChange={onChangeLinea2} type="text"  placeholder="Línea 2"/><br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id="meme">
        <p className="linea1">{linea1}</p>
        <p className="linea2">{linea2}</p>
        <img src={"/img/" + imagen + ".jpg"} alt="seleccionar meme"/>

      </div>


    </div>
  );
}

export default App;
