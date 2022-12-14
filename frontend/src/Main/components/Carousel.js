import slide_1 from "../../../assets/images/carousel/slide-1.jpg"
import slide_2 from "../../../assets/images/carousel/slide-2.jpg"
import slide_3 from "../../../assets/images/carousel/slide-3.jpeg"
import slide_4 from "../../../assets/images/carousel/slide-4.jpeg"
import arrow_left from "../../../assets/images/carousel/arrow-left.png"
const Carousel = {
    render:()=>{
        
      
        return `
                <div class="carousel">
                    <div class="carousel__slide" >
                        <img src="${slide_1}" alt="" />
                    </div>
                    <div class="carousel__slide">
                        <img src="${slide_2}" alt="" />
                    </div>
                    <div class="carousel__slide">
                        <img src="${slide_3}" alt="" />
                    </div>
                    <div class="carousel__slide">
                        <img src="${slide_4}" alt="" />
                    </div>
                    <section class="carousel__buttons">
                    <button  class="btn-back">
                        <i class="arrow-right"></i>
                    </button>
                    <button  class="btn-next">
                        <i class="arrow-left"></i>
                    </button>
                        
                    </section>
                  
                </div>
            `;
    },
    after_render:()=> {
        const slides = document.querySelectorAll(".carousel__slide");
        console.log(slides);
        let counter = 0;

        slides.forEach((element,index) => {
            element.style.transform = `translateX(${index*100}%)`;
        });

        const slide = document.querySelector(".carousel__slide");
        const btn_next = document.querySelector(".btn-next");

        const slides_amount = slides.length-1;

        btn_next.addEventListener("click",function(){
            if(counter >= slides_amount) {
                counter = 0;
            } else {
                counter++;
            }
          slides.forEach((element,index) => {
            element.style.transform =`translateX(${100 * (index - counter)}%)`; 
        });
        });

        const btn_back = document.querySelector(".btn-back");
        btn_back.addEventListener("click",function(){
            if(counter == 0) {
                counter = slides_amount;
            } else {
                counter=counter-1;
            }
          slides.forEach((element,index) => {
            element.style.transform =`translateX(${100 * (index - counter)}%)`;
        });
        });
    }
}
export default Carousel;