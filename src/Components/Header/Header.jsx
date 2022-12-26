import Text from '../Text/Text'
import './style.scss'

export default function Header()
{
    return <>
        <header className='header'>
            <Text tag='p'>Ferreira Raphaël</Text>
            <Text tag='p'>Front-end / Creative developper</Text>
            <nav className='header__nav'>
                <Text tag='p' size='s'>Projets</Text>
                <Text tag='p' size='s'>À Propos</Text>
                <Text tag='p' size='s'>Contact</Text>
            </nav>
        </header>
    </>
}