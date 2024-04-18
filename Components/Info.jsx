import '/src/App.css'

export default function Info({ title, text, longTitle }) {
    return (
        <>
            <div className="second-card-text">
                <h2 id={`${longTitle}`}>{title}</h2>
                <p>{text}</p>
            </div>
        </>
    )
}