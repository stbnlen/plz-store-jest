const getData = (api) => {
  return global.fetch(api)
    .then(response => response.json())
    .then(response => response)
    .catch(error => error);
};

export default getData;
