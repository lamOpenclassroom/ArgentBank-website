function Mainhome({key, image, description, title, paragr}) {
    return (
        <div key={key} class="feature-item">
            <img src={image} alt={description} class="feature-icon" />
            <h3 class="feature-item-title">{title}</h3>
            <p>{paragr}</p> 
        </div>
    )
} 
export default Mainhome