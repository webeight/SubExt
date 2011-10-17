Ext.define('Sub.store.files.FilePicker',{
	extend: 'Ext.data.TreeStore',
	
	
	proxy: {
		type: 'ajax',
		url : '/ajax/files/request/get',
		reader: {
			type: 'json',
			root: 'children'
		}
	},
	
	fields: [
		{name: 'id',		type: 'string'},
		{name: 'name',		type: 'string'},
		{name: 'artist',	type: 'string'},
		{name: 'coverArt',	type: 'string'}
	]
});