import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import '../index.css'

export default function Layout() {
    return (
        <div className='h-screen flex flex-col  w-screen'>
            <NavBar />
            <Outlet />
        </div>

    )
}