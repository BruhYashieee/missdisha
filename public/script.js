document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)


    gsap.to(".container img", {
        opacity: 1,
        y: 80,
        duration: 3,
    });

    gsap.to(".section2", {
        y: -100,
        backgroundColor: "#333",
        duration: 2,
        scrollTrigger: {
            trigger: ".section2",
            start: "top 75%",
            end: "top 20%",
            scroller: "body",
            scrub: 5
        }
    });

    gsap.to(".left", {
        opacity: 1,
        x: 100,
        duration: 5,
        scrollTrigger: {
            trigger: ".section2",
            start: "top 75%",
            end: "top 20%",
            scroller: "body",
            scrub: 5
        }
    });
    gsap.to(".right", {
        opacity: 1,
        x: -150,
        duration: 5,
        scrollTrigger: {
            trigger: ".section2",

            start: "top 75%",
            end: "top 20%",
            scroller: "body",
            scrub: 5
        }
    });

    gsap.to("nav", {
        opacity: 1,
        duration: 3,
        scrollTrigger: {
            trigger: ".section2",
            start: "top 75%",
            end: "top 20%",
            scroller: "body",
            scrub: 5
        }
    });

    gsap.to(".section3", {
        backgroundColor: "#333",
        y: -100,
        duration: 3,
        scrollTrigger: {
            trigger: ".section3",
            start: "top 75%",
            end: "top 20%",
            scroller: "body",
            scrub: 5
        }
    });

    gsap.to(".c1", {
        opacity: 1,
        x: 200,
        duration: 3,
        scrollTrigger: {
            trigger: ".cardDetail",
            start: "bottom 60%",
            end: "top 40%",
            scroller: "body",
            scrub: 3
        }
    })
    gsap.to(".c2", {
        opacity: 1,
        y: -200,
        duration: 3,
        scrollTrigger: {
            trigger: ".cardDetail",
            start: "bottom 60%",
            end: "top 40%",
            scroller: "body",
            scrub: 3
        }
    })
    gsap.to(".c3", {
        opacity: 1,
        x: -200,
        duration: 2,
        scrollTrigger: {
            trigger: ".cardDetail",
            start: "bottom 60%",
            end: "top 40%",
            scroller: "body",
            scrub: 3
        }
    })

    gsap.to(".gate1", {
        opacity: 0,
        x: -500,
        duration: 5,
        scrollTrigger: {
            trigger: ".section4",
            start: "top 20%",
            end: "top 20%",
            scroller: "body",
            scrub: 3
        }
    })
    gsap.to(".gate2", {
        display: "none",
        opacity: 0,
        x: 500,
        duration: 5,
        scrollTrigger: {
            trigger: ".section4",
            start: "top 20%",
            end: "top 20%",
            scroller: "body",
            scrub: 3
        }
    })

    gsap.to(".section5", {
        filter: "blur(0px)",
        y: -100,
        duration: 3,
        scrollTrigger: {
            trigger: ".section5",
            start: "top 75%",
            end: "top 20%",
            scroller: "body",
            scrub: 5
        }
    });
});

function moon() {
    window.location.href = "moon/"
}
function cake() {
    window.location.href = "cake/index.html"
}
function carousel() {
    window.location.href = "slider/index.html"
}


function displayPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting && entry.target.id === "section4") {
            setTimeout(displayPopup, 1000)
            observer.unobserve(entry, target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, options);
const targetSection = document.getElementById("section4");

observer.observe(targetSection)

fetch('/users')
    .then(response => response.json())
    .then(users => {
        const userListElement = document.getElementById('user-list');
        userListElement.innerHTML = '<h2>User List</h2>';
        users.forEach(user => {
            userListElement.innerHTML += `
                <div class="commentList">
                    <p class="commentName">Name: ${user.name}</p>
                    <p>Comment: ${user.comment}</p>
                </div>
                <hr>
            `;
        });
    })
    .catch(error => console.error('Error fetching data:', error));
