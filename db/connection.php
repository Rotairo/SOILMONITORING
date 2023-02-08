<?php
$conn = mysqli_connect('localhost', 'root', '', 'db_soil') or
    die('Unable to connect. Check your connection parameters.');
mysqli_select_db($conn, 'db_soil') or die(mysqli_error($conn));
