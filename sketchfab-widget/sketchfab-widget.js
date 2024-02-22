define([
  "knockout",
  "underscore",
  "viewmodels/widget",
], function (ko, _, WidgetViewModel) {
  /**
   * registers a sketchfab-widget component for use in forms
   * @function external:"ko.components".sketchfab-widget
   * @param {object} params
   * @param {string} params.value - the value being managed
   * @param {function} params.config - observable containing config object
   * @param {string} params.config().label - label to use alongside the text input
   * @param {string} params.config().placeholder - default text to show in the text input
   */
  //order of operations between ko, jquery and html
  return ko.components.register("sketchfab-widget", {
    viewModel: function (params) {
      params.configKeys = ['sketchfab_placeholder'];
      WidgetViewModel.apply(this, [params]);

      var that = this;

      //Take url from html input
      that.sketchfabUrl = that.value();

      //https://sketchfab.com/models/xxxxx --> https://sketchfab.com/models/xxxxxx/embed

      if (that.sketchfabUrl !== null) {
        if (that.sketchfabUrl.includes("https://sketchfab")) {
          that.embedUrl = that.sketchfabUrl + "/embed";
        } else {
          that.embedUrl = null
        }  
      } else {
        that.embedUrl = null
      }

    },
    template: { require: "text!widget-templates/sketchfab-widget" },
  });
});
