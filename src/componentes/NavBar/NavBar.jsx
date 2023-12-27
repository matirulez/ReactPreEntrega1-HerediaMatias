import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>KetoClub</h1>

        <nav>
            <ul>
                <li>Comidas 1</li>
                <li>Comidas 2</li>
                <li>Comidas 3</li>
            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar