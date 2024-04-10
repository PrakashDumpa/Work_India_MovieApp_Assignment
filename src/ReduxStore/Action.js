export const searchFunction = (searchInput) => {
  return { type: "search", payload: { searchTitle: searchInput } };
};

export const pageFunction = (page) => {
  return { type: "page", payload: { pageNo: page } };
};
