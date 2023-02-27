const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'db6f98c2d2msh6c306811dd30c95p10f8b2jsn69bd34c019e2',
		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

fetch('https://imdb-top-100-movies.p.rapidapi.com/top17', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));