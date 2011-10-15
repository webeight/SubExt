<?php

$a = (isset($_REQUEST['a'])) ? (string)$_REQUEST['a']: null;
$o = (isset($_REQUEST['o'])) ? (array)$_REQUEST['o']: array();
$rawAnswer = (isset($_REQUEST['rawAnswer'])) ? filter_var($_REQUEST['rawAnswer'], FILTER_VALIDATE_BOOLEAN):false;
$xml = (isset($_REQUEST['xml'])) ? filter_var($_REQUEST['xml'], FILTER_VALIDATE_BOOLEAN):false;
if($a <> null)
{
    require_once("Subsonic.php");
    require_once("config.php");
    $Subsonic = new Subsonic($username, $password, $serverUrl, $serverPort, "SubPHP Tester");
    if($Subsonic->isCommand($a))
    {
        if($rawAnswer && !$xml)
        {
            $response = json_decode($Subsonic->querySubsonic($a, $o, true));
        }
        else if($rawAnswer && $xml)
        {
            $o['f'] = 'xml';
            $response = htmlentities($Subsonic->querySubsonic($a, $o, true));
        }
        else
        {
            $response = $Subsonic->querySubsonic($a, $o);
        }
        print_r($response);
    }
    else
    {
        echo json_encode(array('success'=>false, 'error'=>'Invalid subsonic command: '. $a));
    }
}
else
{
?>

<html>
<head>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">
    $(document).ready(function()
    {
        $('#query').click(function()
        {
            var rawAnswer = $('#rawAnswer').is(':checked');
            var xml = $('#xml').is(':checked');
            //$('#msg').html(rawAnswer ? "Raw Answer" : "Processed Answer");
            var action = $('#action').val();
            var options = decodeOptions();
            var data = querySubsonic(action, options, rawAnswer, xml);
        });
        
        $('#rawAnswer').change(function()
        {
            if($(this).is(':checked'))
            {
                $('#xmlDiv').show();
            }
            else
            {
                $('#xmlDiv').hide();
                $('#xml').removeAttr('checked');
            }
        });
        
        $(document).ajaxStart(function()
        {
            $('#ajax-loader').show();
            $('#results').html("");
        });
        
        $(document).ajaxStop(function()
        {
            $('#ajax-loader').hide();
        });
        
    });
    
    function decodeOptions()
    {
        var optionsArray = $('#options').val().split("&");
        var options = {};
        $.each(optionsArray, function(i, option)
        {
            var temp = option.split("=");
            options[temp[0]] = temp[1];
        });
        return options;
    }
    
    function querySubsonic(action, options, rawAnswer, xml)
    {
        $.post('ajaxTester.php', {'a': action, 'o': options, 'rawAnswer': rawAnswer, 'xml': xml}, function(data)
        {
            $('#results').html("<pre>"+data+"</pre>");
        });    
    }

</script>
</head>
<body>
<div id="info" style="float:left;width:200px;height:100%;text-align:center;">
    <br/><br/>
    <label for="action">Action:</label>
    <input id="action" value="getMusicFolders"/>
    <br/><br/>
    <label for="options">Options:</label>
    <input id="options"/>
    <br/><br/>
    <input type="checkbox" name="rawAnswer" id="rawAnswer" value="Raw Answer"/>
    <label for="rawAnswer">Raw Answer</label>
    <br/><br/>
    <div id="xmlDiv" style="display:none">
        <input type="checkbox" name="xml" id="xml" value="xml">
        <label for="xml">XML</label>
        <br/><br/>
    </div>
    <button id="query" style="margin-left:auto;margin-right:auto;">Query Subsonic</button>
    <br/><br/><br/><span id="msg"></span>
</div>
<div id="ajax-loader" style="display:none; position:absolute; left:250px;top:100px;"><img src="images/ajax-loader.gif"/></div>
<div id="results" style="position:absolute;left:200px;padding-left:50px;border-left-width:2px;border-left-style:dashed;min-height:1000px;"></div>

</body>
</html>

<?php
}
