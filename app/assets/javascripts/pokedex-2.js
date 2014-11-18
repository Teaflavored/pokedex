Pokedex.RootView.prototype.addToyToList = function (toy) {
  var toyString =  "<li class=\"poke-list-item\" data-toy-id=\"" + toy.id + "\" data-pokemon-id=\"" + toy.escape("pokemon_id") + "\">";
  toyString += "name: " + toy.escape("name") + "<br>happiness: " + toy.escape("happiness") + "<br>price: " + toy.escape("price")
  this.$pokeDetail.find("ul.toys").append(toyString)
};

Pokedex.RootView.prototype.renderToyDetail = function (toy) {
  
  var scriptContent = $("script#toy-detail-template").html()
  var templateFn = _.template(scriptContent);
  var contentToPlace = templateFn({toy: toy})
  
  this.$toyDetail.html(contentToPlace)
  var selectString = "<select data-pokemon-id=\"" + toy.escape("pokemon_id") + "\" data-toy-id=\"" + toy.id + "\">"
  this.pokes.each(function(pokemon){
    
    selectString += "<option value=\"" + pokemon.id + "\" "
    if (pokemon.id == toy.escape("pokemon_id")){
      selectString += "selected"
    }
    selectString += ">" + pokemon.escape("name") + "</option>"
  })
  selectString += "</select>"
  this.$toyDetail.append(selectString)   
};



Pokedex.RootView.prototype.selectToyFromList = function (event) {
  var $li = $(event.currentTarget);
  var pokeId = $li.data("pokemon-id");
  var toyId = $li.data("toy-id");
  var toy = this.pokes.get(pokeId).toys().get(toyId);
  this.renderToyDetail(toy);
};
