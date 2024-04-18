import '/src/App.css'
export default function Card({ img, text, firstCard, secondCard, thirdCard,secondCircle,thirdCircle }) {
    return (
        <>
            <div className={`second-container-card ${firstCard} ${secondCard} ${thirdCard}`}>
                <div className={`small-circl last-child ${secondCircle} ${thirdCircle}`}>
                    <div>
                        <img src={img} alt="" />
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}