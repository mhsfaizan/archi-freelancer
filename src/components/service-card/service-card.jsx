export default function ServiceCard({card}){
    return (
        <div className="text-white col-md-4 mb-4">
            <img src={card.img} className="img-thumbnail" alt="Service card"/>
            <p className="m-0"><strong>{card.heading}</strong></p>
            <p>{card.description}</p>
        </div>
    )
}