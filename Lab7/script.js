document.getElementById("home").addEventListener("click", showHome);
document.getElementById("catalog").addEventListener("click", loadCategories);

function showHome() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <h2>Ласкаво просимо до каталогу!</h2>
    <p>Натисніть «Каталог», щоб переглянути доступні категорії товарів.</p>
  `;
}

function loadCategories() {
  fetch('data/categories.json')
    .then(res => res.json())
    .then(data => {
      const content = document.getElementById('content');
      content.innerHTML = '<h2>Категорії</h2>';

      const container = document.createElement('div');
      container.className = 'category-container';

      data.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => loadItems(cat.shortname);

        card.innerHTML = `
          <img src="https://place-hold.it/150x150" alt="${cat.name}" />
          <h3>${cat.name}</h3>
          <p>${cat.notes || 'Опис відсутній.'}</p>
        `;
        container.appendChild(card);
      });

      const specialsCard = document.createElement('div');
      specialsCard.className = 'category-card';
      specialsCard.onclick = () => {
        const random = data[Math.floor(Math.random() * data.length)];
        loadItems(random.shortname);
      };

      specialsCard.innerHTML = `
        <img src="https://place-hold.it/150x150" alt="Specials" />
        <h3>Specials</h3>
        <p>Переглянути випадкову категорію</p>
      `;

      container.appendChild(specialsCard);

      content.appendChild(container);
    });
}

function loadItems(category) {
  fetch(`data/${category}.json`)
    .then(res => res.json())
    .then(data => {
      const content = document.getElementById('content');
      content.innerHTML = `<h2>${data.category}</h2>`;

      const container = document.createElement('div');
      container.className = 'items-container';

      data.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.innerHTML = `
          <img src="https://place-hold.it/150x150" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <strong>${item.price}</strong>
        `;
        container.appendChild(div);
      });

      content.appendChild(container);
    });
}
