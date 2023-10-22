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
                // do not change *location* when copying
                sectionLocTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionLocTabsBtns[i].classList.add('section-location-tab-selected')

                // hide and show needed tab
                sectionLocTabs[x].style.display = 'none'
                sectionLocTabs[i].style.display = 'grid'
            }
        })
        
    }

    // section rare tabs

    const sectionRareTabsBtns = document.querySelector('.section-rare-formats-tab-wrap').children
    const sectionRareTabs = document.querySelectorAll('.section-rare-formats-content-item')

    for (let i = 0; i < sectionRareTabs.length; i++) {
        sectionRareTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionRareTabs.length; x++) {

                sectionRareTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionRareTabsBtns[i].classList.add('section-location-tab-selected')
                
                sectionRareTabs[x].style.display = 'none'
                sectionRareTabs[i].style.display = 'flex'
            }
        })
        
    }

    // section gallery

    const sectionGalleryTabsBtns = document.querySelector('.section-gallery-formats-tab-wrap').children
    const sectionGalleryTabs = document.querySelectorAll('.section-gallery-card')
    const sectionGalleryControls = document.querySelector('.section-gallery-card-controls').children

    for (let i = 0; i < sectionGalleryTabs.length; i++) {
        sectionGalleryTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionGalleryTabs.length; x++) {

                sectionGalleryTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionGalleryTabsBtns[i].classList.add('section-location-tab-selected')
                
                sectionGalleryTabs[x].style.display = 'none'
                sectionGalleryTabs[i].style.display = 'flex'
                sectionGalleryControls[1].classList.remove('current-scroll')
                sectionGalleryControls[2].classList.remove('current-scroll')
                sectionGalleryControls[3].classList.remove('current-scroll')
                sectionGalleryControls[0].classList.add('current-scroll')
            }
        })
        
    }

    // section landscaping and engineering tabs

    const sectionLandTabsBtns = document.querySelector('.section-landscaping-tap-wrap').children
    const sectionLandTabs = document.querySelectorAll('.section-landscaping-content-item')

    for (let i = 0; i < sectionLandTabs.length; i++) {
        sectionLandTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionLandTabs.length; x++) {

                sectionLandTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionLandTabsBtns[i].classList.add('section-location-tab-selected')
                
                sectionLandTabs[x].style.display = 'none'
                sectionLandTabs[i].style.display = 'grid'
            }
        })
        
    }

    // section landscaping and engineering tabs

    const sectionHowTabsBtns = document.querySelector('.section-htb-tap-wrap').children
    const sectionHowTabs = document.querySelectorAll('.section-htb-tab-item')
    const sectionHowFruit = document.querySelector('.section-htb-fruit-wrap')
    const sectionHowToBuy = document.querySelector('.section-how-to-buy')

    for (let i = 0; i < sectionHowTabs.length; i++) {
        sectionHowTabsBtns[i].addEventListener('click',()=>{
            for (let x = 0; x < sectionLandTabs.length; x++) {

                sectionHowTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionHowTabsBtns[i].classList.add('section-location-tab-selected')
                
                sectionHowTabs[x].style.display = 'none'
                sectionHowTabs[i].style.display = 'block'
               
            }
        })
        
    }

    for (let i = 0; i < sectionHowTabs.length; i++) {
        sectionHowTabsBtns[i].addEventListener('click',()=>{
            if (sectionHowFruit.style.display == "none" && window.screen.width > 560) {

                sectionHowFruit.style.display = "block"
                sectionHowToBuy.style.height = "100%"
            }
            else {
                sectionHowFruit.style.display = "none"
                sectionHowToBuy.style.height = "100%"
            }
        })
        
    }

    // SCROLLERS

    // scroller - элемент который скролится с классами horizontal-scroller, snaps-inline
    // controls - массив с кнопками для управления данного скрола

    function updateScrollerControls(scroller, controls) {
        currentScroll = parseInt((scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth) - 0.01) * controls.length)
        for (let i = 0; i < controls.length; i++) {
            controls[i].classList.remove('current-scroll')
        }
        controls[currentScroll].classList.add('current-scroll')
    }

    // btnIndex - порядковый номер кнопки по которой было кликнуто
    function clickScrollerControls(scroller,controls, btnIndex) {
        let offsetLeft = (btnIndex / (controls.length - 1)) * (scroller.scrollWidth - scroller.clientWidth)
        scroller.scrollTo({
            left: offsetLeft,
            behavior: 'smooth'
        })
    }

    // section ADVANTAGES - scroller 1

    const scroller01 = document.querySelector('#scroller01')
    const scroller01controls = document.querySelector('.section-advantages-contols').children

    scroller01.addEventListener('scroll', ()=>{
        updateScrollerControls(scroller01, scroller01controls)
    })

    for (let i = 0; i < scroller01controls.length; i++) {
        scroller01controls[i].addEventListener('click',()=>{
            clickScrollerControls(scroller01, scroller01controls ,i)
        })
    }

    // section RARE FORMATS item-01 - scroller 2

    const scroller02 = document.querySelector('#scroller02')
    const scroller02controls = document.querySelector('.rare-controls-0').children

    scroller02.addEventListener('scroll', ()=>{
        updateScrollerControls(scroller02, scroller02controls)
    })

    for (let i = 0; i < scroller02controls.length; i++) {
        scroller02controls[i].addEventListener('click',()=>{
            clickScrollerControls(scroller02, scroller02controls ,i)
        })
    }

       // section stock - scroller 3

   const scroller03 = document.querySelector('#scroller03')
   const scroller03controls = document.querySelector('.section-stock-controls').children

   scroller03.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller03, scroller03controls)
   })

   for (let i = 0; i < scroller03controls.length; i++) {
       scroller03controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller03, scroller03controls ,i)
       })
   }

   // section construction progress - scroller 4

   const scroller04 = document.querySelector('#scroller04')
   const scroller04controls = document.querySelector('.section-construction-progress-controls').children

   scroller04.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller04, scroller04controls)
   })

   for (let i = 0; i < scroller04controls.length; i++) {
       scroller04controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller04, scroller04controls ,i)
       })
   }

   // section news - scroller 5

   const scroller05 = document.querySelector('#scroller05')
   const scroller05controls = document.querySelector('.section-news-card-controls').children

   scroller05.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller05, scroller05controls)
   })

   for (let i = 0; i < scroller05controls.length; i++) {
       scroller05controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller05, scroller05controls ,i)
       })
   }

   // section formats - scroller 6

   const scroller06 = document.querySelector('#scroller06')
   const scroller06controls = document.querySelector('.section-format-controls').children

   scroller06.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller06, scroller06controls)
   })

   for (let i = 0; i < scroller06controls.length; i++) {
       scroller06controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller06, scroller06controls ,i)
       })
   }

   // section gallery - scroller 7

   const scroller07 = document.querySelector('#scroller07')
   const scroller07controls = document.querySelector('.section-gallery-card-controls').children

   scroller07.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller07, scroller07controls)
   })

   for (let i = 0; i < scroller07controls.length; i++) {
       scroller07controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller07, scroller07controls ,i)
       })
   }

   const scroller08 = document.querySelector('#scroller08')
   const scroller08controls = document.querySelector('.section-gallery-card-controls').children

   scroller08.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller08, scroller08controls)
   })

   for (let i = 0; i < scroller08controls.length; i++) {
       scroller08controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller08, scroller08controls ,i)
       })
   }

   const scroller09 = document.querySelector('#scroller09')
   const scroller09controls = document.querySelector('.section-gallery-card-controls').children

   scroller09.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller09, scroller08controls)
   })

   for (let i = 0; i < scroller09controls.length; i++) {
       scroller09controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller09, scroller09controls ,i)
       })
   }

   const scroller10 = document.querySelector('#scroller10')
   const scroller10controls = document.querySelector('.section-gallery-card-controls').children

   scroller10.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller10, scroller10controls)
   })

   for (let i = 0; i < scroller10controls.length; i++) {
       scroller10controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller10, scroller10controls ,i)
       })
   }
   const scroller11 = document.querySelector('#scroller11')
   const scroller11controls = document.querySelector('.section-gallery-card-controls').children

   scroller11.addEventListener('scroll', ()=>{
       updateScrollerControls(scroller11, scroller11controls)
   })

   for (let i = 0; i < scroller11controls.length; i++) {
       scroller11controls[i].addEventListener('click',()=>{
           clickScrollerControls(scroller11, scroller11controls ,i)
       })
   }


    // FORM

    // hide label if input value =/= empty

    const formLabels = document.querySelectorAll('.form-label')
    const formInputs = document.querySelectorAll('.form-input')

    for (let i = 0; i < formInputs.length; i++) {
        
        formInputs[i].addEventListener('focusout',()=>{
            if(formInputs[i].value) {
                formLabels[i].style.opacity = '0'
            } else formLabels[i].style.opacity = '1'
        })
        
    }


    // DRAGSCROLL FIX FOR INLINE SPAN

    const allScrolls = document.querySelectorAll('.snaps-inline') 
    let isMouseDown = false

    for (let i = 0; i < allScrolls.length; i++) {
        allScrolls[i].addEventListener('mousedown', ()=>{
            allScrolls[i].classList.remove('snaps-inline')
            allScrolls[i].style.cursor = 'grabbing'
            isMouseDown = true
        })

        allScrolls[i].addEventListener('mouseleave',  ()=>{
            allScrolls[i].style.cursor = 'grab'
            scrollAndSnap(allScrolls[i])
            isMouseDown = false
        })

        allScrolls[i].addEventListener('mouseup',  ()=>{
            allScrolls[i].style.cursor = 'grab'
            scrollAndSnap(allScrolls[i])
            
            isMouseDown = false
            
        })
        
    }

    function scrollAndSnap(element) {
        
        // privet ya rostislav i ya izobretal snaps-inline zanogo 2 chasa
        let scrollGap = window.getComputedStyle(element).rowGap
        element.scrollTo({
            left: Math.round(element.scrollLeft / element.firstElementChild.offsetWidth ) * element.firstElementChild.offsetWidth + Math.round(element.scrollLeft /element.firstElementChild.offsetWidth ) * parseInt(scrollGap) - 1, 
            behavior: 'smooth'
        })
        setTimeout(function(){
            if(!isMouseDown) {
            element.classList.add('snaps-inline')
            } 
        }, 250)
    }

})
        
//calculator

var cos = document.getElementById('cosprog-info')
var cosimg = document.getElementById('cosimg')
var deb = document.getElementById('debcard-info')
var debimg = document.getElementById('imgdebcard')
var togofcontent = document.getElementById('toggle-offer-content')
var ntfound_bank = document.getElementById('banknotfound-ipot')
var bank_offres = document.getElementById('bank-offer-all')

function cosprog() {
    if (cos.style.display == "grid") {
        cos.style.display = "none"
        cosimg.classList.remove("arrow-up");
    }
    else {
        cos.style.display = "grid"
        cosimg.classList.add("arrow-up");
    }

}

function debcard() {
    if (deb.style.display == "grid") {
        deb.style.display = "none"
        debimg.classList.remove("arrow-up");
    }
    else {
        deb.style.display = "grid"
        debimg.classList.add("arrow-up");
    }

}

function toggle_offer() {
    if (togofcontent.style.display == "block") {
        togofcontent.style.display = "none"
    }
    else {
        togofcontent.style.display = "block"
    }

}

function banknt_found() {
    if (ntfound_bank.style.display == "none") {
        bank_offres.style.display = "none"
        ntfound_bank.style.display = "grid"
    }
    else {
        bank_offres.style.display = "block"
        ntfound_bank.style.display = "none"
    }

}



$('#toggl-cont').slideToggle(0)
let scalecount = 1

$('#togg-infban').click(function(){
    $('#toggl-cont').slideToggle(500)
   
    if (scalecount==1) {
    scalecount = -1;
    $('#imgban-ipot').css("transform", "scaleY(" + scalecount + ")")
    
    }
    else {
        scalecount = 1;  
    $('#imgban-ipot').css("transform", "scaleY(" + scalecount + ")");
      
    }
})