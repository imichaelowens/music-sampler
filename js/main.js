//vars
let musicPlayers = document.querySelectorAll('.musicPlayer');
let albumIcons = document.querySelectorAll('.albumIcons');
let nowPlaying = document.querySelectorAll('.nowPlaying');

// function to hide all divs
function hideAll() {
  musicPlayers.forEach(function(el) {
    el.style.display = 'none';
    el.pause();
    el.currentTime = 0;
  });

  nowPlaying.forEach(function(el) {
    el.style.display = 'none';
  });
}

//hide both music player and whats playing
hideAll();


albumIcons.forEach(function(el) {

  el.onclick = (e) => {

    hideAll();


    switch (e.target.getAttribute('id')) {
      case 'communiqueAlbum':
        document.querySelector('#news')
        	.style.display = 'block';
        document.querySelector('#playingNews')
          .style.display = 'block';
        break;
      case 'direStraitsAlbum':
        document.querySelector('#sultansofswing')
        	.style.display = 'block';
        document.querySelector('#playingSultansOfSwing')
          .style.display = 'block';
        break;
      case 'moneyForNothingAlbum':
        document.querySelector('#moneyfornothing')
         .style.display = 'block';
        document.querySelector('#playingMoneyForNothing')
          .style.display = 'block';
        break;
      case 'privateInvestigationsAlbum':
        document.querySelector('#singlehandedsailor')
         .style.display = 'block';
        document.querySelector('#playingSailor')
          .style.display = 'block';
        break;
    }


  }

});
