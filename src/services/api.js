export async function getCategories() {
  const URL_API = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(URL_API)
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const URL_API = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(URL_API)
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromItem(itemId) {
  const URL_API = `https://api.mercadolibre.com/items/${itemId}`;
  return fetch(URL_API)
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromHome() {
  const URL_API = 'https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY';
  return fetch(URL_API)
    .then((response) => response.json())
    .then((data) => data.results);
}
