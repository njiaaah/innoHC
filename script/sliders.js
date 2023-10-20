document.addEventListener('DOMContentLoaded', ()=>{

    // 1 

    var sectionFilterPriceSlider01 = document.getElementById('sectionFilterPriceSlider01')
    var sectionFilterPriceSlider01Values = [
      document.getElementById('sectionFilterPriceSlider01-lower'),
      document.getElementById('sectionFilterPriceSlider01-upper')
    ]

    if(sectionFilterPriceSlider01) {
      noUiSlider.create(sectionFilterPriceSlider01, {
        start: [5000000, 20500000],
        connect: true,
        behaviour: "drag",
        step: 10000,
        range: {
          min: 1000000,
          max: 40000000
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value)
          }
        }
      })
  
      sectionFilterPriceSlider01.noUiSlider.on('update', function(values, handle){
        sectionFilterPriceSlider01Values[handle].innerHTML = values[handle].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      })
    }
    
    // 2

    var sectionFilterSquareSlider02 = document.getElementById('sectionFilterSquareSlider02')
    var sectionFilterSquareSlider02Values = [
      document.getElementById('sectionFilterSquareSlider02-lower'),
      document.getElementById('sectionFilterSquareSlider02-upper')
    ]

    if(sectionFilterSquareSlider02) {
      noUiSlider.create(sectionFilterSquareSlider02, {
        start: [30, 150],
        connect: true,
        behaviour: "drag",
        step: 1,
        range: {
          min: 20,
          max: 300
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value)
          }
        }
      })
  
      sectionFilterSquareSlider02.noUiSlider.on('update', function(values, handle){
        sectionFilterSquareSlider02Values[handle].innerHTML = values[handle].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      })
    }

    // 3

    var sectionFilterFloorSlider03 = document.getElementById('sectionFilterFloorSlider03')
    var sectionFilterFloorSlider03Values = [
      document.getElementById('sectionFilterFloorSlider03-lower'),
      document.getElementById('sectionFilterFloorSlider03-upper')
    ]

    if(sectionFilterFloorSlider03) {
      noUiSlider.create(sectionFilterFloorSlider03, {
        start: [2, 28],
        connect: true,
        behaviour: "drag",
        step: 1,
        range: {
          min: 1,
          max: 50
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value)
          }
        }
      })
  
      sectionFilterFloorSlider03.noUiSlider.on('update', function(values, handle){
        sectionFilterFloorSlider03Values[handle].innerHTML = values[handle].toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      })
    }

})