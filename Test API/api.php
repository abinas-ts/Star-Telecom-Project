<?php

if (!empty($_POST["Name"]) && !empty($_POST["Password"])) {
    $name = $_POST["Name"];
    $password = $_POST["Password"];

    $data = [
        "status" => "success",
        "message" => "Your Name: $name and Password: $password <br> Saved Successfull "
    ];

    echo json_encode($data);
} else {
    $data = [
        "status" => "error",
        "message" => "!Please input Name and Password",
    ];

    echo json_encode($data);
};

?>