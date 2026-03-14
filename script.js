const menuBtn = document.getElementById("menuBtn")
const navLinks = document.getElementById("navLinks")

menuBtn.onclick = () => {
    navLinks.classList.toggle("active")
}


// smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault()

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })

    })

})