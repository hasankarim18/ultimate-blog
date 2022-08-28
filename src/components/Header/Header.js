import React from 'react'
import lws from '../../assets/lws.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
            >
                <Link to="/">
                    <img
                        className="h-10"
                        src={lws}
                        alt="Learn with Sumit"
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Header