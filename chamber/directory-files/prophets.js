fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const directory = jsonObject['directory']
        console.table(jsonObject);
        for (let i = 0; i < directory.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let address = document.createElement("p");
            let phone = document.createElement("p");
            let image = document.createElement("img");
            card.setAttribute("class", `order${directory[i].order}`)
            h2.textContent = `${directory[i].name} ${directory[i].lastname}`;
            address.textContent = `address: ${directory[i].address}`;
            phone.textContent = `phone: ${directory[i].phone}`;
            image.setAttribute("src", directory[i].imageurl);
            image.setAttribute("alt", `${directory[i].name} ${directory[i].lastname} - ${directory[i].order}`);
            card.appendChild(h2);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
    });