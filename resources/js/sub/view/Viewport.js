Ext.define('Sub.view.Viewport', {
	extend:'Ext.container.Viewport', 
	requires: [
		'Sub.view.files.Panel',
		'Sub.view.mediacontrol.Panel'
	],
	authenticated: false,
	
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
			title: 'Main Content',
			region:'center',
			margins: '5 0 0 0',
		}];
		this.initAlbumsPanel();
		this.initMediaControl();
	},

	initAlbumsPanel: function(){
		this.albums = Ext.create('Sub.view.files.Panel', {
			region: 'west'
		});
		
		this.items.push(this.albums);
	},
	
	initMediaControl: function(){
		this.items.push({
			xtype: 'mediacontrolpanel',
			region: 'south',
			height: 150
		});
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