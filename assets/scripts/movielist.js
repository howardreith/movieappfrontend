const movieList = ['Star Wars', 'The Empire Strikes Back', 'Return of the Jedi']

const movieString = ('"' + movieList.join('"') + '"')

module.exports = {
  movieList: movieList,
  movieString: movieString
}
