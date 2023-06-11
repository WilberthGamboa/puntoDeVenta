import Versions from './components/Versions'
import icons from './assets/icons.svg'


function App() {
  const pruebaEvento = async  () =>{
    const data = {
      categoryName:'Cerveza'
    }
    console.log(data)
    const hola = await window.categoryEvent.postCategory(data);
  console.log(hola)
  }
  return (
    <>
    <button onClick={pruebaEvento}>test</button>
    
    </>
  )
}

export default App
