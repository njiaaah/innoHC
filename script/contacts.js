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

        if (sectionContactTabs[0].style.display == 'none') {
            sectionContactsImg.classList.add('contacts-img-2')
        }

        else {
            sectionContactsImg.classList.remove('contacts-img-2')
        }
    })

}