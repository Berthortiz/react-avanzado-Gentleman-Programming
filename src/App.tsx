import './App.css'
import { ColorRed, Button } from './components/Button/Button.tsx';
function App() {


  const handleClick = () => {
    console.log("uy clickio todo, red");
  }

  const diHola = () => {
    console.log("hola");
  }


  return (
    <>

      <ColorRed >   <Button parentMethod={handleClick} >My buton red   </Button>  </ColorRed>

      <Button parentMethod={diHola} >dice hola </Button>

    </>
  )
}
export default App



















// const [name, setName] = useState("Berth")

// const countMore = () => {
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
//   setCount(count + 1)
//   // El count no cambia porque hasta este punto
//   // El valor sigue siendo 0 gasta que se ejecute la
//   // ultima intancia "pero esto es sin funcion" con funcion flecha
//   // si se acumula

//   setCount((count) => count + 1)
//   setCount((count) => count + 1)
//   // aqui si se acumula por que ejecuta un metodo= trigger
// }

// const changeName = () => {


//   setName("Wilber")
// }

