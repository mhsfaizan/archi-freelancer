export default function ServiceCard({card}){
    return (
        <div className="text-white col-md-4">
            <img src={card.img} />
            <p className="m-0"><strong>{card.heading}</strong></p>
            <p>{card.description}</p>
        </div>
    )
}