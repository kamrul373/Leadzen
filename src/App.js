import './App.css';
import AllUsers from './components/AllUsers';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className='text-3xl font-bold text-center py-6'>Leadzen Users</h1>
      </div>
      <AllUsers></AllUsers>
    </div>
  );
}

export default App;
