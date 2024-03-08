import "../style/banner.css"

function Banner({ image, description }) {
    return (
        <img class="hero" src={image} alt={description} />  
    )
}
export default Banner