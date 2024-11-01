window.onload = function() {
    let testimonials_1 = [
        { image: "../Image/bhutan.jpg", title: "BHUTAN", name: "Bhutan", text: "Bhutan prioritizes Gross National Happiness over economic growth, emphasizing the well-being of its people and the environment. The country has a strict tourism policy that focuses on high-value, low-impact tourism, ensuring that visitors contribute positively to the preservation of its natural and cultural heritage." },
        { image: "../Image/kenya.jpg", title: "KENYA", name: "Kenya", text: "Kenya's commitment to sustainable tourism is evident in its efforts to protect wildlife and natural habitats. The country's numerous national parks and reserves offer eco-friendly safari experiences, where visitors can witness the Great Migration, support conservation projects, and engage with local communities." },
        { image: "../Image/Slovenia.jpeg", title: "SLOVENIA", name: "Slovenia", text: "Slovenia is recognized for its green tourism practices, with over half of its land covered in forests and numerous protected areas. The capital city, Ljubljana, has been awarded the title of European Green Capital for its sustainable urban planning, green spaces, and eco-friendly transportation options.." },
        { image: "../Image/iceland.jpeg", title: "ICELAND", name: " Iceland", text: "Iceland's unique landscapes, including glaciers, geysers, and waterfalls, are preserved through stringent environmental regulations and sustainable practices. The country promotes eco-friendly travel options such as geothermal energy for heating and encourages responsible tourism to minimize the impact on its fragile ecosystems." }
    ];

    let testimonials_2 = [
        { image: "../Image/jaguarcont.jpeg", title: "YALA", name: "Yala National Park", text: "Yala National Park is famous for its diverse wildlife, including leopards, elephants, and various bird species. The park promotes sustainable tourism by offering eco-friendly safari tours that prioritize wildlife conservation and environmental education. Sustainable lodges and eco-camps around the park provide accommodation options that adhere to green practices." },
        { image: "../Image/beachcont2.jpg", title: "ARUGAMBAY", name: "Arugam Bay", text: "Arugam Bay is a popular destination for eco-friendly surfing and beach activities. The local community is actively involved in promoting sustainable tourism by organizing beach clean-ups, coral reef conservation projects, and eco-friendly accommodations. Visitors can enjoy water sports while supporting initiatives that protect the coastal ecosystem." },
        { image: "../Image/babytutcont.jpg", title: "RAKAWA", name: "Rekawa Turtle Conservation Project", text: "Rekawa Beach is a vital nesting site for sea turtles in Sri Lanka. The Rekawa Turtle Conservation Project focuses on protecting turtle nests and hatchlings through community-based conservation efforts. Visitors can participate in night-time turtle watch tours, guided by local experts who educate them about the importance of marine conservation." },
        { image: "../Image/ellacont2.jpeg", title: "ELLA", name: "Ella", text: "Ella is a picturesque town surrounded by lush hills and tea plantations. The area promotes sustainable tourism through eco-friendly accommodations, organic farming practices, and nature-based activities like hiking and bird watching. The iconic Nine Arches Bridge and Ella Rock are popular eco-tourism attractions that highlight the region's natural beauty."}
    ];

    let container_1 = document.querySelector('.container_1');
    let container_2 = document.querySelector('.container_2');

    testimonials_1.forEach(function(testimonial) {
        const box = createTestimonialBox(testimonial);
        container_1.appendChild(box);
    });

    testimonials_2.forEach(function(testimonial) {
        const box = createTestimonialBox(testimonial);
        container_2.appendChild(box);
    });

    function createTestimonialBox(testimonial) {
        const box = document.createElement('div');
        box.classList.add('box');

        const image = document.createElement('img');
        image.src = testimonial.image;
        image.alt = testimonial.gal;

        const span = document.createElement('span');
        span.textContent = testimonial.title;

        const hvrDiv = document.createElement('div');
        hvrDiv.classList.add('hvr');

        const h3 = document.createElement('h3');
        h3.textContent = testimonial.name;

        const p = document.createElement('p');
        p.textContent = testimonial.text;

        hvrDiv.appendChild(h3);
        hvrDiv.appendChild(p);

        box.appendChild(image);
        box.appendChild(span);
        box.appendChild(hvrDiv);

        return box;
    }
};