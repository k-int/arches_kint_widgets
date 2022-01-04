define(['knockout', 'underscore', 'viewmodels/widget'], function (ko, _, WidgetViewModel) {
    /**
    * registers a text-widget component for use in forms
    * @function external:"ko.components".text-widget
    * @param {object} params
    * @param {string} params.value - the value being managed
    * @param {function} params.config - observable containing config object
    * @param {string} params.config().label - label to use alongside the text input
    * @param {string} params.config().placeholder - default text to show in the text input
    */
     return ko.components.register('youtube-video', {
        viewModel: function(params) {
            // params.configKeys = ['x_placeholder','y_placeholder'];
            params.valueProperties = ['url'];
            console.log("Printing params:\n")
            console.log(params)
            WidgetViewModel.apply(this, [params]);
            var self = this
            console.log("Printing self:\n")
            console.log(self)
            
            console.log('url:' + self.url())
            

            self.YoutubeUrl = self.url();
            if(self.YoutubeUrl !== null){
            // https://www.youtu.be/ArCLT4ds0Yc -> https://www.youtube.com/embed/ArCLT4ds0Yc
            start = "https://www.youtube.com/embed/"
            slash_split = self.YoutubeUrl.split("/")
            video_code = slash_split[slash_split.length - 1]
            end = start+video_code 
            self.YoutubeUrl = end
        };


            console.log(self.YoutubeUrl);

            

        },
        template: { require: 'text!templates/views/components/widgets/youtube-video.htm' }
    });
});
