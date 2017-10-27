(function() {


    var bahuBali = {
        poster: 'images/bahu.jpg',
        name: 'Return of Bahubali',
        director: 'Raj Mohan',
        rating: 4.5
    };

    var mersal = {
        poster: 'images/mersal.jpg',
        name: 'Merisal',
        director: 'Aatlee',
        rating: 4.4
    };

    var vivegam = {
        poster: 'images/vivegam.jpg',
        name: 'Vivegam',
        director: 'Siva',
        rating: 4.3
    };

    var moviesList = [bahuBali];

    moviesList.push(mersal);
    moviesList.push(vivegam);

    function display(movie) {
        document.writeln('<h1>' + movie.name + '</h1>')
        document.writeln('<img src=' + movie.poster + '></img>');
        document.writeln("<h4>" + movie.director + '</h4>');
        document.writeln("<h1> Rating:" + movie.rating + '</h1>');

    }

    moviesList.forEach(function(movie, idxPos) {
        display(movie);
    });

})();