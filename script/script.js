document.addEventListener('DOMContentLoaded', function () {


    const maps = document.querySelectorAll('.section-location-map');
    const mapZoomInBtns = document.querySelectorAll('.map-zoom-in-btn')
    const mapZoomOutBtns = document.querySelectorAll('.map-zoom-out-btn')

    // SPEED OF ZOOMING IN/OUT
    let scaleSpeed = parseFloat(0.25)

    for (let i = 0; i < maps.length; i++) {
        mapZoomInBtns[i].addEventListener('click', () => {
            // SET MAX ZOOM IN
            if (maps[i].dataset.scale < parseFloat(2.5)) {
                let newScale = parseFloat(maps[i].dataset.scale) + scaleSpeed
                maps[i].style.transform = 'scale(' + newScale + ',' + newScale + ')'
                maps[i].dataset.scale = newScale
            }
        })
    }
    for (let i = 0; i < maps.length; i++) {
        mapZoomOutBtns[i].addEventListener('click', () => {
            // SET MAX ZOOM OUT (DO NOT SET LESS THAN 1)
            if (maps[i].dataset.scale > parseFloat(1)) {
                let newScale = parseFloat(maps[i].dataset.scale) - scaleSpeed
                maps[i].style.transform = 'scale(' + newScale + ',' + newScale + ')'
                maps[i].dataset.scale = newScale
            }
        })
    }

    // 

    // TABS

    // section location tabs

    if (document.querySelector('.section-location-tab-wrap')) {
        var sectionLocTabsBtns = document.querySelector('.section-location-tab-wrap').children
    }
    const sectionLocAdress = document.querySelectorAll('.seciton-location-item-adress')
    const sectionLocText = document.querySelectorAll('.section-location-item-text')
    const sectionLocAround = document.querySelectorAll('.seciton-location-item-around-wrap')

    for (let i = 0; i < sectionLocAdress.length; i++) {
        sectionLocTabsBtns[i].addEventListener('click', () => {
            for (let x = 0; x < sectionLocAdress.length; x++) {

                // hide and apply bottom border to selected tab btn
                // do not change *location* when copying
                sectionLocTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionLocTabsBtns[i].classList.add('section-location-tab-selected')

                // hide and show needed tab
                sectionLocAdress[x].style.display = 'none'
                sectionLocText[x].style.display = 'none'
                sectionLocAround[x].style.display = 'none'
                sectionLocAdress[i].style.display = 'flex'
                sectionLocText[i].style.display = 'flex'
                sectionLocAround[i].style.display = 'flex'
            }
        })

    }

    // section rare tabs

    if (document.querySelector('.section-rare-formats-tab-wrap')) {
        var sectionRareTabsBtns = document.querySelector('.section-rare-formats-tab-wrap').children
    }


    const sectionRareTabs = document.querySelectorAll('.section-rare-formats-content-item')

    for (let i = 0; i < sectionRareTabs.length; i++) {
        sectionRareTabsBtns[i].addEventListener('click', () => {
            for (let x = 0; x < sectionRareTabs.length; x++) {

                sectionRareTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionRareTabsBtns[i].classList.add('section-location-tab-selected')

                sectionRareTabs[x].style.display = 'none'
                sectionRareTabs[i].style.display = 'flex'
            }
        })

    }

    // section gallery

    if (document.querySelector('.section-gallery-formats-tab-wrap')) {
        var sectionGalleryTabsBtns = document.querySelector('.section-gallery-formats-tab-wrap').children
    }

    if (document.querySelector('.section-gallery-card-controls')) {
        var sectionGalleryControls = document.querySelector('.section-gallery-card-controls').children
    }
    const sectionGalleryTabs = document.querySelectorAll('.section-gallery-card')


    for (let i = 0; i < sectionGalleryTabs.length; i++) {
        sectionGalleryTabsBtns[i].addEventListener('click', () => {
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

    if (document.querySelector('.section-landscaping-tap-wrap')) {
        var sectionLandTabsBtns = document.querySelector('.section-landscaping-tap-wrap').children
    }

    const sectionLandTabs = document.querySelectorAll('.section-landscaping-content-item')

    for (let i = 0; i < sectionLandTabs.length; i++) {
        sectionLandTabsBtns[i].addEventListener('click', () => {
            for (let x = 0; x < sectionLandTabs.length; x++) {

                sectionLandTabsBtns[x].classList.remove('section-location-tab-selected')
                sectionLandTabsBtns[i].classList.add('section-location-tab-selected')

                sectionLandTabs[x].style.display = 'none'
                sectionLandTabs[i].style.display = 'block'
            }
        })

    }

    // section landscaping and engineering tabs

    if (document.querySelector('.section-htb-tap-wrap')) {
        var sectionHowTabsBtns = document.querySelector('.section-htb-tap-wrap').children
        const sectionHowTabs = document.querySelectorAll('.section-htb-tab-item')
        const sectionHowFruit = document.querySelector('.section-htb-fruit-wrap')
        const sectionHowToBuy = document.querySelector('.section-how-to-buy')

        for (let i = 0; i < sectionHowTabs.length; i++) {
            sectionHowTabsBtns[i].addEventListener('click', () => {
                for (let x = 0; x < sectionLandTabs.length; x++) {

                    sectionHowTabsBtns[x].classList.remove('section-location-tab-selected')
                    sectionHowTabsBtns[i].classList.add('section-location-tab-selected')

                    sectionHowTabs[x].style.display = 'none'
                    sectionHowTabs[i].style.display = 'block'

                }
            })

        }

        var widthOutput;

        function updateSize() {
            widthOutput = window.innerWidth;
        }

        updateSize();
        window.addEventListener("resize", updateSize);

        const sectionHowCalc = document.querySelector('.mainipot-ipotcalc')

        for (let i = 0; i < sectionHowTabs.length; i++) {
            sectionHowTabsBtns[i].addEventListener('click', () => {
                if (sectionHowCalc.style.display == "block") {

                    sectionHowFruit.style.display = "none"
                    sectionHowToBuy.style.height = "100%"
                }
                else if (sectionHowFruit.style.display == "none" && widthOutput >= 560) {

                    sectionHowFruit.style.display = "block"
                    sectionHowToBuy.style.height = "none"
                }
                else if (sectionHowCalc.style.display == "none" && widthOutput <= 560) {
                    sectionHowFruit.style.display = "none"
                    sectionHowToBuy.style.height = "100%"
                }
                else {
                    sectionHowFruit.style.display = "none"
                    sectionHowToBuy.style.height = "100%"
                }
            })
        }

        function fruithidden(n) {
            if (widthOutput <= 560) {
                sectionHowFruit.style.display = "none"
            }

            else if (sectionHowCalc.style.display == "none" && sectionHowFruit.style.display == "none") {
                sectionHowFruit.style.display = "block"
            }
        }

        var n = window.matchMedia("(max-width: 560px)")
        fruithidden(n)
        n.addListener(fruithidden)
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
    function clickScrollerControls(scroller, controls, btnIndex) {
        let offsetLeft = (btnIndex / (controls.length - 1)) * (scroller.scrollWidth - scroller.clientWidth)
        scroller.scrollTo({
            left: offsetLeft,
            behavior: 'smooth'
        })
    }

    // section ADVANTAGES - scroller 1

    var scroller01 = document.querySelector('#scroller01')

    if (document.querySelector('.section-advantages-contols')) {
        var scroller01controls = document.querySelector('.section-advantages-contols').children
        scroller01.addEventListener('scroll', () => {
            updateScrollerControls(scroller01, scroller01controls)
        })

        for (let i = 0; i < scroller01controls.length; i++) {
            scroller01controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller01, scroller01controls, i)
            })
        }
    }



    // section RARE FORMATS item-01 - scroller 2

    const scroller02 = document.querySelector('#scroller02')

    if (document.querySelector('.rare-controls-0')) {
        var scroller02controls = document.querySelector('.rare-controls-0').children
        scroller02.addEventListener('scroll', () => {
            updateScrollerControls(scroller02, scroller02controls)
        })

        for (let i = 0; i < scroller02controls.length; i++) {
            scroller02controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller02, scroller02controls, i)
            })
        }
    }




    // section stock - scroller 3

    const scroller03 = document.querySelector('#scroller03')

    if (document.querySelector('.section-stock-controls')) {
        var scroller03controls = document.querySelector('.section-stock-controls').children
        scroller03.addEventListener('scroll', () => {
            updateScrollerControls(scroller03, scroller03controls)
        })

        for (let i = 0; i < scroller03controls.length; i++) {
            scroller03controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller03, scroller03controls, i)
            })
        }

    }



    // section construction progress - scroller 4

    const scroller04 = document.querySelector('#scroller04')

    if (document.querySelector('.section-construction-progress-controls')) {
        var scroller04controls = document.querySelector('.section-construction-progress-controls').children
        scroller04.addEventListener('scroll', () => {
            updateScrollerControls(scroller04, scroller04controls)
        })

        for (let i = 0; i < scroller04controls.length; i++) {
            scroller04controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller04, scroller04controls, i)
            })
        }

    }



    // section news - scroller 5

    const scroller05 = document.querySelector('#scroller05')

    if (document.querySelector('.section-news-card-controls')) {
        var scroller05controls = document.querySelector('.section-news-card-controls').children
        scroller05.addEventListener('scroll', () => {
            updateScrollerControls(scroller05, scroller05controls)
        })

        for (let i = 0; i < scroller05controls.length; i++) {
            scroller05controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller05, scroller05controls, i)
            })
        }
    }



    // section formats - scroller 6

    const scroller06 = document.querySelector('#scroller06')

    if (document.querySelector('.section-format-controls')) {
        var scroller06controls = document.querySelector('.section-format-controls').children
        scroller06.addEventListener('scroll', () => {
            updateScrollerControls(scroller06, scroller06controls)
        })

        for (let i = 0; i < scroller06controls.length; i++) {
            scroller06controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller06, scroller06controls, i)
            })
        }

    }


    // section gallery - scroller 7

    const scroller07 = document.querySelector('#scroller07')

    if (document.querySelector('.section-gallery-card-controls')) {
        var scroller07controls = document.querySelector('.section-gallery-card-controls').children
        scroller07.addEventListener('scroll', () => {
            updateScrollerControls(scroller07, scroller07controls)
        })

        for (let i = 0; i < scroller07controls.length; i++) {
            scroller07controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller07, scroller07controls, i)
            })
        }
    }




    const scroller08 = document.querySelector('#scroller08')

    if (document.querySelector('.section-gallery-card-controls')) {
        var scroller08controls = document.querySelector('.section-gallery-card-controls').children
        scroller08.addEventListener('scroll', () => {
            updateScrollerControls(scroller08, scroller08controls)
        })

        for (let i = 0; i < scroller08controls.length; i++) {
            scroller08controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller08, scroller08controls, i)
            })
        }
    }


    const scroller09 = document.querySelector('#scroller09')

    if (document.querySelector('.section-gallery-card-controls')) {
        var scroller09controls = document.querySelector('.section-gallery-card-controls').children
        scroller09.addEventListener('scroll', () => {
            updateScrollerControls(scroller09, scroller08controls)
        })

        for (let i = 0; i < scroller09controls.length; i++) {
            scroller09controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller09, scroller09controls, i)
            })
        }
    }



    const scroller10 = document.querySelector('#scroller10')

    if (document.querySelector('.section-gallery-card-controls')) {
        var scroller10controls = document.querySelector('.section-gallery-card-controls').children
        scroller10.addEventListener('scroll', () => {
            updateScrollerControls(scroller10, scroller10controls)
        })

        for (let i = 0; i < scroller10controls.length; i++) {
            scroller10controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller10, scroller10controls, i)
            })
        }
    }





    const scroller11 = document.querySelector('#scroller11')

    if (document.querySelector('.section-gallery-card-controls')) {
        var scroller11controls = document.querySelector('.section-gallery-card-controls').children
        scroller11.addEventListener('scroll', () => {
            updateScrollerControls(scroller11, scroller11controls)
        })

        for (let i = 0; i < scroller11controls.length; i++) {
            scroller11controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller11, scroller11controls, i)
            })
        }
    }

    // scroller12 - lot at 370-something pixel

    const scroller12 = document.querySelector('#scroller12')

    if (document.querySelector('.section-lot-card-controls')) {

        var scroller12controls = document.querySelector('.section-lot-card-controls').children

        console.log(scroller12)

        scroller12.addEventListener('scroll', () => {
            updateScrollerControls(scroller12, scroller12controls)
        })

        for (let i = 0; i < scroller11controls.length; i++) {
            scroller11controls[i].addEventListener('click', () => {
                clickScrollerControls(scroller12, scroller12controls, i)
            })
        }
    }





    // FORM

    // hide label if input value =/= empty

    const formLabels = document.querySelectorAll('.form-label')
    const formInputs = document.querySelectorAll('.form-input')

    for (let i = 0; i < formInputs.length; i++) {

        formInputs[i].addEventListener('focusout', () => {
            if (formInputs[i].value) {
                formLabels[i].style.opacity = '0'
            } else formLabels[i].style.opacity = '1'
        })

    }


    // DRAGSCROLL FIX FOR INLINE SPAN

    const allScrolls = document.querySelectorAll('.snaps-inline')
    let isMouseDown = false

    for (let i = 0; i < allScrolls.length; i++) {
        allScrolls[i].addEventListener('mousedown', () => {
            allScrolls[i].classList.remove('snaps-inline')
            allScrolls[i].style.cursor = 'grabbing'
            isMouseDown = true
        })

        allScrolls[i].addEventListener('mouseleave', () => {
            allScrolls[i].style.cursor = 'grab'
            scrollAndSnap(allScrolls[i])
            isMouseDown = false
        })

        allScrolls[i].addEventListener('mouseup', () => {
            allScrolls[i].style.cursor = 'grab'
            scrollAndSnap(allScrolls[i])

            isMouseDown = false

        })

    }

    function scrollAndSnap(element) {

        // privet ya rostislav i ya izobretal snaps-inline zanogo 2 chasa
        let scrollGap = window.getComputedStyle(element).rowGap
        element.scrollTo({
            left: Math.round(element.scrollLeft / element.firstElementChild.offsetWidth) * element.firstElementChild.offsetWidth + Math.round(element.scrollLeft / element.firstElementChild.offsetWidth) * parseInt(scrollGap) - 1,
            behavior: 'smooth'
        })
        setTimeout(function () {
            if (!isMouseDown) {
                element.classList.add('snaps-inline')
            }
        }, 250)
    }

    // close mobile menu on item click

    if (document.querySelector('.nav-mobile-list')) {
        var mobileNavList = document.querySelector('.nav-mobile-list').children

        var mobileToggleChb = document.getElementById('header-menu-checkbox')

        for (let i = 0; i < mobileNavList.length; i++) {

            mobileNavList[i].addEventListener('click', () => {
                if (mobileToggleChb.checked) {
                    mobileToggleChb.checked = false
                }
            })

        }
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

$('#togg-infban').click(function () {
    $('#toggl-cont').slideToggle(500)

    if (scalecount == 1) {
        scalecount = -1;
        $('#imgban-ipot').css("transform", "scaleY(" + scalecount + ")")

    }
    else {
        scalecount = 1;
        $('#imgban-ipot').css("transform", "scaleY(" + scalecount + ")");

    }
})

//button up

const mybutton = document.getElementById("topbutton");

if (mybutton) {
    window.onscroll = function () { scrollFunction() };
}



function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && window.innerWidth > 200) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none"
    }
}

function topscroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}