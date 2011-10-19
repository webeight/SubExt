<?php

class Subsonic_RequestController extends AjaxHandler {
//	public function pingAction(){
//		$this->setParam('hey', 'whoa');
//	}
	public function __call($method, $args) {
		$options = request('options',array());
		$name = substr($method, 0, strlen($method) - 6);
		$this->setParam('command', $name);
		if ($this->subsonic->isCommand($name)){
			// if command returns xml:
			$this->setParam('response', $this->subsonic->$name($options));
		}else{
			$this->addError("Command $name not found");
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
