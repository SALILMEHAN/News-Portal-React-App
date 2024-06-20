import React from 'react'
import fetchApiResponse from '../Hooks/useGetCalls.js'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { reset_page } from '../Redux/paginationSlice.jsx';
import { null_resp_for_page } from '../Redux/apiobj.jsx';

function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleworld = () => {
        dispatch(null_resp_for_page());
        dispatch(reset_page());
        navigate('/world');
    }

    const handlesports = () => {
        dispatch(null_resp_for_page());
        dispatch(reset_page());
        navigate('/sports');
    }

    const handletech = () => {
        dispatch(null_resp_for_page());
        dispatch(reset_page());
        navigate('/technology');
    }

    const handlebussiness = () => {
        dispatch(null_resp_for_page());
        dispatch(reset_page());
        navigate('/business');
    }

    const handleenter = () => {
        dispatch(null_resp_for_page());
        dispatch(reset_page());
        navigate('/entertainment');
    }

    return (
        <div className='sticky top-0 w-full z-10'>
            <div className="navbar bg-primary text-primary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            <li onClick={handleworld}><a>World</a></li>
                            <li onClick={() => fetchApiResponse('business')}><a>Sports</a></li>
                            <li onClick={handletech}><a>Technology</a></li>
                            <li onClick={handlebussiness}><a>Business</a></li>
                            <li onClick={handleenter}><a>Entertainment</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl" onClick={handleworld}>NEWS PORTAL</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li onClick={handleworld}><a>World</a></li>
                        <li onClick={handlesports}><a>Sports</a></li>
                        <li onClick={handletech}><a>Technology</a></li>
                        <li onClick={handlebussiness}><a>Business</a></li>
                        <li onClick={handleenter}><a>Entertainment</a></li>
                    </ul>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar