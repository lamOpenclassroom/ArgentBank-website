import Banner from "./banner";
import Bannertext from "./bannertext";
import Mainhome from "./mainhome";
import { main, bannertext } from "../Data";

function Main() {
    return (
        <main>
            
            {bannertext.map((item) => (
                <section>
                    <Banner image={item.image} />       
                    <div >
                        <Bannertext title={item.title} subtitle1={item.subtitle1} subtitle2={item.subtitle2} subtitle3={item.subtitle3} text={item.text} />
                    </div>
                </section>  
            ))}
            
            <section class="features">
                <h2 class="sr-only">Features</h2>
                    {main.map((item) => (
                        <Mainhome key={item.id} image={item.img} description={item.description} title={item.title} paragr={item.paragr} />    
                    ))}  
            </section>
            
        </main>
    ); 
}

export default Main