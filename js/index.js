//MODAL
let open_btns = document.querySelectorAll('button[data-modal]')
let dialog = document.querySelector('.modal')
let close = document.querySelector('[data-close]')

open_btns.forEach(btn => {
    btn.onclick = () => {
        dialog.classList.add('show', 'fade')
    }

    close.onclick = () => {
        dialog.classList.remove('show')
    }
})

//PHOTOS
let slides = document.querySelectorAll('.offer__slide')
let next = document.querySelector('.offer__slider-next')
let prev = document.querySelector('.offer__slider-prev')
let current = document.querySelector('#current')
let total = document.querySelector('#total')

if (slides.length < 10) {
    total.innerHTML = '0' + slides.length
} else {
    total.innerHTML = slides.length
}

let slideidx = 0

slideshow(slideidx)

function slideshow(n) {
    if (n === slides.length) {
        slideidx = 0
    }

    if (n < 0) {
        slideidx = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideidx].classList.remove('hide')

}


next.onclick = () => {
    slideidx++
    slideshow(slideidx)
    let current_2 = (slideidx + 1)
    if (current_2 < 10) {
        current.innerHTML = '0' + current_2
    } else {
        current.innerHTML = current_2
    }
}

prev.onclick = () => {
    slideidx--
    slideshow(slideidx)
    let current_2 = (slideidx + 1)
    if (current_2 < 10) {
        current.innerHTML = '0' + current_2
    } else {
        current.innerHTML = current_2
    }
}

//INFO
// let contents = document.querySelectorAll('.tabcontent')
// let tab_items = document.querySelectorAll('.tabheader__item')

// let contentidx = 0

// tab(contentidx)

// function tab(n) {

//     if (n === contents.length) {
//         contentidx = 0
//     }

//     tab_items.forEach((tab_item) => {
//         tab_item.onclick = () => {
//             tab_items.forEach(tab_item => tab_item.classList.remove('tabheader__item_active')); 
//             tab_item.classList.add('tabheader__item_active')
//             contentidx++
//             tab(contentidx)
//         }
//     })

//     contents.forEach(content => content.classList.add('hide', 'fade'))
//     contents[contentidx].classList.remove('hide')
// }


//RASCHET KKAL
let user_data = {
    gender: "woman"
}

let gender_btns = document.querySelectorAll('[data-gender]')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actions = document.querySelectorAll('.calculating__choose_big div')
let result_view = document.querySelector('#result')

gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        let g = btn.dataset.gender
        user_data["gender"] = g

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        user_data[inp.id] = inp.value
    }
})

let previous = 1

actions.forEach((div, idx) => {
    div.onclick = () => {
        actions[previous].classList.remove('calculating__choose-item_active')
        div.classList.add('calculating__choose-item_active')
        previous = idx

        let cft = +div.dataset.cft

        if (user_data['gender'] === 'woman') {
            let result = (655.1 + (9.563 * user_data['weight']) + (1.85 * user_data['height']) - (4.676 * user_data['age'])) * cft
            result_view.innerHTML = Math.round(result)
        } else {
            let result = (66.5 + (13.75 * user_data['weight']) + (5.003 * user_data['weight']) - (6.775 * user_data['age'])) * cft
            result_view.innerHTML = Math.round(result)
        }

    }
})

// Для женщин: 655,1 + (9,563 × вес в кг) + (1,85 × рост в см) - (4,676 × возраст в годах);
// Для мужчин: 66,5 + (13,75 × вес в кг) + (5,003 × рост в см) - (6,775 × возраст в годах).

//CALCULATING
let minutes = document.querySelector('#minutes')
let seconds = document.querySelector('#seconds')
let finish = false
let confetti = document.querySelector('#confetti')
let js_confetti = new JSConfetti()

let min = minutes.innerHTML
let sec = seconds.innerHTML

// let met = min.innerHTML
// let ext = sec.innerHTML

// let timer = setInterval(() => {
//     ext--

//     if(ext === 0){
//         met -= 1
//         ext = 60
//     }

//     if(met === 0){
//         met = '00'
//         ext = '00'
//         clearInterval(timer)
//     }

//     if (ext < 10 && ext > -1) {
//         sec.innerHTML = '0' + ext
//     }

//     min.innerHTML = met
//     sec.innerHTML = ext
//     console.log(ext);
// }, 1000);

function timer() {
    // ext--

    // if (ext < 10 && ext > -1) {
    //     sec.innerHTML = '0' + ext
    // }

    // if (met < 10 && met > -1) {
    //     min.innerHTML = '0' + met
    // }

    // if(ext === 0){
    //     met -= 1
    //     ext = 60
    // }

    // if(met === 0){
    //     met = '00'
    //     ext = '00'
    //     clearInterval(timer)
    // }

    // min.innerHTML = met
    // sec.innerHTML = ext
    // console.log(ext);

    if (sec > 0) {
        sec--;
        if (sec < 10) {
            sec = '0' + sec;
        }
    } else {
        sec = 60;

        if (min > 0) {
            min--;
            if (min < 10) {
                min = '0' + min;
            }
        } else {
            finish = true;
        }
    }

    if (finish) {
        clearInterval(time);
        js_confetti.addConfetti()
    } else {
        minutes.innerHTML = min;
        seconds.innerHTML = sec;
    }
}

let time = setInterval(timer, 1000)

//INFO_2
let contents = document.querySelectorAll('.tabcontent')
let texts = document.querySelectorAll('.tabheader__item')

let cidx = 0

tab(cidx)

function tab(n) {

    // if (n === contents.length) {
    //     cidx = 0
    // }

    contents.forEach(content => content.classList.add('hide', 'fade'))
    contents[n].classList.remove('hide')
    texts.forEach(text => text.classList.remove('tabheader__item_active'))
    texts[n].classList.add('tabheader__item_active')
}

texts.forEach((text, idx) => {
    text.onclick = () => {
        texts.forEach(text => {
            text.classList.remove('tabheader__item_active')
            contents.forEach(content => content.classList.add('hide', 'fade'))
        });

        text.classList.add('tabheader__item_active')
        contents[idx].classList.remove('hide')
        // idx++
        tab(idx)
    }
})