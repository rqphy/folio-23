import { createElement } from 'react'
import './style.scss'

export default function Text({ children, tag, size, color })
{
    const element = createElement(
        tag,
        { className: `text size-${size} ${color}` },
        children
    )
    return element
}