console.log("javaScript is working!")

fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Home', 'Information', 'Dogs','What can you do?'],
  showActiveTooltip: true,
  controlArrows: false,
  slidesNavigation: true,
  slidesNavPosition: 'bottom',
  
//start  added 141202
    onLeave: function(origin, destination, direction){
      //console.log("on Leave")
      //console.log(destination.index)
     // console.log(destination.item)
       if( destination.index == 1 ){
         //   secondSection(destination)
         //console.log("section-second-screen")
        }
         else if (destination.index == 2 ){
           //  console.log("section-third-screen")
           // thirdSection()
        }  
   },
   afterRender: () => {
     homeSection()
 
   }
  
 });
//end added 141202

lightGallery(document.querySelector('.gallery'));

//home screen animations
function homeSection(){

}
  //gsap timeline
const tl = new TimelineMax({delay: 0.5})

 // animate elements in 
 //tl.from('.bg', {bottom: "50%", top: "50%", duration: 0.7})
 tl.from('#logo', { x: -1000, scale: 0.1, opacity: 0, ease: 'linear', duration: 1.5 })
 tl.from('.section-home .content', {y: 30, opacity: 0, duration: 1}, "-=1")
 tl.from('#home-dog', {y: -1000, duration: 1}, "-=1")
 tl.from('#fp-nav', {opacity: 0, duration: 1})
 //tl.from('#logo', {y:150, opacity: 0, duration: 0.3})
 tl.from('#switch', {opacity: 0, y:-150, duration: 0.2}, '-=0.5')
 tl.to('#logotooltip', {open:true, duration: 1})


function MSCLogo(){
let DSCLogo = document.querySelector('.logo')
let MSCLogo = document.querySelector('.logo2')
//detect switch change
let councilToggle = document.querySelector('#switch')
councilToggle.addEventListener('sl-change', () => {
  
  if( councilToggle.checked === true ){
    alert("Switch changed")
    MSCLogo()
    
}else{
    DSCLogo()
 }

})


  //gsap timeLine
  const tl = new TimeLineMax()
  tl.to('.DSCLogo', {opacity: 0, duration: 0.5})
  tl.to('MSCLogo', {opacity: 1, duration: 0.5},'-=0.5')
  tl.to('.DSCLogo', {opacity: 0, scale: 0.5, duraction: 0.5})
  tl.fromTo('MSCLogo',{opacity: 0, scale: 0.5, duraction: 0.5}, {opacity: 1, scale: 1, duraction: 0.5} )

  console.log("MSC Logo")

}
function DSClogo(){
  console.log("DSC Logo")
}
// Indi Info dialog

//when I put these here it throws out formatting
//const dialog = document.querySelector('#Indi-dialog')
//const openIndiInfoBtn = document.querySelector('.open-indi-info-btn')

function Dialog(){

openIndiInfoBtn = document.querySelector('.open-indi-info-btn')

openIndiInfoBtn.addEventListener('click',  () => dialog.show())

}

//svg graphic animation//
  
const ballPath = "M60 23C60 35.7025 46.5685 46 30 46C13.4315 46 0 35.7025 0 23C0 10.2975 13.4315 0 30 0C46.5685 0 60 10.2975 60 23Z";
const ballPath1 = "M60 26C60 40.3594 46.5685 52 30 52C13.4315 52 0 40.3594 0 26C0 11.6406 13.4315 0 30 0C46.5685 0 60 11.6406 60 26Z";

const moveBall = document.querySelector("#ball");

let toggle = false;

moveBall.addEventListener('mouseover', () => {
    const timeline = anime.timeline({
        duration : 750, 
        easing : "easeOutExpo"
    });

    //add animation to the time line
    timeline.add({
        targets: ".ball",
        d: [
            {value: toggle ? ballPath1 : ballPath},
        ]
    })
    .add(
        {
            
targets: "#ball",
rotate: 320

    }, "-= 350"
    
)
     //click back
     if(!toggle){
toggle = true;
     }else{
        toggle = false;
     }

});
//Volunteer Dialog
const openVolunteerInfoBtn = document.querySelector('.open-more-info-button')
const dialog = document.querySelector('#VolunteerDialog')


function VolunteerDialog(){
  openVolunteerInfoBtn = document.querySelector('.open-more-info-button')


}
  
//slide navigation

// next slide button
let nextSlideBtn = document.querySelectorAll('.next-slide-btn')
nextSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideRight();
    })
})
    // previous  slide button
let prevSlideBtn = document.querySelectorAll('.prev-slide-btn')
prevSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideLeft();
    })
})

//jump to buttons
let jumptoS2Btn = document.querySelectorAll('.jumpto-s2')
jumptoS2Btn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveTo(2);
    })
})

let jumptoS3Btn = document.querySelectorAll('.jumpto-s3')
jumptoS3Btn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveTo(3);
    })
})
let jumptoS4Btn = document.querySelectorAll('.jumpto-s4')
jumptoS4Btn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveTo(4);
    })
})


// dialog buttons 
//const dialog = document.querySelector('.dialog-overview');
//const openButton = document.querySelector('.open-more-info-button');
//const closeButton = document.querySelector('sl-button[slot="footer"]');

//openButton.addEventListener('click', () => openIndiInfoBtn.show());
//closeButton.addEventListener('click', () => Indi-dialog.hide());
//