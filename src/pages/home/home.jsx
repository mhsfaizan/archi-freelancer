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
                img: '',
                heading: 'Select service',
                description: 'select the service you looking for and fill the detail and our team contact shortly'

            },
            {
                img: '',
                heading: 'Pay safely',
                description: 'Only pay when the task has been compelted.Only pay when the task has been compelted'

            },
            {
                img: '',
                heading: 'We are here to help',
                description: 'Our talented team of members can help you to find the best freelancer'

            }
        ];
        return steps.map((step, index) => <WorkStep step={step} key={index} />);
    }
    renderServiceCard()
    {
        const cards = [
            {
                img: '',
                heading: 'Working drawings',
                description: 'select the service you looking for and fill the detail and our team contact shortly'

            },
            {
                img: '',
                heading: '3D Visualization',
                description: 'Only pay when the task has been compelted.Only pay when the task has been compelted'

            },
            {
                img: '',
                heading: 'Structural drawing',
                description: 'Our talented team of members can help you to find the best freelancer'

            },
            {
                img: '',
                heading: 'MEP consultation',
                description: 'Our talented team of members can help you to find the best freelancer'

            },
            {
                img: '',
                heading: 'BM Services',
                description: 'Our talented team of members can help you to find the best freelancer'

            },
            {
                img: '',
                heading: 'Landscape design',
                description: 'Our talented team of members can help you to find the best freelancer'

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
                <div className='p-4 bg-primary'>
                    <div className='row'>
                        <h2 className='text-white'><strong>Our Services</strong></h2>
                        {this.renderServiceCard()}
                    </div>
                </div>
                <div className='p-5 text-center'>
                    <h3 className='text-primary'><strong>More than 1000+ <br />Happy customer worldwide</strong></h3>
                    <p>We have qualified design professionals to handle your project</p>
                </div>
            </>
        );
    }
}