if (document.querySelector('.section-apartament-tabs'))   {    
    const sectionApartamentsTabs = document.querySelector('.section-apartament-tabs').children
    const sectionApartamentsImg = document.querySelectorAll('.apartament-img')
    
    for (let i = 0; i < sectionApartamentsTabs.length; i++) {
        sectionApartamentsTabs[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionApartamentsTabs.length; x++) {
    
                sectionApartamentsTabs[x].classList.remove('section-location-tab-selected')
                sectionApartamentsTabs[i].classList.add('section-location-tab-selected')
    
                sectionApartamentsImg[x].style.display = 'none'
                sectionApartamentsImg[i].style.display = 'block'
            }
        })
        
    }
    }