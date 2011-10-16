Ext.define('Sub.view.files.Panel', {
	extend: 'Ext.form.Panel',
	requires: [
		'Sub.form.files.FolderPicker'
	],
	
	width: '20%',
	title: "File list",
	
	initComponent: function(){
		this.items = [];
		
		this.initFolderPicker();
		this.callParent(arguments);
	},
	
	initFolderPicker: function(){
		this.folderPicker = Ext.create('Sub.form.files.FolderPicker');
		this.items.push(this.folderPicker);
	}
});