window.onload = function() {
    let testimonials_1 = [
        { image: "../Image/costa rica.jpeg", title: "COSTA RICA", name: "Costa Rica", text: "Known for its extensive national parks, biodiversity, and commitment to renewable energy, Costa Rica emphasizes eco-friendly tourism and conservation efforts." },
        { image: "../Image/newzealand.jpeg", title: "NEW ZEALAND", name: "New Zealand", text: "Celebrated for its eco-friendly tourism policies and initiatives to protect its unique ecosystems and indigenous Maori culture, New Zealand is a leader in sustainable travel." },
        { image: "../Image/sweden.jpeg", title: "SWEDEN", name: "Sweden", text: "Known for its extensive use of renewable energy, green cities, and sustainable lifestyle practices, Sweden promotes eco-friendly tourism and conservation." },
        { image: "../Image/finland.jpeg", title: "FINLAND", name: " Finland", text: "Combines innovative sustainable practices with natural beauty, promoting eco-friendly accommodations, sustainable forestry, and clean energy use." }
    ];

    let testimonials_2 = [
        { image: "../Image/mirissa.jpeg", title: "MIRISSA", name: "Mirissa Beach Area", text: "This coastal town is known for its whale watching and beautiful beaches. Sustainable tourism practices in Mirissa include responsible whale watching tours that follow guidelines to minimize disturbances to marine life. Efforts are also made to reduce plastic waste on the beaches and promote eco-friendly accommodations and local dining options." },
        { image: "../Image/meemure.jpeg", title: "MEEMURE", name: "Meemure", text: "Meemure is a remote village nestled in the Knuckles Mountain Range. It is a great example of eco-tourism, where visitors can experience traditional Sri Lankan village life. The community promotes sustainable practices such as organic farming, local sourcing of food, and minimizing waste. Visitors are encouraged to respect local customs and the natural environment." },
        { image: "../Image/wilpattu.jpeg", title: "WILPATTU", name: "Wilpattu National Park", text: "As one of the largest and oldest national parks in Sri Lanka, Wilpattu is known for its unique 'willus' (natural lakes) and diverse wildlife. Sustainable tourism practices here include regulated safari tours to prevent environmental degradation, anti-poaching measures, and conservation programs to protect endangered species. The park also works with local communities to promote eco-tourism and sustainable livelihoods." },
        { image: "../Image/riverston.jpeg", title: "RIVERSTON", name: "Riverston and Pitawala Pathana", text: " Located in the Knuckles Mountain Range, Riverston is famous for its scenic views and biodiversity. Sustainable practices in Riverston include the promotion of eco-friendly trekking and hiking, conservation of flora and fauna, and encouraging visitors to minimize their environmental impact. Local guides are often employed to ensure that tourism benefits the community and raises awareness about conservation efforts."}
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