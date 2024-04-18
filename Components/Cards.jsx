export default function Cards({ img, name, price }) {
    return (
        <>
            <div className="fourth-container-card">
                <img src={img} alt="" />
                <span>{name}</span>
                <p>{price}</p>
            </div>
        </>
    )
}