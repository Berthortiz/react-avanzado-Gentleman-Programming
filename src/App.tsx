// import Button from './components/Button/Button'
import { useFetch } from './hooks/useFetch.ts'

interface Data {
  name: string;
  lastName: string;
  age: number;
  // Agrega otros campos según sea necesario
}


import './App.css'
// import { useEffect, useState } from 'react'
// Esto es un modulo /App.css



function App() {

  const URL = "https://cataas.com/api/cats?limit=10&skip=4&tags=white"


  const { data, loading, error } = useFetch<Data>(URL)



  if (loading) {
    return <>

      <h1>

        cargando...

      </h1>



    </>
  }
  if (error) {
    return (
      <>
        <div>Ups! hubo un error: {error.message}</div>

      </>

    )


  }

  return (
    <>
      <h1> exito 200
      </h1>
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

