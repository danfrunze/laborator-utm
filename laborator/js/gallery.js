let list = document.querySelector('.flex-container')
let list_items = [
    {
        name: 'new-york',
        mayor: 'Eric Adams Trending',
        area: '784',
        found: '1624',
        pop: ' 8'
    },
    {
        name: 'sydney',
        mayor: 'Clover Moore',
        area: '12144',
        found: '1788',
        pop: '4'
    },
    {
        name: 'london',
        mayor: 'Sadiq Khan',
        area: '1572',
        found: '47',
        pop: '8'
    },
];



let option;

function display_list(array = []){
    list.innerHTML = "";
    for(let i = 0; i < array.length; i++){
        let item = array[i];

        let item_element = document.createElement('div');
        item_element.classList.add('rectangle-country', `${item.name}`, 'active');

        let effect = document.createElement('div');
        effect.classList.add('blur');

        let title = document.createElement('h2');
        title.innerHTML = item.name;

        let data = document.createElement('ul');

        let mayor = document.createElement('li');
        mayor.innerHTML = `Mayor: ${item.mayor}`;

        let area = document.createElement('li');
        area.innerHTML = `Area: ${item.area} km`

        let foundation = document.createElement('li');
        foundation.innerHTML = `Establishment: ${item.area}`;

        let population = document.createElement('li');
        population.innerHTML = `Population: ${item.pop}`;

        data.appendChild(mayor);
        data.appendChild(area);
        data.appendChild(foundation);
        data.appendChild(population);


        effect.appendChild(title);
        effect.appendChild(data);
        item_element.appendChild(effect);


        list.appendChild(item_element);
    }
}

display_list(list_items);

let sort_area = document.querySelector('.sort-area');
sort_area.addEventListener('click', ()=>{
    option = ['area'];
    sort_list();
    display_list(list_items);
})

let sort_found = document.querySelector('.sort-year');
sort_found.addEventListener('click', ()=>{
    option = ['found'];
    sort_list();
    display_list(list_items);
})

let sort_pop = document.querySelector('.sort-pop');
sort_pop.addEventListener('click', ()=>{
    option = ['pop'];
    sort_list();
    display_list(list_items);
})

function sort_list(){

    for(let i = 0; i < list_items.length; i++){
        for(let j = 0; j < list_items.length - 1; j++){
            if(list_items[j][option] > list_items[j + 1][option]){
                let temp = list_items[j];
                list_items[j] = list_items[j + 1];
                list_items[j + 1] = temp;
            }
        }

    }
}


const slides = document.querySelectorAll('.rectangle-country')
console.log(slides);
for (const slide of slides){
    slide.addEventListener('mouseover', () => {
        clearActiveSlides();
        slide.classList.add('active');
    })
}

function clearActiveSlides(){
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
}

const nxtBtn = document.querySelector('.nxtBtn');
nxtBtn.addEventListener('click', () =>{
    plusSlides(-1);
});

const prevBtn = document.querySelector('.prevBtn');
prevBtn.addEventListener('click', () =>{
    plusSlides(1);
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sliderObj");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-slide", "");
    }
    slides[slideIndex-1].style.display = "block";
}