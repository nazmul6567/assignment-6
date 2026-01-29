document.getElementById('btn-all-trees').addEventListener('click', e => {

  document.querySelectorAll('.active1').forEach(btn => {
    btn.classList.remove('active1')
  })

  e.target.classList.add('active1');
  // console.log(e.target);

  const url = 'https://openapi.programming-hero.com/api/plants';
  fetch(url)
    .then(res => res.json())
    .then(data => displayAllPlants(data.plants));
});

const loadAllPlants = () => {
  const url = 'https://openapi.programming-hero.com/api/plants';
  fetch(url)
    .then(res => res.json())
    .then(data => displayAllPlants(data.plants));
};

const loadAllCategories = () => {
  const url = 'https://openapi.programming-hero.com/api/categories';
  fetch(url)
    .then(res => res.json())
    .then(data => displayCategories(data.categories));
};

const loadPlantsByCategories = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`

  fetch(url)
    .then(res => res.json())
    .then(data => {

      const removeActive = document.querySelectorAll('.active1')
      // console.log(removeActive);
      removeActive.forEach(btn => {
        btn.classList.remove('active1')
      })

      const btnClick = document.getElementById(`${id}`)
      btnClick.classList.add('active1')

      displayPlantsByCategories(data.plants)
    })
}

const loadPlantsDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayPlantsDetails(data.plants))
}
/// / / / / / / / / / / / / / / / / / // / / / / / / / /

const displayPlantsDetails = (details) => {
  const getModal = document.getElementById('my_modal')
  const getDetails = document.getElementById('details-container')
  getDetails.innerHTML = `
              <h2 onclick="" class="font-bold text-2xl mb-1">${details.name}</h2>
              <img class="h-50 w-full object-cover rounded-lg" src="${details.image}" alt="">
              <p > <span class="font-bold">Category:</span> ${details.category}</p>
              <p><span class="font-bold">Price:</span> ৳${details.price}</p>
              
              <p class="flex-grow"><span class="font-bold">Description:</span> ${details.description}</p>
  `
  getModal.showModal()
}

const displayPlantsByCategories = (plants) => {
  // console.log(plants);
  const plantsContainer = document.getElementById('all-plants');
  plantsContainer.innerHTML = '';

  plants.forEach(p => {
    plantsContainer.innerHTML += `
      <div id="${plants.id}" class="px-3 py-2 rounded-lg bg-white shadow-lg flex flex-col h-full">
              <img class="h-60 w-full object-cover rounded-lg" src="${p.image}" alt="">
              <h2 onclick="loadPlantsDetails(${p.id})" class="font-semibold my-1">${p.name}</h2>
              <p class="text-sm flex-grow">${p.description}</p>
              <div class="flex justify-between items-center my-2">
                <div class="badge rounded-full bg-green-300 text-green-700">${p.category}</div>
                <p class="font-semibold text-sm py-1">৳<span>${p.price}</span></p>
              </div>
              <button class="bg-green-700 text-white px-1.5 py-2 lg:py-0.5 w-full rounded-full font-medium ">Add to Cart</button>
            </div>
    `
  })

}

const displayCategories = categories => {
  const categoryContainer = document.getElementById('categories');

  categories.forEach(category => {
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
      <div onclick="loadPlantsByCategories(${category.id})" id="${category.id}" class="p-2 cursor-pointer rounded hover:bg-green-500 hover:text-white">${category.category_name}
            </div>
    `;
    categoryContainer.append(btnDiv);
  });

  // categoryContainer.addEventListener('click', e => {
  //   e.target.classList
  // });
};

const displayAllPlants = allPlants => {
  const allPlantsContainer = document.getElementById('all-plants');
  allPlantsContainer.innerHTML=''

  allPlants.forEach(plants => {
    allPlantsContainer.innerHTML += `
            <div id="${plants.id}" class="px-3 py-2 rounded-lg bg-white shadow-lg flex flex-col h-full">
              <img class="h-60 w-full object-cover rounded-lg" src="${plants.image}" alt="">
              <h2 onclick="loadPlantsDetails(${plants.id})" class="font-semibold my-1">${plants.name}</h2>
              <p class="text-sm flex-grow">${plants.description}</p>
              <div class="flex justify-between items-center my-2">
                <div class="badge rounded-full bg-green-300 text-green-700">${plants.category}</div>
                <p class="font-semibold text-sm py-1">৳<span>${plants.price}</span></p>
              </div>
              <button class="bg-green-700 text-white px-1.5 py-2 lg:py-0.5 w-full rounded-full font-medium ">Add to Cart</button>
            </div>
        `;
  });
};

// loadAllPlants();
loadAllCategories();
