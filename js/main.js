//horizontal scroll

const element = document.querySelector(".media-scroller");

element.addEventListener('wheel', (event) => {
    event.preventDefault();
  
    element.scrollBy({
      left: event.deltaY < 0 ? -50 : 50,
    });
});

  


//WEB

const web = document.querySelector(".web");
const openWeb = document.querySelector(".web2");

openWeb.addEventListener("click", () => {
    web.style.display = "grid";
    gra.style.display = "none";
    ux.style.display = "none";
    con.style.display = "none";

});

function red(){
    document.querySelector(".colorbtn1").style.color = "#802BB1";
    document.querySelector(".colorbtn2").style.color = "#D1D7E0";
    document.querySelector(".colorbtn3").style.color = "#D1D7E0";
    document.querySelector(".colorbtn4").style.color = "#D1D7E0";
}


//russian

const modalrussian = document.querySelector(".russian2");
const openModal = document.querySelector(".russian");
const closeModal = document.querySelector(".close-button");
const nextModal = document.querySelector(".next-button");

openModal.addEventListener("click", () => {
    modalrussian.style.display = "flex";
    modalrussian.showModal();
});

closeModal.addEventListener("click", () => {
    modalrussian.style.display = "none";
    modalrussian.close();
});

nextModal.addEventListener("click", () => {
    modalrussian.style.display = "none";
    modalrussian.close();
    modalmicro.style.display = "flex";
    modalmicro.showModal();
});

//micro

const modalmicro = document.querySelector(".micro2");
const openModal2 = document.querySelector(".micro");
const closeModal2 = document.querySelector(".close-button2");
const nextModal2 = document.querySelector(".next-button2");
const prevModal = document.querySelector(".prev-button");


openModal2.addEventListener("click", () => {
    modalmicro.style.display = "grid";
    modalmicro.showModal();
});



closeModal2.addEventListener("click", () => {
    modalmicro.style.display = "none";
    modalmicro.close();
});

prevModal.addEventListener("click", () => {
    modalmicro.style.display = "none";
    modalmicro.close();
    modalrussian.style.display = "flex";
    modalrussian.showModal();
});

nextModal2.addEventListener("click", () => {
    modalmicro.style.display = "none";
    modalmicro.close();
    modalmusk.style.display = "flex";
    modalmusk.showModal();
});



//venice

// const modalvenice = document.querySelector(".venice2");
// const openModal4 = document.querySelector(".venice");
// const closeModal4 = document.querySelector(".close-button4");
// const nextModal4 = document.querySelector(".next-button4");
// const prevModal4 = document.querySelector(".prev-button4");


// openModal4.addEventListener("click", () => {
//     modalvenice.style.display = "flex";
//     modalvenice.showModal();
// });



// closeModal4.addEventListener("click", () => {
//     modalvenice.style.display = "none";
//     modalvenice.close();
// });

// prevModal4.addEventListener("click", () => {
//     modalmicro.style.display = "flex";
//     modalmicro.showModal();
//     modalvenice.style.display = "none";
//     modalvenice.close();
// });

// nextModal4.addEventListener("click", () => {
//     modalmusk.style.display = "flex";
//     modalmusk.showModal();  
//     modalvenice.style.display = "none";
//     modalvenice.close();
// });


//musk

const modalmusk = document.querySelector(".musk2");
const openModal5 = document.querySelector(".musk");
const closeModal5 = document.querySelector(".close-button5");
const nextModal5 = document.querySelector(".next-button5");
const prevModal5 = document.querySelector(".prev-button5");


openModal5.addEventListener("click", () => {
    modalmusk.style.display = "grid";
    modalmusk.showModal();
});

closeModal5.addEventListener("click", () => {
    modalmusk.style.display = "none";
    modalmusk.close();
});

prevModal5.addEventListener("click", () => {
    modalmusk.style.display = "none";
    modalmusk.close();
    modalmicro.style.display = "flex";
    modalmicro.showModal();
});

nextModal5.addEventListener("click", () => {
    modalmusk.style.display = "none";
    modalmusk.close();  
    modalbeer.style.display = "flex";
    modalbeer.showModal();
});

//beer

const modalbeer = document.querySelector(".beer2");
const openModal6 = document.querySelector(".beer");
const closeModal6 = document.querySelector(".close-button6");
const nextModal6 = document.querySelector(".next-button6");
const prevModal6 = document.querySelector(".prev-button6");


openModal6.addEventListener("click", () => {
    modalbeer.style.display = "flex";
    modalbeer.showModal();
});

closeModal6.addEventListener("click", () => {
    modalbeer.style.display = "none";
    modalbeer.close();
});

prevModal6.addEventListener("click", () => {
    modalmusk.style.display = "flex";
    modalmusk.showModal();
    modalbeer.style.display = "none";
    modalbeer.close();
});

nextModal6.addEventListener("click", () => {
    modalbeer.style.display = "none";
    modalbeer.close();  
    modalport.style.display = "flex";
    modalport.showModal();
});



//portfolio

const modalport = document.querySelector(".port2");
const openModal7 = document.querySelector(".port");
const closeModal7 = document.querySelector(".close-button7");
const nextModal7 = document.querySelector(".next-button7");
const prevModal7 = document.querySelector(".prev-button7");


openModal7.addEventListener("click", () => {
    modalport.style.display = "flex";
    modalport.showModal();
});

closeModal7.addEventListener("click", () => {
    modalport.style.display = "none";
    modalport.close();
});

prevModal7.addEventListener("click", () => {
    modalbeer.style.display = "flex";
    modalbeer.showModal();
    modalport.style.display = "none";
    modalport.close();
});



//GRAPHICS

const element2 = document.querySelector(".media-scroller2");

element2.addEventListener('wheel', (event) => {
    event.preventDefault();
  
    element2.scrollBy({
      left: event.deltaY < 0 ? -50 : 50,
    });
});





const gra = document.querySelector(".gra");
const openGra = document.querySelector(".gra2");

openGra.addEventListener("click", () => {
    gra.style.display = "grid";
    web.style.display = "none";
    ux.style.display = "none";
    con.style.display = "none";

});

function purple(){
    document.querySelector(".colorbtn2").style.color = "#802BB1";
    document.querySelector(".colorbtn1").style.color = "#D1D7E0";
    document.querySelector(".colorbtn3").style.color = "#D1D7E0";
    document.querySelector(".colorbtn4").style.color = "#D1D7E0";

}

//venicelogo

const modalvenice2 = document.querySelector(".venicelogo2");
const openModal3 = document.querySelector(".venicelogo");
const closeModal3 = document.querySelector(".close-button3");
const nextModal3 = document.querySelector(".next-button3");

openModal3.addEventListener("click", () => {
    modalvenice2.style.display = "flex";
    modalvenice2.showModal();
});

closeModal3.addEventListener("click", () => {
    modalvenice2.style.display = "none";
    modalvenice2.close();
});

nextModal3.addEventListener("click", () => {
    modalvenice2.style.display = "none";
    modalvenice2.close();
    modalhex.style.display = "flex";
    modalhex.showModal();
});

//hexlogo

const modalhex = document.querySelector(".hex2");
const openModal8 = document.querySelector(".hex");
const closeModal8 = document.querySelector(".close-button8");
const nextModal8 = document.querySelector(".next-button8");
const prevModal8 = document.querySelector(".prev-button8");

openModal8.addEventListener("click", () => {
    modalhex.style.display = "flex";
    modalhex.showModal();
});

closeModal8.addEventListener("click", () => {
    modalhex.style.display = "none";
    modalhex.close();
});

nextModal8.addEventListener("click", () => {
    modalhex.style.display = "none";
    modalhex.close();
    modalmuskgra.style.display = "flex";
    modalmuskgra.showModal();
});

prevModal8.addEventListener("click", () => {
    modalvenice2.style.display = "flex";
    modalvenice2.showModal();
    modalhex.style.display = "none";
    modalhex.close();
});

//muskgra

const modalmuskgra = document.querySelector(".muskgra2");
const openModal9 = document.querySelector(".muskgra");
const closeModal9 = document.querySelector(".close-button9");
const nextModal9 = document.querySelector(".next-button9");
const prevModal9 = document.querySelector(".prev-button9");

openModal9.addEventListener("click", () => {
    modalmuskgra.style.display = "flex";
    modalmuskgra.showModal();
});

closeModal9.addEventListener("click", () => {
    modalmuskgra.style.display = "none";
    modalmuskgra.close();
});

nextModal9.addEventListener("click", () => {
    modalmuskgra.style.display = "none";
    modalmuskgra.close();
    modalportgra.style.display = "flex";
    modalportgra.showModal();
});

prevModal9.addEventListener("click", () => {
    modalmuskgra.style.display = "none";
    modalmuskgra.close();
    modalhex.style.display = "flex";
    modalhex.showModal();
});

//portgra

const modalportgra = document.querySelector(".portgra2");
const openModal10 = document.querySelector(".portgra");
const closeModal10 = document.querySelector(".close-button10");
const prevModal10 = document.querySelector(".prev-button10");

openModal10.addEventListener("click", () => {
    modalportgra.style.display = "flex";
    modalportgra.showModal();
});

closeModal10.addEventListener("click", () => {
    modalportgra.style.display = "none";
    modalportgra.close();
});


prevModal10.addEventListener("click", () => {
    modalmuskgra.style.display = "flex";
    modalmuskgra.showModal();
    modalportgra.style.display = "none";
    modalportgra.close();
});


//UX


const element3 = document.querySelector(".media-scroller3");

element3.addEventListener('wheel', (event) => {
    event.preventDefault();
  
    element3.scrollBy({
      left: event.deltaY < 0 ? -50 : 50,
    });
});

const ux = document.querySelector(".ux");
const openux = document.querySelector(".ux2");

openux.addEventListener("click", () => {
    ux.style.display = "grid";
    web.style.display = "none";
    gra.style.display = "none";
    con.style.display = "none";

});

function pink(){
    document.querySelector(".colorbtn3").style.color = "#802BB1";
    document.querySelector(".colorbtn1").style.color = "#D1D7E0";
    document.querySelector(".colorbtn2").style.color = "#D1D7E0";
    document.querySelector(".colorbtn4").style.color = "#D1D7E0";

}

//data


const modaldata = document.querySelector(".data2");
const openModal11 = document.querySelector(".data");
const closeModal11 = document.querySelector(".close-button11");
const nextModal11 = document.querySelector(".next-button11");
const prevModal11 = document.querySelector(".prev-button11");

openModal11.addEventListener("click", () => {
    modaldata.style.display = "flex";
    modaldata.showModal();
});

closeModal11.addEventListener("click", () => {
    modaldata.style.display = "none";
    modaldata.close();
});

nextModal11.addEventListener("click", () => {
    modaldata.style.display = "none";
    modaldata.close();
    modalearly.style.display = "flex";
    modalearly.showModal();
});

prevModal11.addEventListener("click", () => {
    modaldata.style.display = "none";
    modaldata.close();
    modalveniceux.style.display = "flex";
    modalveniceux.showModal();
});




//early


const modalearly = document.querySelector(".early2");
const openModal12 = document.querySelector(".early");
const closeModal12 = document.querySelector(".close-button12");
const nextModal12 = document.querySelector(".next-button12");
const prevModal12 = document.querySelector(".prev-button12");

openModal12.addEventListener("click", () => {
    modalearly.style.display = "flex";
    modalearly.showModal();
});

closeModal12.addEventListener("click", () => {
    modalearly.style.display = "none";
    modalearly.close();
});


prevModal12.addEventListener("click", () => {
    modaldata.style.display = "flex";
    modaldata.showModal();
    modalearly.style.display = "none";
    modalearly.close();
});

nextModal12.addEventListener("click", () => {
    modalearly.style.display = "none";
    modalearly.close();
    modalhexux.style.display = "flex";
    modalhexux.showModal();
});


//veniceux

const modalveniceux = document.querySelector(".veniceux2");
const openModal13 = document.querySelector(".veniceux");
const closeModal13 = document.querySelector(".close-button13");
const nextModal13 = document.querySelector(".next-button13");

openModal13.addEventListener("click", () => {
    modalveniceux.style.display = "flex";
    modalveniceux.showModal();
});

closeModal13.addEventListener("click", () => {
    modalveniceux.style.display = "none";
    modalveniceux.close();
});


nextModal13.addEventListener("click", () => {
    modaldata.style.display = "flex";
    modaldata.showModal();
    modalveniceux.style.display = "none";
    modalveniceux.close();
});


//hexux

const modalhexux = document.querySelector(".hexux2");
const openModal14 = document.querySelector(".hexux");
const closeModal14 = document.querySelector(".close-button14");
const nextModal14 = document.querySelector(".next-button14");
const prevModal14 = document.querySelector(".prev-button14");

openModal14.addEventListener("click", () => {
    modalhexux.style.display = "flex";
    modalhexux.showModal();
});

closeModal14.addEventListener("click", () => {
    modalhexux.style.display = "none";
    modalhexux.close();
});


nextModal14.addEventListener("click", () => {
    modalbeerux.style.display = "flex";
    modalbeerux.showModal();
    modalhexux.style.display = "none";
    modalhexux.close();
});

prevModal14.addEventListener("click", () => {
    modalhexux.style.display = "none";
    modalhexux.close();
    modalearly.style.display = "flex";
    modalearly.showModal();
});





//beer

const modalbeerux = document.querySelector(".beerux2");
const openModal15 = document.querySelector(".beerux");
const closeModal15 = document.querySelector(".close-button15");
const nextModal15 = document.querySelector(".next-button15");
const prevModal15 = document.querySelector(".prev-button15");

openModal15.addEventListener("click", () => {
    modalbeerux.style.display = "flex";
    modalbeerux.showModal();
});

closeModal15.addEventListener("click", () => {
    modalbeerux.style.display = "none";
    modalbeerux.close();
});


nextModal15.addEventListener("click", () => {
    modalportux.style.display = "flex";
    modalportux.showModal();
    modalbeerux.style.display = "none";
    modalbeerux.close();
});

prevModal15.addEventListener("click", () => {
    modalbeerux.style.display = "none";
    modalbeerux.close();
    modalhexux.style.display = "flex";
    modalhexux.showModal();
});




//portux



const modalportux = document.querySelector(".portux2");
const openModal16 = document.querySelector(".portux");
const closeModal16 = document.querySelector(".close-button16");
const prevModal16 = document.querySelector(".prev-button16");

openModal16.addEventListener("click", () => {
    modalportux.style.display = "flex";
    modalportux.showModal();
});

closeModal16.addEventListener("click", () => {
    modalportux.style.display = "none";
    modalportux.close();
});



prevModal16.addEventListener("click", () => {
    modalbeerux.style.display = "flex";
    modalbeerux.showModal();
    modalportux.style.display = "none";
    modalportux.close();
});



//CONTENT


const element4 = document.querySelector(".media-scroller4");

element4.addEventListener('wheel', (event) => {
    event.preventDefault();
  
    element4.scrollBy({
      left: event.deltaY < 0 ? -50 : 50,
    });
});

const con = document.querySelector(".con");
const opencon = document.querySelector(".con2");

opencon.addEventListener("click", () => {
    con.style.display = "grid";
    web.style.display = "none";
    gra.style.display = "none";
    ux.style.display = "none";

});

function green(){
    document.querySelector(".colorbtn4").style.color = "#802BB1";
    document.querySelector(".colorbtn1").style.color = "#D1D7E0";
    document.querySelector(".colorbtn2").style.color = "#D1D7E0";
    document.querySelector(".colorbtn3").style.color = "#D1D7E0";
}

//min

const modalmin = document.querySelector(".min2");
const openModal17 = document.querySelector(".min");
const closeModal17 = document.querySelector(".close-button17");
const nextModal17 = document.querySelector(".next-button17");
const prevModal17 = document.querySelector(".prev-button17");

openModal17.addEventListener("click", () => {
    modalmin.style.display = "flex";
    modalmin.showModal();
});

closeModal17.addEventListener("click", () => {
    modalmin.style.display = "none";
    modalmin.close();
});


nextModal17.addEventListener("click", () => {
    modalfestival.style.display = "flex";
    modalfestival.showModal();
    modalmin.style.display = "none";
    modalmin.close();
});


//festival

const modalfestival = document.querySelector(".festival2");
const openModal18 = document.querySelector(".festival");
const closeModal18 = document.querySelector(".close-button18");
const nextModal18 = document.querySelector(".next-button18");
const prevModal18 = document.querySelector(".prev-button18");

openModal18.addEventListener("click", () => {
    modalfestival.style.display = "flex";
    modalfestival.showModal();
});

closeModal18.addEventListener("click", () => {
    modalfestival.style.display = "none";
    modalfestival.close();
});


nextModal18.addEventListener("click", () => {
    modalbeervideo.style.display = "flex";
    modalbeervideo.showModal();
    modalfestival.style.display = "none";
    modalfestival.close();
});

prevModal18.addEventListener("click", () => {
    modalfestival.style.display = "none";
    modalfestival.close();
    modalmin.style.display = "flex";
    modalmin.showModal();
});

//beervideo

const modalbeervideo = document.querySelector(".beervideo2");
const openModal19 = document.querySelector(".beervideo");
const closeModal19 = document.querySelector(".close-button19");
const nextModal19 = document.querySelector(".next-button19");
const prevModal19 = document.querySelector(".prev-button19");

openModal19.addEventListener("click", () => {
    modalbeervideo.style.display = "flex";
    modalbeervideo.showModal();
});

closeModal19.addEventListener("click", () => {
    modalbeervideo.style.display = "none";
    modalbeervideo.close();
});


prevModal19.addEventListener("click", () => {
    modalfestival.style.display = "flex";
    modalfestival.showModal();
    modalbeervideo.style.display = "none";
    modalbeervideo.close();
});