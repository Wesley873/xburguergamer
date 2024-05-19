import './App.css';
import GeneralMenu from '../../components/Menu/Menu';
import Card from '../../components/card/Card';
import Lanches from '../../../configs/Lanches';

import lanche1 from '../../images/xburguergamer.png';
import lanche2 from '../../images/streetfigherchicken.png';
import lanche3 from '../../images/lanche3.jpeg';
import lanche4 from '../../images/lanche4.jpeg';
import lanche5 from '../../images/lanche5.jpeg';


function App() {
  const fotos = [lanche1, lanche2, lanche3, lanche4, lanche5];
  const lanches = new Lanches();

  return (
    <div className="App">
      <GeneralMenu />
      <div>
        {/* <h1>Cardapio</h1> */}
        {lanches.lista.map((lanche, index) => {
          return <Card key={index} title={lanche.title} photo={fotos[index]} description={lanche.description} price={lanche.price} id={lanche.id}/>
        })}
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
