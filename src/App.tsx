import { Link, Route, Routes, } from 'react-router-dom'
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { useContext } from 'react';
import { AuthContext } from './contexts/Auth/AuthContext';
import { Private } from './pages/Private';

function App() {
  const auth = useContext(AuthContext)
  return (
    <div className="App">
      <header className="App-header">
          header
      </header>
      <nav style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
        <Link to="/home">Home</Link>
        <Link to="/private">Private</Link>
        {auth.user && <Link to="/private">LogOut</Link> }

      </nav>
      <hr />
      <Routes>
          <Route path='/home' element={<h1>Home</h1>}/>
          <Route path='/private' element={<RequireAuth><Private/></RequireAuth>}/>
      </Routes>
    </div>
  );
}

export default App;
