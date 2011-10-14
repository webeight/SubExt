<?php

$action = (isset($_REQUEST['action'])) ? (string)$_REQUEST['action']: null;
$options = (isset($_REQUEST['options'])) ? (array)$_REQUEST['options']: array();
$rawAnswer = (isset($_REQUEST['rawAnswer'])) ? filter_var($_REQUEST['rawAnswer'], FILTER_VALIDATE_BOOLEAN):fals$

if($action <> null)
{
    require_once("Subsonic.php");
    require_once("config.php");
    $Subsonic = new Subsonic($username, $password, $serverUrl, $serverPort);
    if($Subsonic->isCommand($action))
    {
     	if($rawAnswer)
        {
            echo $Subsonic->querySubsonic($action, $options, true);
        }
	else
	{
            echo json_encode($Subsonic->$action($options));
        }
    }
    else
    {
     	echo json_encode(array('success'=>false, 'error'=>'Invalid subsonic command'));
    }
}
