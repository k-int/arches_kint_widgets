define(["knockout", "underscore", "viewmodels/widget"], function (
  ko,
  _,
  WidgetViewModel
) {
  /**
   * registers a text-widget component for use in forms
   * @function external:"ko.components".text-widget
   * @param {object} params
   * @param {string} params.value - the value being managed
   * @param {function} params.config - observable containing config object
   * @param {string} params.config().label - label to use alongside the text input
   * @param {string} params.config().placeholder - default text to show in the text input
   */

  return ko.components.register("youtube-video", {
    viewModel: function (params) {
      WidgetViewModel.apply(this, [params]);
      var that = this;

      //Bind YoutubeUrl to entered short url
      that.YoutubeUrl = that.value();

      if (that.YoutubeUrl !== null) {
        // e.g. https://www.youtu.be/ArCLT4ds0Yc --> https://www.youtube.com/embed/ArCLT4ds0Yc
        // multiple types of youtube video URLs https://gist.github.com/rodrigoborgesdeoliveira/987683cfbfcc8d800192da1e73adc486

        startUrl = "https://www.youtube.com/embed/";

        // regex to match most variations of youtube URLs
        // https://gist.github.com/rodrigoborgesdeoliveira/987683cfbfcc8d800192da1e73adc486?permalink_comment_id=4342805#gistcomment-4342805
        const regexpUrlMatch = /(?<=[=\/&])[a-zA-Z0-9_\-]{11}(?=[=\/&?#\n\r]|$)/

        if (that.YoutubeUrl.match(regexpUrlMatch)) {
          const extractedID = that.YoutubeUrl.match(regexpUrlMatch)[0]
          that.YoutubeUrl = startUrl + extractedID;     // Combine embed link with video ID
        } else {
          that.YoutubeUrl = null
        }
      }
    },
    template: {
      require: "text!templates/views/components/widgets/youtube-video.htm",
    },
  });
});
