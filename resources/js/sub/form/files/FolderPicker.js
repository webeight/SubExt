Ext.define('Sub.form.files.FolderPicker', {
	extend: 'Ext.form.field.ComboBox',

	requires: [
		'Sub.store.files.FolderPicker'
	],
	
	initComponent: function(){
		this.store = Ext.create('Sub.store.files.FolderPicker');
		
		this.callParent(arguments);
	},
	
	labelAlign: 'top',
    fieldLabel: 'Folder',
    displayField: 'name',
    valueField: 'id',
	width: 120,
	editable: false
});