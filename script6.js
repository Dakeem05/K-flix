let searched = document.getElementById("search-text");
let search = document.getElementById("search")
let searcher = document.getElementById("searcher")
let display = document.querySelector("#display")
let display2 = document.querySelector("#display2")
searcher.addEventListener("submit", function(e){
    
    e.preventDefault()
})
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1d62370479mshfad712636c29d1bp14d764jsn3804ef0296d1',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/title/v2/find?title=anime&limit=40&sortArg=moviemeter%2Casc', options)
	.then(response => response.json())
	.then(data => {
        const list = data.results

        list.map((item) => {
            const name = item.title;
            const poster = item.image.url;
            const film = `<li><img src="${poster}"><h2>${name}</h2></li>`
            display2.innerHTML += film
        })

    })
	.catch(err => console.error(err));


search.addEventListener("click", function(){
    display2.style.visibility = "hidden"
    display.style.visibility = "visible"
    let search_text = searched.value
    console.log(search_text);

    let pageSize = 5;
    var movieData = [];
    let currentPage = 1;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2653485131msh6209ca98a9a8b17p1f2eacjsn01e0db49118d',
            'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
        }
    };
    


    async function renderTable(page = 1){
    await getData();
    var movieName ="";

    if (page === 1) {
        prev.style.visibility = "hidden"
    } else {
        prev.style.visibility = "visible"

    }

    if (page === numOfPages){
        next.style.visibility= "hidden"
    } else {
        next.style.visibility= "visible"

    }
    movieData.filter((row, index) => {
    let start = (currentPage - 1) * pageSize;
    let end = currentPage * pageSize;

    if (index>= start && index < end) return true;
}).forEach(movies => {
    movieName += "<tr>"
    movieName += `<td><img id="timage" src="${movies.poster_path}" alt="${movies.title}"/img></td>`
    movieName += `<td>${movies.title}</td>`
    movieName += `<td>${movies.release_date}</td>`
    movieName += `<td>${movies.popularity}</td>`
    movieName += `<td id="over">${movies.overview}</td>`
    "<tr>"
})

document.getElementById("data").innerHTML = movieName;
}
renderTable()

function previousPage(){
if (currentPage > 1 ) {
    currentPage--;
    renderTable(currentPage)
}
}

function nextPage() {
if((currentPage * pageSize) < movieData.length) {
    currentPage++;
    renderTable(currentPage)
}
}

function numOfPages(){
    return Math.ceil(movieData.length / pageSize)
}

numOfPages()

document.querySelector("#prev").addEventListener("click", previousPage, false);
document.querySelector("#next").addEventListener("click", nextPage, false);


async function getData(){
    
const response = await fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${search_text}&page=1`, options);
const movies = await response.json()
movieData = movies.results;
}getData()
})
    

