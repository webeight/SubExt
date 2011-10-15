Ext.application({
    name: 'sub',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
					Ext.create('sub.view.albumlist.AlbumPanel', {
						title: "Albums!"
					}),
                {
                    title: 'extSubsonic Client',
                    html : 'Some cool shit about to happen up in here.'
                }
            ]
        });
    }
});