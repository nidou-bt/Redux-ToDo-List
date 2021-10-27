import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {
  return (
    <div >
     <h1 style={{color:'gray', textAlign:'center'}}>welcome to TODO List</h1> 
      <AddTask/>
      <ListTask/>
    </div>
  );
}

export default App;
