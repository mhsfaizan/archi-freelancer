import React from 'react';
export default class Footer extends React.Component{
    render(){
        return (
            <div className='p-5 text-white footer'>
                <div className='row'>
                    <div className="col-md-4">
                        <h3>About</h3>
                        <ul>
                            <li>Our Team</li>
                            <li>Brand guidelines</li>
                            <li>Terms & condition</li>
                            <li>Privacy policy</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Services</h3>
                    </div>
                    <div className="col-md-4" id='contact'>
                        <h3>Connect with us</h3>
                        <p className='m-0'>+917017968648</p>
                        <p className='m-0'>archifreelancer@gmail.com</p>
                    </div>
                    <div className="col-md-12">
                        <div className='d-flex social-links'>
                            <div className='ml-auto'>
                                <ul className='inline-list'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="whatsapp-chat">
                    <a href="https://wa.me/+917017968648" rel="noreferrer" target="_blank">
                        <img src="images/whatsapp.png" width="120px" alt="whatsapp" />
                    </a>
                </div>
            </div>
        );
    }
}