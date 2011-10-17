<?php

class Files_RequestController extends AjaxController {
	public function getAction(){
		$node = request('node');
		$folder = request('folder');
		$username	= Creds::Username;
		$password	= Creds::Password;
		$serverUrl	= Creds::ServerURL;
		$serverPort = Creds::ServerPort;
		$subsonic = new Subsonic($username, $password, $serverUrl, $serverPort, "SubExt");
		
		if ($node == 'root'){
			// Get indexes
			$params = array();
			if (is_numeric($folder)){
				$params = array('musicFolderId'=>$folder);
			}
			$r = $subsonic->getIndexes($params);
//			var_dump($r);
			$a = array();
			if (is_array($r->data->index)){
				foreach ($r->data->index as $k => $v) {
					if (isset($v->artist) && is_array($v->artist)){
						$a = array_merge($a, $v->artist);
					}
				}
			}else if (isset($r->data->index)){
				$a = $r->data->index->artist;
			}
//			$r->data->index->id = $r->data->index->name;
			$this->setParam('children', $a); //$r->data->index);
		}else if (!empty($node)){
			$params = array('id' => $node);
			$r = $subsonic->getMusicDirectory($params);
//			var_dump($r->data->child);
			$children = $r->data->child;
			foreach ($children as $k=>$child) {
				$children[$k]->name = $child->title;
				$children[$k]->leaf = ($child->isDir == false);
			}
			$this->setParam('children', $children );
		}
	}
}