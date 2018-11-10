const ui = require('./ui.js')
const api = require('./api.js')
const movieList = require('./movielist.js')

const movieString = movieList.movieString

const onMovieInput = function (event) {
  console.log('onMovieInput has done something')
  console.log('movieList is ', movieList)
}

$('#movie-input').keyup(function () {
  const search = $(this).val()
  const resultsText = $('#results_text')
  const resultsCount = $('#results_count')
  const resultList = document.querySelector('#result-list')
  resultList.innerHTML = ''
  if (!search) {
    resultsText.val('')
    resultsCount.val('0')
    return
  }
  const rx = new RegExp('"([^"]*' + search + '[^"]*)"', 'gi')
  let i = 0
  let results = ''
  let result
  while (result = rx.exec(movieString)) {
    console.log('result is ', result)
    console.log('results before the \n stuff is ', results)
    results += '\n' + result
    i += 1
    if (i >= 100) {
      break
    }
  }
  // console.log('results is ', results)
  const resultsArray = results.split('\n')
  // console.log('resultsArray is ', resultsArray)
  for (let i = 0; i < resultsArray.length; i++) {
    const newResult = resultsArray[i].split(',')
    resultsArray[i] = newResult[1]
  }
  // console.log('revised resultsArray is ', resultsArray)
  for (let i = 0; i < resultsArray.length; i++) {
    if (resultsArray[i]) {
      resultList.innerHTML += `<li class="list-group-item">${resultsArray[i]}</li>`
    }
  }
  $('#search-results').show()
  // resultList.innerHTML += `<li class="list-group-item">${resultsArray}</li>`
  resultsText.val(results)
  resultsCount.val(i)
})

module.exports = {
  onMovieInput: onMovieInput
}
