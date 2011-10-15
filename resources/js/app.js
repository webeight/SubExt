Ext.application({
    name: 'Sub',
	views: [
		'Sub.view.Viewport'
	],
	
	authenticated: false,
	
    appFolder: 'resources/js/sub',
    launch: function() {
		Ext.create('Sub.view.Viewport', {
			renderTo: Ext.getBody(),
			authenticated: authenticated
		});
    }
});