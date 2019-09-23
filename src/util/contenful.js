const contentful = require("contentful");

const client = contentful.createClient({
  space: "wdg89rpqhpev",
  accessToken: "4NdEMIEctHC8ORP-VbjqD4P51Wn9AV7YCbnllZTQszE",
  environment: 'master'
});

function getRecipes(category) {
    var query = {'content_type': 'recipe'};
    if (category) {
      const upperCased = category.replace(/^\w/, c => c.toUpperCase());
      query['fields.type'] = upperCased;
    }
    return client.getEntries(query);
}

function getRecipe(id) {
  var query = {'content_type': 'recipe'};
  if (id) {
    query['sys.id'] = id;
  }
  return client.getEntries(query);
}

export { getRecipes };
export { getRecipe };