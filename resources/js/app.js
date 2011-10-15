Ext.application({
    name: 'subExt',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'extSubsonic Client',
                    html : 'Some cool shit about to happen up in here.'
                }
            ]
        });
    }
});