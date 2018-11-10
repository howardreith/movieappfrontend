'use strict'

const events = require('./events')

$(() => {
  $('#movie-input').on('click', events.onMovieInput)
})
