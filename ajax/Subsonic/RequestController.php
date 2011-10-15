<?php

class Subsonic_RequestController extends AjaxController {
	public function __call($name, $arguments) {
		
		$options = request('options',array());
		$o = new Subsonic($username, $password, $serverUrl);
		if ($o->isCommand($name)){
			// if command returns xml:
			$this->setParam('response', $o->$name($options));
		}
	}
}