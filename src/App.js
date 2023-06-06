import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Skills from './components/Skill';
import Works from './components/Works';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Profile />
        <Works />
        <Skills />
      </main>
    </div>
  );
}

export default App;
