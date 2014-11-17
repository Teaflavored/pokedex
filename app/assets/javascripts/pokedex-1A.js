Pokedex.RootView.prototype.addPokemonToList = function (pokemon) {
  var liString = "<li class=\"poke-list-item\" data-id=\"" + pokemon.id + "\">";
  liString += "name: " + pokemon.escape("name") + ", Poketype: " + pokemon.escape("poke_type");
  liString += "</li>";
  this.$pokeList.append(liString);
};

Pokedex.RootView.prototype.refreshPokemon = function (callback) {
  var that = this;
  this.pokes.fetch({
    success: function () {
      that.pokes.each(function(poke) {
        that.addPokemonToList(poke);
      })
    }
  });
};
