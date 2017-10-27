Ext.define('LottoApp.view.lotto.Lotto', {
    extend:  'Ext.form.Panel',
    xtype: 'lotto',

    requires: [
        'LottoApp.view.lotto.LottoController',
        'Ext.form.Panel',
        // 'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
    ],
    controller: 'lottocontroller',
    title: 'Lotto Number Generator',
    // plugins: 'viewport',

    listener: {
        afterrender: 'onAfterRender'
    },

    items: [
        {
            xtype: 'fieldset',
            reference: 'form',
            defaults: {
                margin: '10 0 10 10'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'numberRange',
                    allowBlank: false,
                    fieldLabel: 'Enter Number Range'
                },
                {
                    xtype: 'textfield',
                    name: 'numbers',
                    allowBlank: false,
                    fieldLabel: 'Total numbers to be picked'
                },
                {
                    xtype: 'displayfield',
                    reference: 'result',
                    disabled: true,
                    hidden: true
                },
                {
                    xtype: 'button',
                    formBind: true,
                    text: 'Generate Numbers',
                    margin: '10 10',
                    handler: 'onButtonClicked'
                    // listener: {
                    //     click: 'onButtonClicked'
                    // }
                },
                {
                    xtype: 'button',
                    text: 'Logout',
                    margin: '10 10',
                    handler: 'onClickButton'
                }
            ]
        }
        //     buttons: [
        //
        //
        //     ]
        // }
    ]
});