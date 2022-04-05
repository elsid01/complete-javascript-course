'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function(country){
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// request.addEventListener('load', function(){

// const [data] = JSON.parse(this.responseText);
// console.log(data)
//   const html = `
//   <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name[0]}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>
//        ${data.languages.name} </p>
//       <p class="country__row"><span>💰</span>${data.currencies.name} </p>
//     </div>
//   </article>
// `;
//  countriesContainer.insertAdjacentHTML('beforeend', html);
//  countriesContainer.style.opacity = 1;
// }) 
// }

const renderCountry = function(data){
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name[0]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>
         ${data.languages.name} </p>
        <p class="country__row"><span>💰</span>${data.currencies.name} </p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

const getCountryAndNeibor = function(country){
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  
  request.addEventListener('load', function(){
  
  const [data] = JSON.parse(this.responseText);
  renderCountry(data);

  });
}

getCountryAndNeibor('portigal')