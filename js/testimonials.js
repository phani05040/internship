/* =====================================================
            TESTIMONIALS SLIDER / CAROUSEL
===================================================== */


const testimonialCards =
document.querySelectorAll(".testimonial-card");


let testimonialIndex = 0;



function showTestimonial(index){


    testimonialCards.forEach(card=>{

        card.classList.remove("active");

    });



    if(testimonialCards[index]){

        testimonialCards[index]
        .classList.add("active");

    }


}




/* Auto change testimonial */

if(testimonialCards.length > 0){


    showTestimonial(testimonialIndex);



    setInterval(()=>{


        testimonialIndex++;



        if(testimonialIndex >= testimonialCards.length){

            testimonialIndex = 0;

        }



        showTestimonial(testimonialIndex);



    },5000);


}







/* =====================================================
            TESTIMONIAL BUTTON CONTROLS
===================================================== */


const nextTestimonial =
document.querySelector(".testimonial-next");


const prevTestimonial =
document.querySelector(".testimonial-prev");



if(nextTestimonial){


    nextTestimonial.addEventListener(
    "click",
    ()=>{


        testimonialIndex++;


        if(testimonialIndex >= testimonialCards.length){

            testimonialIndex = 0;

        }


        showTestimonial(testimonialIndex);


    });


}





if(prevTestimonial){


    prevTestimonial.addEventListener(
    "click",
    ()=>{


        testimonialIndex--;


        if(testimonialIndex < 0){

            testimonialIndex =
            testimonialCards.length - 1;

        }


        showTestimonial(testimonialIndex);


    });


}








/* =====================================================
            VIDEO TESTIMONIAL POPUP
===================================================== */


const videoButtons =
document.querySelectorAll(".testimonial-video");



videoButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const videoURL =
        button.dataset.video;



        if(videoURL){


            window.open(
                videoURL,
                "_blank"
            );


        }


    });


});
