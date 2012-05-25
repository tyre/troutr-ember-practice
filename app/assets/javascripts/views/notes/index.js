TroutrEmber.IndexNotesView = Ember.View.extend({
  templateName: 'notes/index',
  notesBinding: 'TroutrEmber.notesController',

  refreshIndex: function() {
    TroutrEmber.notesController.findAll();
  },

  showNew: function() {
    this.set('isNewVisible', true);
  },

  hideNew: function() {
    this.set('isNewVisible', false);
  }
});