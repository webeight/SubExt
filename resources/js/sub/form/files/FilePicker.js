Ext.define('Sub.form.files.FilePicker', {
	extend: 'Ext.tree.Panel',
	requires: [
		'Sub.store.files.FilePicker'
	],
	
	height: 400,
	rootVisible: false,
	
	initComponent: function(){
		this.store = Ext.create('Sub.store.files.FilePicker');
		
		this.columns = [{
			xtype: 'treecolumn',
			text: 'Name',
			flex: 1,
			dataIndex: 'name'
		},{
			text: 'Artist',
			flex: 1,
			dataIndex: 'artist'
		}];
		
		this.callParent(arguments);
	},
	
	setFolder: function(id){
		if (!id) return;
		
		this.store.proxy.extraParams = {
			folder: id
		};
		this.store.load();
	}
});