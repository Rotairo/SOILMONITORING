<?php 
session_start();
include './db/connection.php';

function input_cleaner($input) {
    $input = trim($input);
    $input = stripslashes($input);
    $input = htmlspecialchars($input);
    return $input;
  }

if(isset($_POST['addtest'])){
    $owner = input_cleaner($_POST['owner']);
    $address = input_cleaner($_POST['address']);
    $lang = input_cleaner($_POST['lang']);
    $lat = input_cleaner($_POST['lat']);
    $dater = input_cleaner($_POST['dater']);
    $dataa = input_cleaner($_POST['dataa']);
    $rla = input_cleaner($_POST['rla']);
    $m = input_cleaner($_POST['moisture']);
    $t = input_cleaner($_POST['temp']);
    $n = input_cleaner($_POST['n']);
    $p = input_cleaner($_POST['p']);
    $pt = input_cleaner($_POST['pt']);

    $query = "INSERT into `tbl_tests` (`owner`,`address`,`lat`,`lang`,`date_received`,`date_analyzed`,`rla_no`,`moisture`,`temp`,`nitrogen`,`phosphorus`,`potassium`) values ('$owner','$address','$lat','$lang','$dater','$dataa','$rla','$m','$t','$n','$p','$pt') ";

    if (mysqli_query($conn, $query)) {
        $_SESSION['message'] = 'Successfully Added Test data!';
       header('location:addtest.php');

        
    } else {
       echo 'fail'.mysqli_error($conn);
    }
}

?>