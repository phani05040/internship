//==================================================== 
/* =====================================================
                MOBILE MENU
===================================================== */


const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");


if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navbar.classList.toggle("active");

    });

}



/* =====================================================
                FAQ ACCORDION
===================================================== */


const faqButtons = document.querySelectorAll(".faq-question");


faqButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        const answer = button.nextElementSibling;

        const icon = button.querySelector("i");


        answer.classList.toggle("show");


        if(answer.classList.contains("show")){

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.classList.replace(
                "fa-plus",
                "fa-minus"
            );

        }

        else{

            answer.style.maxHeight = null;

            icon.classList.replace(
                "fa-minus",
                "fa-plus"
            );

        }


    });


});





/* =====================================================
                PROJECT FILTER
===================================================== */


const filterButtons = document.querySelectorAll(".filter-btn");

const projects = document.querySelectorAll(".project-card");



filterButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });


        button.classList.add("active");


        let filter = button.dataset.filter;



        projects.forEach(project=>{


            let category = project.dataset.category;



            if(filter === "all" || category === filter){


                project.style.display="block";


            }


            else{


                project.style.display="none";


            }



        });



    });



});





/* =====================================================
                COUNTER ANIMATION
===================================================== */


const counters = document.querySelectorAll(".stat-card h2");


let started = false;



function startCounter(){


    const section =
    document.querySelector(".stats")
    if(!section) return;
    const sectionTop =
    section.getBoundingClientRect().top;
    if(sectionTop < window.innerHeight - 100 && !started){
        counters.forEach(counter=>{
            let target =
            parseInt(counter.innerText);
            let count = 0;
            let speed =
            target / 80;
            function update(){
                if(count < target){
                    count += speed;
                    counter.innerText =
                    Math.ceil(count) + "+";
                    setTimeout(update,20);
                }


                else{


                    counter.innerText =
                    target + "+";


                }


            }



            update();



        });



        started=true;


    }



}



window.addEventListener(
    "scroll",
    startCounter
);







/* =====================================================
                SCROLL REVEAL ANIMATION
===================================================== */


const revealElements =
document.querySelectorAll(
".feature-card, .program-card, .mentor-card, .project-card, .case-study-card, .testimonial-card"
);



function reveal(){


    revealElements.forEach(element=>{


        let position =
        element.getBoundingClientRect().top;



        if(position < window.innerHeight - 80){


            element.classList.add("show");


        }



    });



}



window.addEventListener(
    "scroll",
    reveal
);


reveal();







/* =====================================================
                STICKY HEADER SHADOW
===================================================== */


const header =
document.querySelector(".header");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 50){


        header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.12)";


    }


    else{


        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,.05)";


    }



});








/* =====================================================
                CONTACT FORM
===================================================== */


const contactForm =
document.querySelector(".contact-form form");



if(contactForm){


    contactForm.addEventListener(
    "submit",
    function(e){


        e.preventDefault();



        alert(
        "Thank you! Your message has been submitted. Our team will contact you soon."
        );



        contactForm.reset();



    });



}








/* =====================================================
                SMOOTH NAVIGATION
===================================================== */


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


    link.addEventListener(
    "click",
    function(e){


        let target =
        document.querySelector(
            this.getAttribute("href")
        );



        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });



});

//