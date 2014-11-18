Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon){ 
  var $div = $("<div>")
  $div.addClass("detail");
  var imageString = "<img src=" + pokemon.escape("image_url") + ">";
  $div.append(imageString);
  $div.append("<h3>Pokemon Details</h3>");
  for (var attribute in pokemon.attributes) {
    if (attribute !== "image_url" && attribute !== "pokemon") {
      var attributeString = attribute + ": " + pokemon.escape(attribute) + "<br>"
      $div.append(attributeString);
    } 
  }
  var $ul = $("<ul class=\"toys\">")
  this.$pokeDetail.html($div)
  this.$pokeDetail.append($ul)
      
  pokemon.fetch({
    success: function(){
      this.renderToysList(pokemon.toys());
    }.bind(this)
  })
};

Pokedex.RootView.prototype.selectPokemonFromList = function (event) {
  var $li = $(event.currentTarget);
  var pokeId = $li.data("id");
  var pokemon = this.pokes.get(pokeId);
  this.renderPokemonDetail(pokemon);
};
