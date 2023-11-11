document.addEventListener('DOMContentLoaded', ()=>{
    if (document.querySelector('.section-apartament-tabs'))   {    
        const sectionApartamentsTabs = document.querySelector('.section-apartament-tabs').children
        const sectionApartamentsImg = document.querySelectorAll('.apartament-img')
        const sectionApartamentsRightFirst = document.querySelector('.apartament-right-item-first')
        const sectionApartamentsRightSecond = document.querySelector('.apartament-right-item-second')
        
        for (let i = 0; i < sectionApartamentsTabs.length; i++) {
            sectionApartamentsTabs[i].addEventListener('click',()=>{
                for (let x = 0; x < sectionApartamentsTabs.length; x++) {
        
                    sectionApartamentsTabs[x].classList.remove('section-location-tab-selected')
                    sectionApartamentsTabs[i].classList.add('section-location-tab-selected')
        
                    sectionApartamentsImg[x].style.display = 'none'
                    sectionApartamentsImg[i].style.display = 'block'
                }
    
                if (sectionApartamentsImg[2].style.display == 'block') {
                    sectionApartamentsRightFirst.style.display = "none"
                    sectionApartamentsRightSecond.style.display = "grid"
                }
                else {
                    sectionApartamentsRightFirst.style.display = "grid"
                    sectionApartamentsRightSecond.style.display = "none"
                }
            })
            
        }
        }
    
    if (document.querySelector('.section-apartament-tabs-720')) {
        var sectionApartamentsTabs720 = document.querySelector('.section-apartament-tabs-720').children
        var sectionApartamentsImg720 = document.querySelectorAll('.apartament-img-720')
        var sectionApartamentsRight720 = document.querySelector('.apartaments-right-720')
    
        for (let i = 0; i < sectionApartamentsTabs720.length; i++) {
            sectionApartamentsTabs720[i].addEventListener('click',()=>{
                for (let x = 0; x < sectionApartamentsTabs720.length; x++) {
        
                    sectionApartamentsTabs720[x].classList.remove('section-location-tab-selected')
                    sectionApartamentsTabs720[i].classList.add('section-location-tab-selected')
        
                    sectionApartamentsImg720[x].style.display = 'none'
                    sectionApartamentsImg720[i].style.display = 'block'
                }
    
                if (sectionApartamentsImg720[2].style.display == 'block') {
                    sectionApartamentsRight720.style.display = "block"
                }
                
                else {
                    sectionApartamentsRight720.style.display = "none"
                }
            })
        }        
    
    }
    
    // listen to viewport width to show plan/floor/... on mobile
    
    var allImg = document.querySelectorAll('.apartament-img-720')
    
    if(window.innerWidth < 561 ) {
            for (let i = 0; i < allImg.length; i++) {
                allImg[i].classList.add('mobile-only-visible')
            } 
    }
    
    window.addEventListener('resize', ()=>{
    
        
    
        if(this.innerWidth < 561) {
            for (let i = 0; i < allImg.length; i++) {
                allImg[i].classList.add('mobile-only-visible')
            } 
        } else {
            for (let i = 0; i < allImg.length; i++) {
                allImg[i].classList.remove('mobile-only-visible') 
            }
        }
    })
})

