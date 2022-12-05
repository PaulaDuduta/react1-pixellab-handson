export const render = (pet) => {
  const { name, species, age } = pet;

  const container = document.createElement('article');
  container.classList.add('pet', 'mt-3');

  container.innerHTML = `
  <h1>${name}</h1>
  <ul>
  <li>Age: ${age}</li>
  <li>Species: ${species}</li>
  </ul>

  <button title="Delete" class="btn btn-secondary" type="button">Delete</button>
<button title="Edit" class="btn btn-secondary mx-2" type="button">Edit</button>
  `;

  return container;
};
