export default function WorkStep({step}) {
    return (
        <div className="col-md-4">
            <div className="d-flex align-items-center">
                <img src={step.img} width="40" alt="work steop"/>
                <p className="m-0 p-2"><strong>{step.heading}</strong></p>
            </div>
            <p className="mt-2">{step.description}</p>
        </div>
    )
} 