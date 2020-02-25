console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(resp => resp.json())
.then(json => renderImages(json));

document.addEventListener("DOMContentLoaded", function() {
  dropDown();
});

function renderImages(json) {
  json['message'].forEach(dogImg => {
    let img = document.createElement('img');
    img.src = dogImg;
    document.getElementById("dog-image-container").appendChild(img);
  })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(resp => resp.json())
.then(json => renderBreeds(json));

function renderBreeds(json) {
  Object.keys(json.message).forEach(breed => {
    let li = document.createElement('LI');
    li.innerText = breed;
    document.getElementById("dog-breeds").appendChild(li);
  })
  colorBreeds();
}

function colorBreeds() {
  let breeds = document.getElementById("dog-breeds").querySelectorAll("li");
  breeds.forEach(breed => {
    breed.addEventListener("click", function() {
      breed.style = "color:blue"
    });
  })
}

function dropDown() {
  let breeds = document.getElementById("dog-breeds").querySelectorAll("li");
  debugger
  document.getElementById("breed-dropdown").addEventListener("change", function() {
    breeds.forEach(breed => {
      if (breed.innerText[0] !== document.getElementById("breed-dropdown").value) {
        breed.style.display = "none"
      }
    });
  });
}