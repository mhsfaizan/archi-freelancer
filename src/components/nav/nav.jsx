import React from 'react';

export default class Nav extends React.Component{
    render(){
        return (
            <nav className='bg-primary nav'>
                <div className='container-fluid d-flex'>
                    <h1 className='heading'><a className='text-white text-decoration-none' href="/">Archi Freelancer</a></h1>
                    <ul className='inline-list'>
                        <li><a className='text-white text-decoration-none' href="/how-it-work">How it works</a></li>
                        <li><a className='text-white text-decoration-none' href="/services">Services</a></li>
                        <li><a className='text-white text-decoration-none' href="/contact">Contacts</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}