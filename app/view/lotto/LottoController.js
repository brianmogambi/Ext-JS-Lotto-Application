Ext.define('LottoApp.view.lotto.LottoController', {
    extend:  'Ext.app.ViewController',
    alias: 'controller.lottocontroller',

    onAfterRender: function(){
        Ext.create({
            xtype: 'lotto'
        })
    },

    onButtonClicked: function(){
        var me = this,
            view = me.getView(),
            form = view.getForm(),
            formValues = form.getValues(),
            totalNumbers = formValues.numberRange,
            selectedNumbers = formValues.numbers,
            totalNumbersArray = [],
            selectedNumbersArray = [];

        for (var i = 0; i < totalNumbers; i++){
            totalNumbersArray[i] = i + 1;
        }

        for (var i = 0; i <= selectedNumbers; i++ ) {
            var num = parseInt(Math.random() * totalNumbers);
            selectedNumbersArray[i] = totalNumbersArray[num];
            totalNumbersArray[num] = totalNumbersArray[totalNumbers - 1];
            totalNumbers--;
        }

        selectedNumbersArray.sort();
        view.down('displayfield').setHidden(false).setDisabled(false).setValue('<b>Your lucky numbers are: </b>'+selectedNumbersArray.toString());
        // Ext.Msg.alert('Lucky Pick', 'Your lucky numbers are: '+selectedNumbersArray.toString());
    },

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('TutorialLoggedIn');

        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    }
});

