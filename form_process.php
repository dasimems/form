<html>

<head>
    <title>Form Submited</title>
    <link rel="stylesheet" href="css/process.css">
</head>

<body>
<?php
$fname = $_POST['fname'];
$uname = $_POST['uname'];
$email = $_POST['email'];
$password = $_POST['password'];

if(isset($fname) && empty($fname)){
echo "please name is required";
} else {
    echo "filled";
}
?>
<script src="js/form_process.js"></script>
</body>
<html>