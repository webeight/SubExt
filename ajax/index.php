<?php

require_once('AjaxController.php');
require_once $_SERVER['DOCUMENT_ROOT'] . '/Subsonic.php';

$ajax = new AjaxController();
$ajax->parseRequest();
$controllerClass = $ajax->run();
$controllerClass->sendHeaders();