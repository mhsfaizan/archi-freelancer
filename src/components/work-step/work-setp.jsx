export default function WorkStep({step}) {
    return (
        <div className="col-md-4">
            <div className="d-flex">
                <img src={step.img} />
                <p><strong>{step.heading}</strong></p>
            </div>
            <p>{step.description}</p>
        </div>
    )
} 