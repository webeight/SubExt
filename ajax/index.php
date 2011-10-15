<?php
require_once($_SERVER['DOCUMENT_ROOT'] . '/at-includes/engine.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/resources/functions.php');

include(__DIR__ . '/AjaxController.php');
require_once(__DIR__ . '/CrudController.php');

$ajax = new AjaxController();
$ajax->parseRequest();
$controllerClass = $ajax->run();
$controllerClass->sendHeaders();