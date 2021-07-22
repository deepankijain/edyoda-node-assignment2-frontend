let playerName = document.getElementById('player-name')
let playerImage = document.getElementById('player-image')
let nextBtn = document.getElementById('next-btn')

$.get('https://edyoda-node-assignment-2.herokuapp.com/firstplayer', (data) => {
  playerName.innerText = data.name
  playerImage.src = data.imageUrl
})
nextBtn.addEventListener('click', (e) => {
  $.get('https://edyoda-node-assignment-2.herokuapp.com/nextplayer', (data) => {
    if (data.name) {
      playerName.innerText = data.name
      playerImage.src = data.imageUrl
    } else {
      playerName.innerText = data.message
      playerImage.remove()
      nextBtn.remove()
      const goHomeBtn = document.createElement('button')
      goHomeBtn.innerText = 'Go Home'
      document.getElementById('home-page').appendChild(goHomeBtn)
      goHomeBtn.addEventListener('click', () => {
        location.href = './index.html'
      })
    }
  })
})
