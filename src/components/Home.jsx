import '../style/default.style.css';
import Me from '../assets/me.jpg';
import { Link } from 'react-router-dom';
import Projects from './Projects';
function Home() {
    return ( <>
        <div className="home">
            <h2 className='title'>I'm Favio and Front-End Dev</h2>
            <Link to="/projects" className='btn'>See my projects</Link>
        </div>
    </> );
}

export default Home;