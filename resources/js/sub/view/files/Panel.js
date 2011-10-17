Ext.define('Sub.view.files.Panel', {
	extend: 'Ext.form.Panel',
	requires: [
		'Sub.form.files.FolderPicker',
		'Sub.form.files.FilePicker'
	],
	
	width: '20%',
	title: "File list",
	resizable: true,
	collapsible: true,
	
	initComponent: function(){
		this.items = [];
		
		this.initFolderPicker();
		this.initFilePicker();
		this.initListeners();
		this.callParent(arguments);
	},
	
	initFolderPicker: function(){
		this.folderPicker = Ext.create('Sub.form.files.FolderPicker');
		this.items.push(this.folderPicker);
	},
	
	initFilePicker: function(){
		this.filePicker = Ext.create('Sub.form.files.FilePicker');
		this.items.push(this.filePicker);
	},
	
	initListeners: function(){
		this.folderPicker.on('change', function(a,id){
			this.filePicker.setFolder(id);
		}, this);
	}
});