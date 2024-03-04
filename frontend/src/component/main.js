import "../style/banner.css"
import Banner from "./banner"
import { main } from "../Data"

function Main() {
    return (
        <main>
            
            <Banner/>
               
            <section class="features">
                <h2 class="sr-only">Features</h2>
                    {main.map((item) => (
                        <div key={item.id} class="feature-item">
                            <img src={item.img} alt={item.description} class="feature-icon" />
                            <h3 class="feature-item-title">{item.title}</h3>
                            <p>{item.paragr}</p>
                        </div>
                    ))}  
            </section>
        </main>
    ); 
}

export default Main