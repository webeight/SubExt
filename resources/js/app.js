Ext.application({
    name: 'Sub',
	views: [
		'Sub.view.Viewport'
	],
	
    appFolder: 'resources/js/sub',
    launch: function() {
        Ext.create('Sub.view.Viewport', {
			renderTo: Ext.getBody(),
		});
    }
});