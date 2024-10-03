import React from 'react'
import nothing from '../../assets/img/24.png'
// import Navigation from '../../components/Navigation/Navigation'

export default function Notfound() {
    return (
        <div>
            {/* <Navigation/> */}
            <br />
            <br />
            <br />
            <div className="container flex flex-col items-center">
                <h1 className="font-bold text-green-500 text-4xl">Oops! Llegaste a un lugar desconocido</h1>
                <img src={nothing} alt="nothing" className="w-7/12"></img>
            </div>
        </div>
    )
}
