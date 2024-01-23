import './App.css';
import {Route , Routes} from 'react-router-dom'
import GetShows from './Components/GetShows'
import GetDetails from './Components/GetDetails'
function App() {
  return (
      <Routes>
        <Route path='/' element={<GetShows/>}/>
        <Route path='/shows/:id' element={<GetDetails/>}/>
      </Routes>
  );
}

export default App;
