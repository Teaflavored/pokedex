Pokedex.RootView.prototype.addToyToList = function (toy, pokemon) {
  var toyString =  "<li class=\"poke-list-item\" data-toy-id=\"" + toy.id + "\" data-pokemon-id=\"" + pokemon.id + "\">";
  toyString += "name: " + toy.escape("name") + "<br>happiness: " + toy.escape("happiness") + "<br>price: " + toy.escape("price")
  this.$pokeDetail.find("ul.toys").append(toyString)
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  var $div = $("<div>")
  $div.addClass("detail");
  var imageString = "<img src=" + toy.escape("image_url") + ">";
  $div.append(imageString);
  $div.append("<h3>Toy Detail</h3>");
  for (var attribute in toy.attributes) {
    if (attribute !== "image_url" && attribute !== "toy") {
      var attributeString = attribute + ": " + toy.escape(attribute) + "<br>"
      $div.append(attributeString);
    } 
  }
  this.$toyDetail.html($div)   
};



Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var $li = $(event.currentTarget);
  var pokeId = $li.data("pokemon-id");
  var toyId = $li.data("toy-id");
  var toy = this.pokes.get(pokeId).toys().get(toyId);
  this.renderToyDetail(toy);
};
