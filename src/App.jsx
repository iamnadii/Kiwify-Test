import { Login, SignUp } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div className="App wrapper">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
