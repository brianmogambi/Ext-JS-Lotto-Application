/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'LottoApp.Application',

    name: 'LottoApp',

    requires: [
        // This will automatically load all classes in the LottoApp namespace
        // so that application classes do not need to require each other.
        'LottoApp.*'
    ],

    // The name of the initial view to create.
    // mainView: 'LottoApp.view.main.Main'
});
