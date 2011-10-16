Ext.application({
    name: 'Sub',
	views: [
		'Sub.view.Viewport'
	],
	
	authenticated: true,
	
    appFolder: 'resources/js/sub',
    launch: function() {
		Ext.create('Sub.view.Viewport', {
			authenticated: this.authenticated
		});
    }
});