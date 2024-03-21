const array = [
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
let movies = []
class Movie{
    constructor(name, director, date){
        this.name = name
        this.director = director
        this.date = date
    }
    print(){
        if (this.name && this.director && this.date) 
            console.log(JSON.stringify(this));
    }
}
function fun(array){
    for (str of array){
        if (str.split(" ")[0] == 'addMovie'){
            movies.push(new Movie(str.split('addMovie')[1].trim()))
        }
        else if (str.includes("directedBy")){
            movie = getMovie(str.split('directedBy')[0].trim())
            if (movie){
                movie.director = str.split('directedBy')[1].trim()
            }
        }
        else if (str.includes("onDate")){
            movie = getMovie(str.split('onDate')[0].trim())
            if (movie){
                movie.date = str.split('onDate')[1].trim()
            }
        }
    } 
    function getMovie(movieName) {
        for (let movie of movies) {
            if (movie.name === movieName) {
                return movie;
            }
        }
        return null;
    }
}
fun(array)
movies.forEach(movie => movie.print())