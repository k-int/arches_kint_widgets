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
            WidgetViewModel.apply(this, [params]);
            var self = this;
            self.YoutubeUrl = self.value();
            // https://www.youtube.com/watch?v=ArCLT4ds0Yc&ab_channel=ArchesProject -> https://www.youtube.com/embed/ArCLT4ds0Yc
            console.log(self.YoutubeUrl);
        },
        template: { require: 'text!templates/views/components/widgets/youtube-video.htm' }
    });
});
