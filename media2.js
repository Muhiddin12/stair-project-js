let mediaMovie = `https://api.themoviedb.org/3/movie/upcoming?api_key=ffd716e442cea750f989f65854a0cb89&language=en-US&page=1`
fetch(mediaMovie)
  .then((value22) => value22.json())
  .then((response22) => {
    console.log(response22)
    let mediaCont = document.querySelector('.media-cont')
    let arrmedia = response22.results.slice(0, 8);
    arrmedia.map((itemMedia) => {
      let mediaItem = document.createElement('div')
      mediaItem.className = 'media-item'
      let mediaItemCont = document.createElement('div')
      mediaItemCont.className = 'media-item-cont'
      let mediaImage = document.createElement('div')
      mediaImage.className = 'media-image'
      let imageM = document.createElement('img')
      imageM.src = `https://image.tmdb.org/t/p/original/${itemMedia.backdrop_path}`
      let mediaText = document.createElement('div')
      mediaText.className = 'media-text'
      let divMedia = document.createElement('div')
      divMedia.className = 'media-media'

      let mIcon1 = document.createElement('i')       
      mIcon1.className = 'fa-solid fa-arrows-rotate' 
      mIcon1.id = 'mIcon1' 
      let mIcon2 = document.createElement('i')
      mIcon2.className = 'fa-solid fa-backward' 
      mIcon2.id = 'mIcon2'
      let mIconDiv = document.createElement('div')
      mIconDiv.className = 'mIconDiv' 
      let mIcon = document.createElement('i')
      mIcon.id = 'mIcon' 
      mIcon.className = 'fa-solid fa-play' 
      let mIcon3 = document.createElement('i')
      mIcon3.className = 'fa-solid fa-forward'
      mIcon3.id = 'mIcon3' 
      let mIcon4 = document.createElement('i')  
      mIcon4.className = 'fa-regular fa-heart'  
      mIcon4.id = 'mIcon4' 

      let mediaName = document.createElement('div')
      mediaName.className = 'media-name'
      let mediaNameh2 = document.createElement('h2')
      mediaNameh2.textContent = itemMedia.title;
      let overviewM = document.createElement('p')
      overviewM.textContent = `Bob & Whitney`;
      mediaName.appendChild(overviewM)
      mIconDiv.appendChild(mIcon)  
      divMedia.appendChild(mIcon1)     
      divMedia.appendChild(mIcon2)
      divMedia.appendChild(mIconDiv)
      divMedia.appendChild(mIcon3)
      divMedia.appendChild(mIcon4)
      mediaText.appendChild(mediaName)
      mediaText.appendChild(divMedia)
      mediaImage.appendChild(imageM)
      mediaItemCont.appendChild(mediaNameh2)
      mediaItemCont.appendChild(mediaImage)
      mediaItemCont.appendChild(mediaText)
      mediaItem.appendChild(mediaItemCont)
      mediaCont.appendChild(mediaItem)
    });
  });
  

        // scroll   Arrow Button

        const scrollBtn = document.querySelector('.arrow');

        if(scrollBtn) {
            window.addEventListener('scroll', () => {
                if(pageYOffset > (window.innerHeight * 1.2)) {
                    scrollBtn.style.display = 'flex';
                } else {
                    scrollBtn.style.display = 'none';
                }
            });
            scrollBtn.addEventListener('click', () => {
                window.scrollTo(0, 0);
            });
        }
        
                //   Buttton Moon
        
        let moonIcon = document.querySelector('.iconMoonInTwoF img');
        
        moonIcon.onclick = function(){
            document.body.classList.toggle('dark-theme');
            if(document.body.classList.contains('dark-theme')){
                moonIcon.src = './image/sun.png';
            } else {
                moonIcon.src = './image/moon.png';
            }
        }
        
// Mobile version Hamburger

let menu = document.querySelector('#side-menu')
let sideBar = document.querySelector('.first-section')
let sidebarCount = 0;

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  sideBar.classList.toggle('active');
  if(sidebarCount === 0) {
    sidebarCount++
    document.querySelector('.navbarF').style.backgroundColor = 'var(--first-color)';
  } else {
    sidebarCount--
    document.querySelector('.navbarF').style.backgroundColor = `var(--navColor-color)`;
  }
  
};

          //   Mobile  Moon
let moonIconT = document.querySelector('.iconMoonInTwoT img');

moonIconT.onclick = function(){
document.body.classList.toggle('dark-theme');
if(document.body.classList.contains('dark-theme')){
moonIconT.src = './image/sun.png';
} else {
moonIconT.src = './image/moon.png';
}
}