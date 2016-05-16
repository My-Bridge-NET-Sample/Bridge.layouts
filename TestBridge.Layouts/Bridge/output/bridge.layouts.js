﻿(function (globals) {
    "use strict";

    Bridge.define('Bridge.Layouts.UIElement', {
        inherits: [layouts.DepObject,layouts.ISupportCommandCanExecuteChanged],
        onCommandCanExecuteChanged: function (command) {
            return null;
        }
    });
    
    Bridge.define('Bridge.Layouts.UriMapping', {
        statics: {
            _rxMapping: null
        },
        uri: null,
        _mapping: null,
        mapping: null,
        _compiled: null,
        _compiledUri: null,
        _queryStringTokens: null,
        constructor: function (uri, mapping) {
            this.uri = uri;
            this.mapping = mapping;
        },
        compile: function () {
            return;
        },
        test: function (uri) {
            return Bridge.getDefaultValue(Boolean);
        },
        resolve: function (uriToResolve) {
    
            return Bridge.getDefaultValue(Boolean);
        }
    });
    
    Bridge.define('Bridge.Layouts.FrameworkElement', {
        inherits: [Bridge.Layouts.UIElement],
        statics: {
            typeName: null
        },
        dataContext: null
    });
    
    Bridge.init();
})(this);
