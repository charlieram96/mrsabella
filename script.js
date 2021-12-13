// gsap.to(".notebook", {
//     opacity: 0, 
//     y: -100,
//     delay: 1,
//     duration: 1,
// });



function toggleReminders() {
    document.querySelector(".bg-cover").style = "display: block; pointer-events: unset";

    document.querySelector('.bulletin-board-pop-up').classList.toggle('active');
    document.querySelector('.announcements-div').style.display = "none";
    document.querySelector('.schedule-div').style.display = "none";

    document.querySelector('.reminders-div').style.display = "flex";
}

function toggleAnnouncements() {
    document.querySelector(".bg-cover").style = "display: block; pointer-events: unset";

    document.querySelector('.bulletin-board-pop-up').classList.toggle('active');
    document.querySelector('.schedule-div').style.display = "none";
    document.querySelector('.reminders-div').style.display = "none";

    document.querySelector('.announcements-div').style.display = "flex";
}
function toggleSchedule() {
    document.querySelector(".bg-cover").style = "display: block; pointer-events: unset";

    document.querySelector('.bulletin-board-pop-up').classList.toggle('active');
    document.querySelector('.reminders-div').style.display = "none";
    document.querySelector('.announcements-div').style.display = "none";
    
    document.querySelector('.schedule-div').style.display = "flex";
}

function closeBulletin() {
    document.querySelector('.bulletin-board-pop-up').classList.toggle('active');
    document.querySelector('.schedule-div').style.display = "none";
    document.querySelector('.announcements-div').style.display = "none";
    document.querySelector('.reminders-div').style.display = "none";

    document.querySelector(".bg-cover").style = "display: none; pointer-events: none";

}

// var images = document.getElementsByClassName("image");
//     var i;

//     for (i = 0; i < images.length; i++) {
//         images[i].addEventListener("click", function() {
//             this.classList.toggle("active");
//         });
//     }


// gsap.from(".main-page", {
//     opacity:0,
//     duration: 1, 
//     delay:2,
// });