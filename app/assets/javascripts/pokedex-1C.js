Pokedex.RootView.prototype.createPokemon = function (attrs, callback) {
  var newPoke = new Pokedex.Models.Pokemon(attrs);
  // newPoke.set(attrs);
  newPoke.save({}, {
    success: function () {
      this.pokes.add(newPoke);
      this.addPokemonToList(newPoke)
      callback.call(this, newPoke);
    }.bind(this)
  });
};

Pokedex.RootView.prototype.submitPokemonForm = function (event) {
  event.preventDefault();
  var $form = $(event.currentTarget);
  var pokeParams = $form.serializeJSON();
  this.createPokemon(pokeParams, this.renderPokemonDetail);
};