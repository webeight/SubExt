Ext.define('Sub.store.files.FolderPicker', {
	extend: 'Ext.data.Store',
    
	proxy: {
        type: 'ajax',
        url : '/ajax/subsonic/request/get-music-folders',
        reader: {
            type: 'json',
            root: 'response.data.musicFolder'
        }
    },
	
	fields: [
        {name: 'id',	type: 'string'},
        {name: 'name',	type: 'string'}
	]
});