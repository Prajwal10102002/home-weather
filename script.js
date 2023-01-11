const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e481238038msh241d351f272228fp15ceb9jsncb61f7e5cb25',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dht22-a5155-default-rtdb.firebaseio.com/DHT.json', options)
	.then(response => response.json())
	.then((response) => {
    
            console.log(response)
            AQI.innerHTML = response.AQI
            humidity.innerHTML = response.humidity
            temperature.innerHTML = response.temperature

            })
	.catch(err => console.error(err));