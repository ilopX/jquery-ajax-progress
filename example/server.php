<?php
/**
 * Created by PhpStorm.
 * User: ilopX
 * Date: 23.08.2015
 * Time: 15:33
 */

if (isset($_REQUEST['action']) && $_REQUEST['action']){
    $data = str_repeat("wert yuiop", 200);
    $sizeBytes = mb_strlen($data, '8bit');
    header("Content-length: ".$sizeBytes);
    $len = strlen($data);
    for ($i = 0; $i < $len; $i++){
        echo $data[$i];
        flush();
        usleep(10000);
    }
}