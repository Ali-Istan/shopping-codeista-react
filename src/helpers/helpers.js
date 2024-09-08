const ShortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
  return searchedProducts;
};

const filterProduct = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.catergories === "all") {
    const { catergories, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }

  return {
    ...currentQuery,
    ...newQuery,
  };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("catergories");
  const search = searchParams.get("search");
  if (category) {
    query.catergories = category;
  }
  if (search) {
    query.search = search;
  }

  return query;
};

const sumPrice = (items) => {
  return items
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
};

const sumQuantity = (items) => {
  return items.reduce((acc, cur) => acc + cur.quantity, 0);
};

const sumProducts = (item) => {
  const total = item
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  const itemCounter = item.reduce((acc, cur) => acc + cur.quantity, 0);

  return { itemCounter, total };
};

const productsQuantity = (state, id) => {
  const inedx = state.selectedItems.findIndex((item) => item.id === id);
  if (inedx === -1) {
    return 0;
  } else {
    return state.selectedItems[inedx].quantity;
  }
};

export {
  ShortenText,
  searchProducts,
  filterProduct,
  createQueryObject,
  getInitialQuery,
  sumQuantity,
  sumPrice,
  sumProducts,
  productsQuantity,
};
