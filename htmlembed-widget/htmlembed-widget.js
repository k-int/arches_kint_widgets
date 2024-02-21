define(['knockout', 'underscore', 'viewmodels/widget'], function (ko, _, WidgetViewModel) {
    /**
    * @function external:"ko.components".text-widget
    * @param {object} params
    * @param {string} params.value - the value being managed
    * @param {function} params.config - observable containing config object
    */
    return ko.components.register('htmlembed-widget', {
        viewModel: function(params) {
            params.configKeys = ['htmlEmbed'];
            WidgetViewModel.apply(this, [params]);
            var self = this;


            this.htmlEmbed = ko.observable();

            this.preview = this.value();
        },
        template: { require: 'text!templates/views/components/widgets/htmlembed-widget.htm' }
    });
});