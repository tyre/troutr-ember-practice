//= require_tree ./models
//= require_tree ./controllers
//= require_tree ./views
//= require_tree ./helpers
//= require_tree ./templates
//= require_tree ./states
//= require_self

// TroutrEmber.stateManager is useful for debugging,
// but don't use it directly in application code.
var stateManager = TroutrEmber.stateManager = TroutrEmber.StateManager.create();
TroutrEmber.initialize(stateManager);

jQuery(function() {
  stateManager.send('ready');
});

