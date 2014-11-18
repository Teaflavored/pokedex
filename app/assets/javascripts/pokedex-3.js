window.Pokedex.RootView.prototype.reassignToy = function(event){
  var $select = $(event.currentTarget);
  var oldPokeId = $select.data("pokemon-id");
  var newPokeId = $select.val();
  var toyId = $select.data("toy-id");
  var oldPokemon = this.pokes.get(oldPokeId)
  var toy = oldPokemon.toys().get(toyId);
  toy.set({pokemon_id: newPokeId});
  toy.save({}, {
    success: (function () {
      this.renderPokemonDetail(oldPokemon)
    }).bind(this)
  });
}

window.Pokedex.RootView.prototype.renderToysList = function(toys){
  this.$pokeDetail.find(".toys").empty();
  toys.each(function(toy){
    this.addToyToList(toy)
  }.bind(this))
}