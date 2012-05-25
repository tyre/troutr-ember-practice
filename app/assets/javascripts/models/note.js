TroutrEmber.Note = Ember.Resource.extend({
  resourceUrl: '/notes',
  resourceName: 'note',
  resourceProperties: ['title', 'body'],

  validate: function() {
    if (!(this.get('title') && this.get('body'))) {
      return "YOUR FACE";
    }
  },

  bodyLength: Ember.computed(function() {
    return this.get('body').length();
  }).property('body')
});