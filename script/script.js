document.addEventListener('DOMContentLoaded',function(){


    const maps = document.querySelectorAll('.section-location-map');
    const mapZoomInBtns = document.querySelectorAll('.map-zoom-in-btn')
    const mapZoomOutBtns = document.querySelectorAll('.map-zoom-out-btn')

    // SPEED OF ZOOMING IN/OUT
    let scaleSpeed = parseFloat(0.25)

    for (let i = 0; i < maps.length; i++) {
        mapZoomInBtns[i].addEventListener('click', ()=>{
            // SET MAX ZOOM IN
            if(maps[i].dataset.scale < parseFloat(2.5)) {
                let newScale = parseFloat(maps[i].dataset.scale) + scaleSpeed
                maps[i].style.transform = 'scale(' + newScale + ',' + newScale + ')'
                maps[i].dataset.scale = newScale
            }
        })      
    }
    for (let i = 0; i < maps.length; i++) {
        mapZoomOutBtns[i].addEventListener('click', ()=>{
            // SET MAX ZOOM OUT (DO NOT SET LESS THAN 1)
            if(maps[i].dataset.scale > parseFloat(1)) {
                let newScale = parseFloat(maps[i].dataset.scale) - scaleSpeed
                maps[i].style.transform = 'scale(' + newScale + ',' + newScale + ')'
                maps[i].dataset.scale = newScale
            }
        })      
    }

    // 

    // TABS

    // section location tabs

    const sectionLocTabsBtns = document.querySelector('.section-location-tab-wrap').children
    const sectionLocTabs = document.querySelectorAll('.section-location-content-item')

    for (let i = 0; i < sectionLocTabs.length; i++) {
        sectionLocTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionLocTabs.length; x++) {

                // hide and apply bottom border to selected tab btn
                sectionLocTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionLocTabsBtns[i].classList.add('section-location-tab-selected')

                // hide and show needed tab
                sectionLocTabs[x].style.display = 'none'
                sectionLocTabs[i].style.display = 'grid'
            }
        })
        
    }

    // SCROLLERS

    
    const scroller01 = document.querySelector('#scroller01')
    const scroller01controls = document.querySelector('.section-advantages-contols').children

    scroller01.addEventListener('scroll', ()=>{
        let scroller01steps = 5
        currentScroll = parseInt((scroller01.scrollLeft / (scroller01.scrollWidth - scroller01.clientWidth) - 0.1) * scroller01steps)
        for (let i = 0; i < scroller01controls.length; i++) {
            scroller01controls[i].classList.remove('current-scroll')
        }
        scroller01controls[currentScroll].classList.add('current-scroll')
    })

})
        


