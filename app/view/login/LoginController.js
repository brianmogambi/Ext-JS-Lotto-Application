Ext.define('LottoApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function(){
        var me = this;

        localStorage.setItem('LoggedIn',true);

        me.getView().destroy();

        Ext.create({
            xtype: 'app-main'
        });
    }
});