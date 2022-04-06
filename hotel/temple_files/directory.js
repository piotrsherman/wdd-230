const requestURL = 'https://piotrsherman.github.io/wdd-230/lesson9/temple.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);

        const busineses = jsonObject['busineses'];

        busineses.forEach(displaybusineses);
    });




function displaybusineses(business) {
    const card = document.createElement('section');
    const image = document.createElement('img');
    const p1 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');



    image.src = business.imageurl;
    image.setAttribute('alt', business.order);
    card.appendChild(image);


    p3.textContent = ` Phone:  ${business.phonenumber}`;
    card.appendChild(p3);

    p4.textContent = ` Address: ${business.name}`;
    card.appendChild(p4);

    p1.textContent = ` site: ${business.website}`;
    card.appendChild(p1);





    document.querySelector('div.cards').appendChild(card);

}