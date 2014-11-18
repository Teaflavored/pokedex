Pokedex.RootView.prototype.renderPokemonDetail = function (pokemon){ 
  
  var scriptContent = $("script#pokemon-detail-template").html()
  var templateFn = _.template(scriptContent);
  var contentToPlace = templateFn({pokemon: pokemon})
  

  var $ul = $("<ul class=\"toys\">")
  this.$pokeDetail.html(contentToPlace)
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
