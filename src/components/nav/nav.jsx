import React from 'react';

export default class Nav extends React.Component{
    render(){
        return (
            <nav className='bg-primary nav'>
                <div className='container-fluid d-flex'>
                    <h1 className='heading'><a className='text-white text-decoration-none' href="/"><img src='/images/logo.png' alt="logo" /> </a></h1>
                    <div className='nav-right'>
                        <ul className='inline-list'>
                            <li><a className='text-white text-decoration-none' href="#how-it-works">HOW IT WORKS</a></li>
                            <li><a className='text-white text-decoration-none' href="#services">SERVICES</a></li>
                            <li><a className='text-white text-decoration-none' href="#contact">CONTACT </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}