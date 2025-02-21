let treasures;

async function renderTreasures(filter) {
  const treasuresWrapper = document.querySelector('.treasures');

  treasuresWrapper.classList += ' treasures__loading'
  
  if (!treasures) {
    treasures = await getTreasures();  
  }
  
  treasuresWrapper.classList.remove('treasures__loading')

  if (filter === 'LOW_TO_HIGH') {
    treasures.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
  }
  else if (filter === 'HIGH_TO_LOW') {
    treasures.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
  }



  const treasuresHtml = treasures.map((treasures) => {
    return  `<div class="treasure">
    <figure class="treasure__img--wrapper">
      <img class="treasure__img" src="${treasures.url}" alt="">
      </figure>
      <div class="treasure__title">
        ${treasures.title}
      </div>
      <div class="treasure__price">
        ${priceHTML(treasures.originalPrice, treasures.salePrice)}
      </div>
  </div>`
  }).join("")

treasuresWrapper.innerHTML = treasuresHtml;
}

function priceHTML(originalPrice, salePrice) {
  if (!salePrice) {
    return `$${originalPrice.toFixed(2)}`
  }
    return `<span class="treasure__price--full">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`
}

function filterTreasures(event){
    renderTreasures(event.target.value);
}

setTimeout(() => {
  renderTreasures();
});

// FAKE DATA
function getTreasures() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: "Tokyo Ghoul Volume 1",
          url: "assets/tokyo_ghoul1.jpg",
          originalPrice: 14.95,
          salePrice: 9.95,
        },
        {
          id: 2,
          title: "Tokyo Ghoul Volume 2",
          url: "assets/tokyo_ghoul2.jpg",
          originalPrice: 14.95,
          salePrice: 9.95,
        },
        {
          id: 3,
          title: "Tokyo Ghoul Volume 3",
          url: "assets/tokyo_ghoul3.jpg",
          originalPrice: 19.95,
          salePrice: 11.95,
        },
        {
          id: 4,
          title: "Tokyo Ghoul Volume 4",
          url: "assets/tokyo_ghoul4.jpg",
          originalPrice: 19.95,
          salePrice: 11.95,
        },
        {
          id: 5,
          title: "Tokyo Ghoul Volume 5",
          url: "assets/tokyo_ghoul5.jpg",
          originalPrice: 19.95,
          salePrice: 11.95,
        },
        {
          id: 6,
          title: "Tokyo Ghoul Volume 6",
          url: "assets/tokyo_ghoul6.jpg",
          originalPrice: 19.95,
          salePrice: 11.95,
        },
        {
          id: 7,
          title: "Tokyo Ghoul Volume 7",
          url: "assets/tokyo_ghoul7.jpg",
          originalPrice: 19.95,
          salePrice: 13.95,
        },
        {
          id: 8,
          title: "Tokyo Ghoul Volume 8",
          url: "assets/tokyo_ghoul8.jpg",
          originalPrice: 19.95,
          salePrice: 13.95,
        },
        {
          id: 9,
          title: "Tokyo Ghoul Volume 9",
          url: "assets/tokyo_ghoul9.jpg",
          originalPrice: 19.95,
          salePrice: 13.95,
        },
        {
          id: 10,
          title: "Tokyo Ghoul Volume 10",
          url: "assets/tokyo_ghoul10.jpg",
          originalPrice: 19.95,
          salePrice: 13.95,        
        },
        {
          id: 11,
          title: "Tokyo Ghoul Volume 11",
          url: "assets/tokyo_ghoul11.jpg",
          originalPrice: 19.95,
          salePrice: 13.95,
        },
        {
          id: 12,
          title: "Tokyo Ghoul Volume 12",
          url: "assets/tokyo_ghoul12.jpg",
          originalPrice: 24.95,
          salePrice: 19.95,
        },
        {
          id: 13,
          title: "Tokyo Ghoul Volume 13",
          url: "assets/tokyo_ghoul13.jpg",
          originalPrice: 24.95,
          salePrice: 19.95,
        },
        {
          id: 14,
          title: "Tokyo Ghoul Volume 14",
          url: "assets/tokyo_ghoul14.jpg",
          originalPrice: 24.95,
          salePrice: null,
        },
        {
        id: 15,
        title: "Dragon Ball Season 1",
        url: "assets/dragonball_season1.jpg",
        originalPrice: 29.95,
        salePrice: 19.95,
        },
        {
          id: 16,
          title: "Dragon Ball Season 2",
          url: "assets/dragonball_season2.jpg",
          originalPrice: 29.95,
          salePrice: 19.95,
        },
        {
          id: 17,
          title: "Dragon Ball Season 3",
          url: "assets/dragonball_season3.jpg",
          originalPrice: 29.95,
          salePrice: 19.95,
        },
        {
          id: 18,
          title: "Dragon Ball Season 4",
          url: "assets/dragonball_season4.jpg",
          originalPrice: 29.95,
          salePrice: 19.95,
        },
        {
          id: 19,
          title: "Dragon Ball Season 5",
          url: "assets/dragonball_season5.jpg",
          originalPrice: 29.95,
          salePrice: 19.95,
          },
      ]);
    }, 1000)
  })
}
