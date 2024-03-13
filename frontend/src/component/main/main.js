import Banner from "../banner/banner";
import Bannertext from "../banner/bannertext";
import Mainhome from "./main-home/mainhome";
import { main, bannertext } from "../../Data";
import "./main-signin/mainsignin.css"

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