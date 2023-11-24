document.addEventListener('DOMContentLoaded', ()=>{

       // SCROLLERS

    // scroller - элемент который скролится с классами horizontal-scroller, snaps-inline
    // controls - массив с кнопками для управления данного скрола

    function updateScrollerControls(scroller, controls) {
        currentScroll = parseInt((scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth) - 0.01) * controls.length)
        for (let i = 0; i < controls.length; i++) {
            // controls[i].classList.remove('current-scroll')
        }
        // controls[currentScroll].classList.add('current-scroll')
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

    const sliderPres = document.querySelector('#sliderPresentation')
    var marginRight = parseInt(window.getComputedStyle(sliderPres.children[0]).marginRight)
    var itemWidth = parseInt(sliderPres.children[0].clientWidth) + (parseInt(marginRight)*2)
    var sliderWidth = (itemWidth * sliderPres.childElementCount)
    var scrollerStartPos = ((itemWidth) * 3 + marginRight)

    function handleResize() {
        if(window.innerWidth > 1024) {
            marginRight = parseInt(window.getComputedStyle(sliderPres.children[0]).marginRight)
        } else {
            marginRight = 0
        }
        var itemWidth = parseInt(sliderPres.children[0].clientWidth) + (parseInt(marginRight)*2)
        sliderWidth = (itemWidth * sliderPres.childElementCount)
        console.log()
    }

    

    if(sliderPres) {
        // scroll 3 img at page
        sliderPres.scrollLeft += scrollerStartPos 
        // listen for viewport to remove margin at 1024px
        window.addEventListener('resize', handleResize)
        //  scroll opposite side on reaching start/end
        sliderPres.addEventListener('scroll', function(){
            if(sliderPres.scrollLeft === 0) {
                sliderPres.scrollLeft = sliderWidth - (itemWidth * 6)
            }
            if(sliderPres.scrollLeft > (sliderWidth - sliderPres.clientWidth) - 1) {
                // sliderPres.scrollLeft = scrollerStartPos
                sliderPres.scrollLeft = sliderPres.scrollLeft - (itemWidth * 6)
            }
        })
 
    }

    // controls 

    const scrollerPrevBtn = document.querySelector('#slider-prev-btn')
    const scrollerNextBtn = document.querySelector('#slider-next-btn')
    let newScrollPos = 0

    scrollerPrevBtn.addEventListener('click', function() {

        if(sliderPres.scrollLeft < 600) {
            newScrollPos = 0
        } else {
            newScrollPos = sliderPres.scrollLeft - itemWidth
        }

        sliderPres.scrollTo({
            left: newScrollPos,
            behavior: 'smooth'
        })
    })

    scrollerNextBtn.addEventListener('click', function() {
        if(sliderPres.scrollLeft > (sliderWidth - sliderPres.clientWidth - 600)) {
            newScrollPos = (sliderWidth - sliderPres.clientWidth)
        } else {
            newScrollPos = sliderPres.scrollLeft + itemWidth
        }
        
        sliderPres.scrollTo({
            left: newScrollPos,
            behavior: 'smooth'
        })
    })

    // inline snapping

    // let isGrabbing = false

    // sliderPres.addEventListener('mousedown', function(){
    //     sliderPres.style.cursor = 'grabbing'
    //     isGrabbing = true
    // })

    // window.addEventListener('mouseup', function(){
    //     if(isGrabbing) {
    //         isGrabbing = false
    //         sliderPres.style.scrollSnapType = 'x mandatory'
    //         sliderPres.style.scrollBehavior = 'smooth'
    //         sliderPres.style.cursor = 'grab'
    //         this.setTimeout(()=>{
    //             sliderPres.style.scrollSnapType = 'none'
    //             sliderPres.style.scrollBehavior = 'auto'
    //             console.log('250')
    //         },500)
    //     }
        
    // })
})
