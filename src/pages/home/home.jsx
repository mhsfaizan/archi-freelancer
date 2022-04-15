import React from 'react';
import HomeBanner from '../../components/home-banner/home-banner';
import ServiceCard from '../../components/service-card/service-card';
import WorkStep from '../../components/work-step/work-setp';
export default class Home extends React.Component
{
    renderWorkStep()
    {
        const steps = [
            {
                img: '/images/select-service.png',
                heading: 'Select service',
                description: 'Select the service you are looking for and fill the details our team will connect with you shortly'

            },
            {
                img: '/images/pay-safely.png',
                heading: 'Pay safely',
                description: 'Only pay for work when it has been completed and you are 100% satisfied with the quality using our milestone payment system'

            },
            {
                img: '/images/help.png',
                heading: 'We are here to help',
                description: 'Our talented team of recruiters can help you find the best freelancer for the job and our technical co-pilots can even manage the project for you.'
            }
        ];
        return steps.map((step, index) => <WorkStep step={step} key={index} />);
    }
    renderServiceCard()
    {
        const cards = [
            {
                img: '/images/working-drawings.png',
                heading: 'WORKING DRAWINGS',
                description: 'Providing complete drawing solution on all softwares'

            },
            {
                img: '/images/3d-visualization.png',
                heading: '3D VISUALIZATION',
                description: 'Complete 3D designs'

            },
            {
                img: '/images/structural-design.png',
                heading: 'STRUCTURAL DRAWING',
                description: 'Complete Structural Solutions'

            },
            {
                img: '/images/mep-consultation.png',
                heading: 'MEP CONSULTATION',
                description: 'Mechanical,Electrical and Plumbing Drawings'

            },
            {
                img: '/images/bim-services.png',
                heading: 'BIM SERVICES',
                description: 'Complete Building Information Modelling'

            },
            {
                img: '/images/landscape-design.png',
                heading: 'LANDSCAPE DESIGN',
                description: 'Complete Landscape Design Services'

            }
        ];
        return cards.map((card, index) => <ServiceCard card={card} key={index} />);
    }

    render()
    {
        return (
            <>
                <HomeBanner />
                <div className='p-4'>
                    <div className='row'>
                        <h2 className='text-primary text-center mb-4'><strong>How Its works</strong></h2>
                        {this.renderWorkStep()}
                    </div>
                </div>
                <div className='p-5 bg-primary'>
                    <div className='row'>
                        <h2 className='text-white pb-4'><strong>Our Services</strong></h2>
                        {this.renderServiceCard()}
                    </div>
                </div>
                <div className='p-5 text-center'>
                    <h3 className='text-primary'><strong>MORE THAN 1000+ 
                     <br />HAPPY CUSTOMERS WORLDWIDE</strong></h3>
                    <p>We have qualified design professionals to handle your project.</p>
                </div>
            </>
        );
    }
}