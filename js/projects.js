/* =====================================================
                PROJECT FILTER SYSTEM
===================================================== */


const projectButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");



projectButtons.forEach(button => {


    button.addEventListener("click", () => {



        // Remove active class

        projectButtons.forEach(btn => {

            btn.classList.remove("active");

        });



        // Add active class

        button.classList.add("active");



        const category =
        button.getAttribute("data-filter");



        projectCards.forEach(card => {



            const projectCategory =
            card.getAttribute("data-category");



            if(
                category === "all" ||
                projectCategory === category
            ){


                card.style.display = "block";


                setTimeout(()=>{

                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";

                },50);



            }

            else{


                card.style.opacity = "0";

                card.style.transform = "scale(.8)";


                setTimeout(()=>{

                    card.style.display = "none";

                },300);



            }



        });



    });



});







/* =====================================================
                PROJECT SEARCH
===================================================== */


const projectSearch =
document.querySelector("#projectSearch");



if(projectSearch){


    projectSearch.addEventListener(
    "keyup",
    ()=>{


        const value =
        projectSearch.value.toLowerCase();



        projectCards.forEach(card=>{


            const title =
            card.querySelector("h3")
            .innerText
            .toLowerCase();



            if(title.includes(value)){


                card.style.display="block";


            }

            else{


                card.style.display="none";


            }



        });



    });


}







/* =====================================================
                PROJECT CARD HOVER EFFECT
===================================================== */


projectCards.forEach(card=>{


    card.addEventListener(
    "mouseenter",
    ()=>{


        card.style.transition=".3s";

        card.style.transform=
        "translateY(-10px)";


    });



    card.addEventListener(
    "mouseleave",
    ()=>{


        card.style.transform=
        "translateY(0)";


    });



});







/* =====================================================
                LOAD MORE PROJECTS
===================================================== */


const loadMoreBtn =
document.querySelector("#loadMoreProjects");



if(loadMoreBtn){


    loadMoreBtn.addEventListener(
    "click",
    ()=>{


        const hiddenProjects =
        document.querySelectorAll(
        ".project-card.hidden"
        );



        hiddenProjects.forEach(project=>{


            project.classList.remove("hidden");

            project.style.display="block";


        });



        loadMoreBtn.style.display="none";


    });


}
