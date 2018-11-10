'use strict'

const config = require('./config')

const getMovieMatches = function (selectedMovie) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/movies/' + selectedMovie
  })
}

module.exports = {
  getMovieMatches: getMovieMatches
}
