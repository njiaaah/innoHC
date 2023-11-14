if (document.querySelector('.section-contacts-tab')) {
    var sectionContactsTabsBtns = document.querySelector('.section-contacts-tab').children
    var sectionContactsImg = document.querySelector('.contacts-img-1')
}


const sectionContactTabs = document.querySelectorAll('.contacts-card-item')

for (let i = 0; i < sectionContactTabs.length; i++) {
    sectionContactsTabsBtns[i].addEventListener('click', () => {
        for (let x = 0; x < sectionContactTabs.length; x++) {

            sectionContactsTabsBtns[x].classList.remove('section-location-tab-selected')
            sectionContactsTabsBtns[i].classList.add('section-location-tab-selected')

            sectionContactTabs[x].style.display = 'none'
            sectionContactTabs[i].style.display = 'grid'
        }

        if (document.querySelector('.contacts-img-3') && sectionContactTabs[0].style.display == 'none') {
            var sectionContactsImg3 = document.querySelector('.contacts-img-3')
            sectionContactsImg3.style.display = 'grid'
            sectionContactsImg.style.display = 'none'
        }

        else if (document.querySelector('.contacts-img-3')) {
            var sectionContactsImg3 = document.querySelector('.contacts-img-3')
            sectionContactsImg3.style.display = 'none'
            sectionContactsImg.style.display = 'block'
        }

        else if (sectionContactTabs[0].style.display == 'none') {
            sectionContactsImg.classList.add('contacts-img-2')
        }

        else {
            sectionContactsImg.classList.remove('contacts-img-2')
        }
    })

}