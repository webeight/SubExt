Ext.define('Sub.view.Viewport', {
	extend:'Ext.container.Viewport', 
	requires: [
		'Sub.view.files.Panel',
		'Sub.view.mediacontrol.Panel',
		'Sub.form.files.FolderPicker'
	],
	authenticated: false,
	
	layout: 'border',
	defaults: {
		bodyStyle: 'padding: 8px'
	},
	
	initComponent: function(){
		if (!this.authenticated){
			console.log("you're not auth'd!");
		}
		
		this.items = [];
		this.initCenter();
		this.initAlbumsPanel();
		this.initMediaControl();
		
		this.callParent(arguments);
	},
	
	initCenter: function(){
		this.mainContent = {
			title: 'Main Content',
			region:'center',
		};
		this.items.push(this.mainContent);
	},

	initAlbumsPanel: function(){
//		this.albums = Ext.create('Sub.view.files.Panel', {
//			title: '',
//			region: 'west',
//			width: 160
//		});
		this.albums = Ext.create('Sub.form.files.FilePicker', {
			region: 'west', 
			width: 260
		});

		this.items.push(this.albums);
	},
	
	initMediaControl: function(){
		this.mediaControl = {
			xtype: 'mediacontrolpanel',
			region: 'east',
			width: 150
		};
		
		this.items.push(this.mediaControl);
	}
});