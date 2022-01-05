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
          // https://www.youtu.be/ArCLT4ds0Yc --> https://www.youtube.com/embed/ArCLT4ds0Yc
          startUrl = "https://www.youtube.com/embed/";
          splitUrl = that.YoutubeUrl.split("/");
          videoId = splitUrl[splitUrl.length - 1];  //Take just the video ID of entered url
          that.YoutubeUrl = startUrl + videoId;     //Combine embed link with video ID
        }
      },
      template: {
        require: "text!templates/views/components/widgets/youtube-video.htm",
      },
    });
  });
  