const showGetMovieMatchesSuccess = function (response) {
  console.log('Response is ', response)
}

const showGetMovieMatchesFail = function (error) {
  console.log('Error is ', error)
}

module.exports = {
  showGetMovieMatchesSuccess,
  showGetMovieMatchesFail
}
