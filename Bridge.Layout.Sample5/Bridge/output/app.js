﻿(function (globals) {
    "use strict";

    Bridge.define('app.Login', {
        inherits: [layouts.controls.Page],
        statics: {
            typeName: "app.Login",
            pAGE_DEFINITION: "<? xml version=\"1.0\" encoding=\"utf-8\" ?>\r\n<Stack Orientation = \"Vertical\" VerticalAlignment=\"Center\" HorizontalAlignment=\"Center\">\r\n    <TextBlock Text = \"Welcome to Login Page\" Margin=\"8\"/>\r\n    <TextBox Text = \"{path:username,mode:twoway}\" Placeholder=\"User name (test)\" Margin=\"8\"/>\r\n    <TextBox Text = \"{path:password,mode:twoway}\" Type=\"password\" Placeholder=\"Password (test)\" Margin=\"8\"/>\r\n    <Button class=\"btn btn-lg btn-primary\" Text=\"Sign In\" Command=\"{path:loginCommand}\" Margin=\"8,16,8,8\"/>\r\n</Stack>"
        },
        constructor: function () {
            //super();
            this.dataContext = new Bridge.Layouts.Sample5.LoginViewModel(this);
            this.initializeComponent();
        },
        initializeComponent: function () {
            var loader = new layouts.XamlReader();
            this.child = loader.Parse(app.Login.pAGE_DEFINITION);
        },
        onNavigate: function (context) {
    
        }
    });
    
    
    
    Bridge.init();
})(this);
