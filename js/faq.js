/* =====================================================
                FAQ ACCORDION JS
===================================================== */


const faqItems = document.querySelectorAll(".faq-item");


faqItems.forEach(item => {


    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = question.querySelector("i");



    question.addEventListener("click", () => {



        // Close other FAQ items
        faqItems.forEach(otherItem => {


            if(otherItem !== item){


                otherItem.classList.remove("active");


                const otherAnswer =
                otherItem.querySelector(".faq-answer");


                const otherIcon =
                otherItem.querySelector(".faq-question i");


                otherAnswer.style.maxHeight = null;


                if(otherIcon){

                    otherIcon.classList.remove("fa-minus");

                    otherIcon.classList.add("fa-plus");

                }

            }


        });




        // Toggle current FAQ

        item.classList.toggle("active");



        if(item.classList.contains("active")){


            answer.style.maxHeight =
            answer.scrollHeight + "10px";



            if(icon){

                icon.classList.remove("fa-plus");

                icon.classList.add("fa-minus");

            }



        }

        else{


            answer.style.maxHeight = null;



            if(icon){

                icon.classList.remove("fa-minus");

                icon.classList.add("fa-plus");

            }


        }



    });


});
