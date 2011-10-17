Ext.define('Sub.form.files.FolderPicker', {
	extend: 'Ext.form.field.ComboBox',

	requires: [
		'Sub.store.files.FolderPicker'
	],
	
	labelAlign: 'top',
    fieldLabel: 'Folder',
    displayField: 'name',
    valueField: 'id',
	width: 120,
	editable: false,
	
	initComponent: function(){
		this.store = Ext.create('Sub.store.files.FolderPicker');
		this.initListeners();
		this.callParent(arguments);
	},
	
	initListeners: function(){
		this.store.on('load', function(){
			this.insert(0,{
				id: "-1",
				name: 'All'
			});
		});
	}
});