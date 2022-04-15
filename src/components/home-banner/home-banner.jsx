import React from 'react';
import './home-banner.css';
export default class HomeBanner extends React.Component{
    render(){
        return (
            <div className='banner bg-primary'>
                <div className='banner-image d-flex'>
                    <div className='banner-text'>
                        <h2 className='text-white m-0'>World's Best <br />Architecture & design <br />Freelance platform</h2>
                        <h6>Full fill your outsourcing needs in seconds</h6>
                    </div>
                </div>
            </div>
        );
    }
}