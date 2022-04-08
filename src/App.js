import Menu from './components/Menu'
import Main from './components/Main'
import CheckableButton from './components/CheckableButton'
import CountButton from './components/CountButton'
import Counter from './components/Counter'
import Product from './components/Ficha/index'


function App() { // Funcão com a primeira letra maiuscula = componente funcional
  // Chaves no JSX = Javascript
  // Class substituido pelo className pois é uma palavra reservada
  

  const onClickHome = () => {
    console.log('Pagina inicial po')
  }

  const onClickEquipe = () => {
    console.log('Pagina equipe po')
  }


  return (
    <div>
      <h1>Teste</h1>
      {/* <CheckableButton>teste</CheckableButton> */}
      {/* <CountButton step={2}></CountButton>  */}
      {/* <Counter step={5}></Counter> */}
      {/* <Menu />
      <Main /> */}
      <div>
        <h1>Card</h1>
      </div>
      <Product/>
    </div>
  
  );
}

export default App
