Ext.define('LottoApp.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires : [
        'LottoApp.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login Window',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
        items: [
            {
                xtype: 'textfield',
                name: 'username',
                fieldLabel: 'Username',
                allowBlank: 'false'
            },
            {
                xtype: 'textfield',
                name: 'password',
                fieldLabel: 'Password',
                inputType: 'password',
                allowBlank: 'false'
            },
            {
                xtype: 'displayfield',
                hideEmptyLabel: false,
                value: 'Enter any non-blank password'
            }
        ],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});