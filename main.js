console.log("javaScript is working!")

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
  navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Screen2', 'Third Screen','Fourth screen'],
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


  //gsap timeline
  const tl = new TimelineMax({delay: 0.5})

 // animate elements in 
 //tl.from('.bg', {bottom: "50%", top: "50%", duration: 0.7})
 tl.from('#logo', { x: -1000, scale: 0.1, opacity: 0, ease: 'elastic', duration: 1.5 })
 tl.from('.section-home .content', {y: 30, opacity: 0, duration: 1}, "-=1")
 tl.from('#home-dog', {y: -1000, duration: 1}, "-=1")
 tl.from('#camera-shadow', {scale: 0, opacity: 0, duration: 0.8}, "-=1.1")
 tl.from('#fp-nav', {opacity: 0, duration: 1})
}
//start added 140222
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

//end added 140222
    //Top navigation responsive design
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

}
let homeBtn = document.querySelector('#home')
homeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveTo();
    })
})



