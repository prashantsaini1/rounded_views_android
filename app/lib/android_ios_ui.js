exports.createView = function (args) {
    return OS_IOS ? Ti.UI.createView(args) : Ti.UI.Android.createCardView(_.extend(args, {'elevation': 0}));
};
