import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

export default function Works()
{
    useEffect(() =>
    {
        document.title = 'Projets'
    }, [])

    return <>
        <h1>Works page</h1>
    </>
}