<?php
require_once('Subsonic.php');

function request($key, $defaultValue = false, $sourceArray = false) {
	if (!$sourceArray) {
		$sourceArray = $_REQUEST;
	}
	if (isset($sourceArray[$key])) {
		return $sourceArray[$key];
	}
	else {
		return $defaultValue;
	}
}