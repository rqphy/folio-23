import Text from '../text/text'
import './header.scss'
import { Link } from 'react-router-dom'

export default function Header()
{
    return <>
        <header className='header'>
            <Link to="/" >
                <Text tag='p'>Raphaël Ferreira</Text>
            </Link>
            <Text tag='p'>Front-end / Creative developper</Text>
            <nav className='header__nav'>
                <Link to="/works" >
                    <Text tag='p' size='s'>Projets</Text>
                </Link>
            </nav>
        </header>
    </>
}