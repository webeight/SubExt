Ext.define('sub.view.Viewport', {
	extend:'Ext.container.Viewport', 
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
			title: 'Albums',
			region:'west',
			margins: '5 0 0 0',
			cmargins: '5 5 0 0',
			width: 200,
		},{
			title: 'Player Controls',
			region: 'south',
			height: 150,
			cmargins: '5 0 0 0'
		},{
			title: 'Main Content',
			region:'center',
			margins: '5 0 0 0',
			text: 'hey check me out'
		}];
	},

	initAlbumsPanel: function(){
		this.albums = Ext.create('sub.view.albums.Panel');
		
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