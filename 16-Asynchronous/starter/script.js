'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className =''){
  const html = `
  <article class="country ${className}">
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
  // countriesContainer.style.opacity = 1;
}

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
}

const getJSON = function(url, errorMsg = 'Something went wrong'){
  return fetch(url).then(response => {
     if(!response.ok)
     throw new Error(`${errorMsg} (${response.status})`)
     return response.json();
   })
 }
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



// const getCountryAndNeibor = function(country){
  
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
  
//   request.addEventListener('load', function(){
  
//   const [data] = JSON.parse(this.responseText);
//   console.log(data);
//   //Render country 1
//   renderCountry(data);

//   //Get neighbour country (2)
//   const [neighbour] = data.borders;

//   if(!neighbour) return;

//   // AJAX call country 2
//   const request2 = new XMLHttpRequest();
//   request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//   request2.send();

//   request2.addEventListener('load', function(){
//     const data2 = JSON.parse(this.responseText)
    
//     renderCountry(data2 , 'neighbour');
//   })

//   });
// }

// getCountryAndNeibor('portugal')



// const getCountryData = function(country){
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response){
    
//     return response.json();
//   }).then(function(data){
//     renderCountry(data[0]);
//   })
// }






// const getCountryData = function(country){
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//   .then(data =>{
//     renderCountry(data[0]);

//     const neighbour = data[0].borders[0];

//     if(!neighbour) throw new Error('No neighbour found');

//     // country w
//     return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Neighbour not found');
//   })
//   .then(data => renderCountry(data, 'neighbour'))
//   .catch(err =>{ 
//     console.error(`${err} 🔥 🔥 🔥`)
//     renderError(`something went wrong 🔥 🔥 ${err.message}. Try again1`)
//   })
//   .finally(() =>{
//     countriesContainer.style.opacity = 1;
//   })
// }

// btn.addEventListener('click', function(){
//   getCountryData('portugal');

// })


// Coding challenge #1

// Part 1

// const whereAmI = function(lat, lng){
 
//   fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
//     .then((response) =>{
//       if(!response.ok)
//        throw new Error(`problem with Geocoding ${response.status}`)
//      return response.json();
//   }).then(data => console.log(`You are in ${data.city}, ${data.country}`))
//     .catch(err => console.error(`${err.message} 🔥`) )
//     .finally(() =>{
//       countriesContainer.style.opacity = 1;
//     })

// }




// whereAmI(52.508, 13.381);

// const imgContainer = document.querySelector('.images');

// const createImage = function(imgPath){
//   return new Promise(function(resolve, reject){
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function(){
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function(){
//       reject(new Error('Image not found'));
//     })
//   })
// }

// const getPosition = function(){
//   return new Promise(function(resolve, reject){
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   })
// }

// const whereAmI = async function(){
// try{
// // Geolocation
// const pos = await getPosition();
// const {latitude: lat, longitude: lng} = pos.coords;

// // Reverse geocoding
// const resGeo = await fetch(`https://geocode.xyz/${lat}, ${lng}?geoit=json`);
// if(!resGeo.ok) throw new Error('Problem getting location data');

// const dataGeo = await resGeo.json();
// // Country data
// const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
// if(!res.ok) throw new Error('Problem getting Country');

// const data = await res.json();

// renderCountry(data[0]);
// }catch(err){
//   renderError(`💥 ${err.message}`)
// }
// }

// whereAmI();


// const get3Contries = async function(c1, c2, c3){
//   try {
//     // const  [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

//     const data = await Promise.all
//     ([await getJSON(`https://restcountries.com/v3.1/name/${c1}`)
//     ,await getJSON(`https://restcountries.com/v3.1/name/${c2}`)
//     ,await getJSON(`https://restcountries.com/v3.1/name/${c3}`)])

//     console.log(data.map(country => country[0].capital));
//   } catch (error) {
//     console.error(error)
//   }
// }

// get3Contries('gabon', 'senegal', 'tanzania');


// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),

// ]).then(res => console.log(res))
//  .catch(err => console.error(err));


const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
  return new Promise(function(resolve, reject){
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function(){
      imgContainer.append(img);
      resolve(img);
    });
  });
};

let currentImg; 

createImage('img/img-1.jpg').then(img => {
  currentImg = img;
  console.log('Image 1 loaded');
  return wait(2);
}).then(() => {
  currentImg.style.display = 'none';
  return createImage(('img/img-2.jpg'));
}).then(img => {
  currentImg = img;
})

