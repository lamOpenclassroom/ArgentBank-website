import "./banner.css"

function Bannertext({ title, subtitle1, subtitle2, subtitle3, text }) {
    return (
        <section class="hero-content">
            <h2 class="sr-only">{title}</h2>
            <p class="subtitle">{subtitle1}</p>
            <p class="subtitle">{subtitle2}</p>
            <p class="subtitle">{subtitle3}</p>
            <p class="text">{text}</p>
        </section>
    )
}
export default Bannertext;