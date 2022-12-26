import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

export default function Home()
{
    useEffect(() =>
    {
        document.title = 'Raphaël Ferreira'
    }, [])

    return <>
        <h1>Home page</h1>
    </>
}