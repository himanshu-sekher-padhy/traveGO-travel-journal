import "../App.css"
export default function Entry(props) {
    return (
        <article className="journal-entry">
            <section className="main-img-container">
                <img className="main-img" src={props.img.src} alt={props.img.alt} />
            </section>
            <section className="side-details">
                <div className="side-details-top">
                    <img className="side-details-marker" src="../src/assets/location.png" alt="location logo" />
                    <span className="country">{props.country}</span>
                    <a className="map-link" href={props.googleMapsLink}><u>View on Google maps</u></a>
                </div>
                <h2 className="entry-title ">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </section>
        </article>
    )
}