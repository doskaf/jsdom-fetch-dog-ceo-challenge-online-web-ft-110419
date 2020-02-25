console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then(resp => resp.json())
.then(json => renderImages(json));

function renderImages(json) {
  json['message'].forEach(dogImg => {
    let img = document.createElement('img');
    img.src = dogImg;
    document.getElementById("dog-image-container").appendChild(img);
  })
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedURL)
.then(resp => resp.json())
.then(json => renderBreeds(json));

function renderBreeds(json) {
  // Object.keys(json.message).forEach(breed => {
  //   let li = document.createElement('LI');
  //   li.innerText = breed;
  //   document.getElementById("dog-breeds").appendChild(li);
  // })
  console.log("hello");
}