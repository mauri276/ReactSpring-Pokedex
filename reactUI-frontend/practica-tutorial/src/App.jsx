import './App.css'
import ClientService from './services/ClientService'

function App() {

  ClientService.getPokemon("pichu").then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });

  return (
    <>
      <div>hola</div>
    </>
  )
}

export default App
