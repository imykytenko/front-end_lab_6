function fetchUsers() {
    return new Promise((resolve, reject) => {
        fetch('https://randomuser.me/api/?results=5')
            .then(response => {
                if (!response.ok) {
                    reject('Помилка завантаження даних');
                }
                return response.json();
            })
            .then(data => {
                resolve(data.results);
            })
            .catch(error => {
                reject(`Помилка: ${error}`);
            });
    });
}

document.getElementById('fetchUsersBtn').addEventListener('click', () => {
    fetchUsers()
        .then(users => {
            const userContainer = document.getElementById('userContainer');
            userContainer.innerHTML = '';

            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.classList.add('user-card');

                const img = document.createElement('img');
                img.src = user.picture.large;
                img.alt = `${user.name.first} ${user.name.last}`;

                const city = document.createElement('p');
                city.textContent = `Місто: ${user.location.city}`;

                const country = document.createElement('p');
                country.textContent = `Країна: ${user.location.country}`;

                const postcode = document.createElement('p');
                postcode.textContent = `Поштовий індекс: ${user.location.postcode}`;

                const emailLabel = document.createElement('p');
                emailLabel.textContent = 'Електронна пошта:';

                const email = document.createElement('p');
                email.textContent = user.email;

                userCard.appendChild(img);
                userCard.appendChild(city);
                userCard.appendChild(country);
                userCard.appendChild(postcode);
                userCard.appendChild(emailLabel);
                userCard.appendChild(email);

                userContainer.appendChild(userCard);
            });

            const statusMessage = document.getElementById('statusMessage');
            statusMessage.textContent = "Успішно!";
            statusMessage.style.display = 'block';
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
});
