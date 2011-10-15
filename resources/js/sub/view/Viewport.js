Ext.define('Sub.view.Viewport', {
	extend:'Ext.container.Viewport', 
	requires: ['Sub.view.albums.Panel'],
	
	layout: 'border',
	defaults: {
		bodyStyle: 'padding:15px'
	},
	initComponent: function(){
		this.init();
		this.callParent(arguments);
	},
	
	init: function() {
		this.items = [{
			title: 'Player Controls',
			region: 'south',
			height: 150,
			cmargins: '5 0 0 0'
		},{
			title: 'Main Content',
			region:'center',
			margins: '5 0 0 0',
		}];
		this.initAlbumsPanel();
	},

	initAlbumsPanel: function(){
		this.albums = Ext.create('Sub.view.albums.Panel', {
			region: 'west'
		});
		
		this.items.push(this.albums);
	},
	
	initOtherPanel: function(){
		this.items.push({
			xtype: 'panel',
			width: '80%',
			height: 200,
			title: 'extSubsonic Client',
			html : 'Some cool shit about to happen up in here.'
		});
	}
});