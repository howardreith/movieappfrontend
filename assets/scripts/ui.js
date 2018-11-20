const showGetMovieMatchesSuccess = function (response) {
  console.log('Response is ', response)
  $('#movie-list-div').show()
  $('#movie-list-1').text(response.movielist[1])
  $('#movie-list-2').text(response.movielist[2])
  $('#movie-list-3').text(response.movielist[3])
  $('#movie-list-4').text(response.movielist[4])
  $('#movie-list-5').text(response.movielist[5])
  $('#movie-list-6').text(response.movielist[6])
  $('#movie-list-7').text(response.movielist[7])
  $('#movie-list-8').text(response.movielist[8])
  $('#movie-list-9').text(response.movielist[9])
  $('#movie-list-10').text(response.movielist[10])
  $('#movie-list-11').text(response.movielist[11])
  $('#movie-list-12').text(response.movielist[12])
  $('#movie-list-13').text(response.movielist[13])
  $('#movie-list-14').text(response.movielist[14])
  $('#movie-list-15').text(response.movielist[15])
}

const showGetMovieMatchesFail = function (error) {
  console.log('Error is ', error)
}

module.exports = {
  showGetMovieMatchesSuccess,
  showGetMovieMatchesFail
}
