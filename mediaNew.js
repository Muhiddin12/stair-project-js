let urlForMovieGallery = `https://api.themoviedb.org/3/movie/top_rated?api_key=d54f1a6164bfe4d1e9a8e04d6e9d345c&language=en-US&page=1`
fetch(urlForMovieGallery)
  .then((value) => value.json())
  .then((response) => {
    console.log(response)
    let galleryCont = document.querySelector('.gallery-cont')
    let arrMovies = response.results.slice(0, 8);
    arrMovies.map((item) => {
      let galleryItem = document.createElement('div')
      galleryItem.className = 'gallery-item'
      let galleryItemCont = document.createElement('div')
      galleryItemCont.className = 'galley-item-cont'
      let galleryImage = document.createElement('div')
      galleryImage.className = 'gallery-image'
      let imageG = document.createElement('img')
      imageG.id = 'topInImg'
      imageG.src = `https://image.tmdb.org/t/p/original/${item.backdrop_path}`
      let galleryText = document.createElement('div')
      galleryText.className = 'gallery-text'
      let galleryMedia = document.createElement('div')
      galleryMedia.className = 'gallery-media'

      let icon1 = document.createElement('i')       
      icon1.className = 'fa-solid fa-arrows-rotate' 
      icon1.id = 'icon1' 
      let icon2 = document.createElement('i')
      icon2.className = 'fa-solid fa-backward' 
      icon2.id = 'icon2'
      let iconDiv = document.createElement('div')
      iconDiv.className = 'iconDiv' 
      let icon = document.createElement('i')
      icon.id = 'icon' 
      icon.className = 'fa-solid fa-play' 
      let icon3 = document.createElement('i')
      icon3.className = 'fa-solid fa-forward'
      icon3.id = 'icon3' 
      let icon4 = document.createElement('i')  
      icon4.className = 'fa-regular fa-heart' 
      icon4.id = 'icon4' 

      let galleryName = document.createElement('div')
      galleryName.className = 'gallery-name'
      let galleryNameh2 = document.createElement('h2')
      galleryNameh2.textContent = item.title;
      let overview = document.createElement('p')
      overview.textContent = `Cobain & Britney`;
      galleryName.appendChild(overview)
      iconDiv.appendChild(icon)  
      galleryMedia.appendChild(icon1)     
      galleryMedia.appendChild(icon2)
      galleryMedia.appendChild(iconDiv)
      galleryMedia.appendChild(icon3)
      galleryMedia.appendChild(icon4)
      galleryText.appendChild(galleryName)
      galleryText.appendChild(galleryMedia)
      galleryImage.appendChild(imageG)
      galleryItemCont.appendChild(galleryNameh2)
      galleryItemCont.appendChild(galleryImage)
      galleryItemCont.appendChild(galleryText)
      galleryItem.appendChild(galleryItemCont)
      galleryCont.appendChild(galleryItem)
    })
  })

        // heart iconni togirlash
        
        // let heart = document.querySelector(".gallery-media i");
        // let check = 0;

        // heart.addEventListener("click", () => {
          
        //   if (check === 0) {
        //       check = 1
              
        //       heart.style.color = '#e45006';
        //     } else {
        //       check--
        //       heart.style.color = '#000000';
        //     }
        // });