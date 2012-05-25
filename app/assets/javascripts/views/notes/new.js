TroutrEmber.NewNoteView = Ember.View.extend({
  tagName: 'form',
  templateName: 'notes/edit',

  init: function() {
    this._super();
    this.set('note', TroutrEmber.Note.create());
  },

  didInsertElement: function() {
    this._super();
    this.$('input:first').focus();
  },

  cancelForm: function() {
    this.get('parentView').hideNew();
  },

  submit: function(event) {
    var self = this;
    var note = this.get('note');

    event.preventDefault();

    note.saveResource()
      .fail(function(e) {
        TroutrEmber.displayError(e);
      })
      .done(function() {
        TroutrEmber.notesController.pushObject(note);
        self.get('parentView').hideNew();
      });
  }
});