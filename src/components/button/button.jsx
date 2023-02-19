import { Link } from 'react-router-dom'
import './button.scss'

function LinkButton({ children, to })
{
    return <Link to={to} className="cta">
        { children }
    </Link>
}

function ExternalButton({ children, to })
{
    return <a href={ to } target="_blank" className="cta">
        { children }
    </a>
}

export default function Button({ children, to, isExternal = null })
{
    console.log(to)
    return (
        isExternal ?
            <ExternalButton to={to} >{ children }</ExternalButton>
            : <LinkButton to={to} >{ children }</LinkButton>
    )
}