define(["knockout", "underscore", "viewmodels/widget"], function (
  ko,
  _,
  WidgetViewModel
) {
  /**
   * registers a sketchfab-widget component for use in forms
   * @param {object} params
   * @param {string} params.value - the value being managed
   * @param {function} params.config - observable containing config object
   * @param {string} params.config().label - label to use alongside the text input
   * @param {string} params.config().placeholder - default text to show in the text input
   */
  //order of operations between ko, jquery and html

  //functions
  //parse html element and return only the iFrame if it contains it
  function parser(strElement) {
    let parser = new DOMParser();
    try {
      iframe = parser
        .parseFromString(strElement, "text/html")
        .getElementsByTagName("iframe")[0]; //returns a list of html objects iframe is the first element
      return iframe; //returns a HTML Object containign the iFrame so we get access to its porperties
    } catch {
      err;
    }
    alert("Entered link does not contain an iFrame!" + err);
  }

  return ko.components.register("generic-embed", {
    viewModel: function (params) {
      WidgetViewModel.apply(this, [params]);
      let that = this;
      
      //Plucking the iFrame
      let elm;
      if (that.value() !== null) {
        //only perform the operations when a value has been passed from the front-end
        elm = parser(that.value());
        elm.width = 560;
        elm.height = 315; //ensuring all elements are the same size
        that.embedUrl = elm.outerHTML; //using outerHTML to get the element as string insted of HTMLObject
      }
    },
    template: { require: "text!widget-templates/generic-embed" },
  });
});
