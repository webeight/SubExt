<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/init.php';
require_once('AjaxController.php');

$ajax = new AjaxController();
$ajax->parseRequest();
$controllerClass = $ajax->run();
$controllerClass->sendHeaders();