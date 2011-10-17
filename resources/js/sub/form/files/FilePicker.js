Ext.define('Sub.form.files.FilePicker', {
	extend: 'Ext.tree.Panel',
	requires: [
		'Sub.store.files.FilePicker',
		'Sub.form.files.FolderPicker'
	],
	
	rootVisible: false,
	height: 600,
	
	initComponent: function(){
		this.tbar = this.tbar || [];
		this.columns = this.columns || [];
		this.store = Ext.create('Sub.store.files.FilePicker');
		
		this.initTreeColumns();
		this.initAddButton();
		this.initPlayButton();
		this.initFolderPicker();
		
		this.initListeners();
		
		this.callParent(arguments);
	},
	
	initTreeColumns: function(){
		this.columns = [{
			xtype: 'treecolumn',
			text: 'Name',
			flex: 2,
			dataIndex: 'name'
		},{
			text: 'Artist',
			flex: 1,
			dataIndex: 'artist'
		}];
	},
	
	initAddButton: function(){
		this.addToPlaylistButton = {
			xtype: 'button', 
			scope: this,
			text: 'Add',
			handler: function(){
				var selected = this.getSelectionModel().selected;
				selected = selected.items[0].data ? selected.items[0].data : null;
				console.log(selected);
			}
		};
		
		this.tbar.push(this.addToPlaylistButton);
	},
	
	initPlayButton: function(){
		this.playButton = {
			xtype: 'button', 
			text: 'Play' 
		};
		
		this.tbar.push(this.playButton);
	},
	
	initFolderPicker: function(){
		this.folderPicker = Ext.create('Sub.form.files.FolderPicker', {
			fieldLabel: ''
		});
		
		this.tbar.push('->');
		this.tbar.push(this.folderPicker);
	},
	
	initListeners: function(){
		
		this.folderPicker.on('change', function(me, id){
//			if (this.getStore().isLoading()) return;
			
			this.setFolder(id);
		}, this);
	},
	
	setFolder: function(id){
		if (!id) return;
		
		this.store.proxy.extraParams = {
			folder: id
		};
		this.store.load();
	}
});