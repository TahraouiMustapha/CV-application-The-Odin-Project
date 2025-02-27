export default function CvSection(props) {
    return (
        <>
            <section className="cv-section">
                <div className="name">{props.personalDetails.fullName}</div>
                <div className="email">{props.personalDetails.email}</div>
            </section>
        </>
    )
}