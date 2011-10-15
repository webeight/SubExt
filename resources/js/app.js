Ext.application({
    name: 'sub',
	
    appFolder: 'resources/js/sub',
    launch: function() {
        Ext.create('sub.view.Viewport', {
			renderTo: Ext.getBody(),
		});
    }
});