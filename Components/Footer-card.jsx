export default function FooterCard({ img, text, email }) {
    return (
        <>
            <div className="footer-section-card">
                <img src={img} alt="" />
                <p>{text}</p>
                <span>{email}</span>
            </div>
        </>
    )
}