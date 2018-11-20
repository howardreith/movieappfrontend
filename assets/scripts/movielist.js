const movieList = ['Star Wars (1977)', 'The Empire Strikes Back', 'Return of the Jedi']

const movieString = ('"' + movieList.join('"') + '"')

module.exports = {
  movieList: movieList,
  movieString: movieString
}
