<?php
//require_once($_SERVER['DOCUMENT_ROOT'] . '/at-includes/engine.php');
//require_once($_SERVER['DOCUMENT_ROOT'] . '/resources/functions.php');

require_once('AjaxController.php');
//require_once('CrudController.php');

$ajax = new AjaxController();
$ajax->parseRequest();
$controllerClass = $ajax->run();
$controllerClass->sendHeaders();