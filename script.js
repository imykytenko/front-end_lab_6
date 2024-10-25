document.getElementById('fetchUserBtn').addEventListener('click', () => {
    fetch('https://randomuser.me/api')
        .then(response => {
            if (!response.ok) {
                throw new Error('Помилка завантаження даних');
            }
            return response.json();
        })
        .then(data => {
            const user = data.results[0];
            const pictureUrl = user.picture.large;
            const city = user.location.city;
            const country = user.location.country;
            const postcode = user.location.postcode;
            const email = user.email;

            document.getElementById('userPicture').src = pictureUrl;
            document.getElementById('userCity').textContent = `Місто: ${city}`;
            document.getElementById('userCountry').textContent = `Країна: ${country}`;
            document.getElementById('userPostcode').textContent = `Поштовий індекс: ${postcode}`;
            document.getElementById('userEmail').textContent = `Електронна пошта: ${email}`;
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
});