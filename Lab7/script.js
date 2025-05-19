document.getElementById("catalog").addEventListener("click", loadCategories);
document.getElementById("home").addEventListener("click", () => location.reload());

function loadCategories() {
  fetch('data/categories.json')
    .then(res => res.json())
    .then(data => {
      const content = document.getElementById('content');
      content.innerHTML = '<h2>Категорії</h2>';
      data.forEach(cat => {
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = cat.name;
        link.onclick = () => loadItems(cat.shortname);
        content.appendChild(link);
        content.appendChild(document.createElement('br'));
      });

      const specialLink = document.createElement('a');
      specialLink.href = '#';
      specialLink.textContent = "Specials";
      specialLink.onclick = () => {
        const random = data[Math.floor(Math.random() * data.length)];
        loadItems(random.shortname);
      };
      content.appendChild(document.createElement('br'));
      content.appendChild(specialLink);
    });
}

function loadItems(category) {
  fetch(`data/${category}.json`)
    .then(res => res.json())
    .then(data => {
      const content = document.getElementById('content');
      content.innerHTML = `<h2>${data.category}</h2>`;
      data.items.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
          <img src="https://place-hold.it/150x150" alt="${item.name}" />
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <strong>${item.price}</strong>
        `;
        content.appendChild(div);
      });
    });
}

