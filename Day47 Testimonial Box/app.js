const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonialsData = [
    {
        name: "John Doe",
        position: "Developer",
        photo: "https://randomuser.me/api/portraits/men/42.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias hic laboriosam dicta quia? Officiis quisquam molestias consequatur eaque! Qui deserunt aspernatur laborum molestias odio.",
    },
    {
        name: "Smith Doe",
        position: "Data Entery",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "Lorem ipsumLorem ipsum dolor sit amet consectetur adipisicing elit. Placeat moles dolor sit amet consectetur adipisicing elit. Placeat molestias hic laboriosam dicta quia? Officiis quisquam molestias consequatur eaque! Qui deserunt aspernatur laborum molestias odio.",
    },
    {
        name: "Mary",
        position: "Designer",
        photo: "https://randomuser.me/api/portraits/women/42.jpg",
        text: "molestias hic laboriosam dicta quia? Officiis quisquam molestias consequatur eaque! Qui deserun tias hic laboriosam dicta quia? Officiis quisquam molestias consequatur eaque! Qui deserunt aspernatur laborum molestias odio.",
    },
    {
        name: "Jane",
        position: "Testing",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias hic laboriosam dicta quia? Officiis quisquam molestias consequatur eaque! Qui deserunt aspernatur laborum molestias odio.",
    },
];

let idx = 0;
function updateTestimonial() {
    const { name, position, photo, text } = testimonialsData[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if (idx > testimonialsData.length - 1) {
        idx = 0;
    }
}
setInterval(updateTestimonial, 10000);
