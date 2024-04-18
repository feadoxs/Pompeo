export default function Part({ img, title, text, reverse, left, right }) {
    return (
        <>
            <div className={`third-container-main-wrap ${reverse}`}>
                <div className={`third-container-left-wrap ${left}`}>
                    <img src={img} alt="" />
                </div>
                <div className={`third-container-right-wrap ${right}`}>
                    <div>
                        <h3>{title}</h3>
                        <p>{text}</p>
                        <button>View Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}