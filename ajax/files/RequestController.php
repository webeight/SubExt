<?php

class Files_RequestController extends AjaxController {
	public function getAction(){
		$node = request('node');
		$folder = request('folder');
		
		if ($node == 'root'){
			// Ext sends 'root' as the node value ... when its looking 
			// for the root of the tree. Otherwise it will send the id value
			$params = array();
			if (is_numeric($folder) && $folder > -1){
				$params = array('musicFolderId'=>$folder);
			}
			
			$indices = $this->subsonic->getIndexes($params)->data->index;
			if (!is_array($indices)) $indices = array($indices); 
			
			$children = array();

			foreach ($indices as $k => $v) {
				if (isset($v->artist) && is_array($v->artist)){
					$children = array_merge($children, $v->artist);
				}
			}
			$this->setParam('children', $children);
		}else if (!empty($node)){
			$params = array('id' => $node);
			$children = $this->subsonic->getMusicDirectory($params)->data->child;

			
			foreach ($children as $k => $child) {
				$children[$k]->name = $child->title;
				$children[$k]->leaf = ($child->isDir == false);
			}
			$this->setParam('children', $children );
		}
	}
	
	public function init() {
		$username	= Creds::Username;
		$password	= Creds::Password;
		$serverUrl	= Creds::ServerURL;
		$serverPort = Creds::ServerPort;
		$this->subsonic = new Subsonic($username, $password, $serverUrl, $serverPort, "SubExt");
	}
}