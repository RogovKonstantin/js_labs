function movieInfo(commands) {
    let movies = {};

    for (let command of commands) {
        let parts = command.split(' ');
        let name = '';
        let director = '';
        let date = '';

        if (parts[0] === 'addMovie') {
            name = parts.slice(1).join(' ');
            movies[name] = {};
        } else if (parts.includes('directedBy')) {
            director = parts.slice(parts.indexOf('directedBy') + 1).join(' ');
            name = parts.slice(0, parts.indexOf('directedBy')).join(' ');
            if (movies[name]) {
                movies[name].director = director;
            }
        } else if (parts.includes('onDate')) {
            date = parts.slice(parts.indexOf('onDate') + 1).join(' ');
            name = parts.slice(0, parts.indexOf('onDate')).join(' ');
            if (movies[name]) {
                movies[name].date = date;
            }
        }
    }

    for (let movie in movies) {
        if (movies[movie].director && movies[movie].date) {
            console.log(JSON.stringify({name: movie, ...movies[movie]}));
        }
    }
}
movieInfo([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);