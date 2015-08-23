<?php
/**
 * Created by PhpStorm.
 * User: ilopX
 * Date: 23.08.2015
 * Time: 15:33
 */

$data = str_repeat("wert yuiop", 200);
$sizeBytes = mb_strlen($data, '8bit');
header("Content-length: ".$sizeBytes);
$len = strlen($data);
for ($i = 0; $i < $len; $i++){
    echo $data[$i];
    flush();
    usleep(3000);
}
