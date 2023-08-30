<html lang="en">
<head>
    <title>DOOR</title>
    <link rel="stylesheet" href="door.css">
    <style type="text/css">
        *{
    text-align: center;
    background-color: rgba(140, 240, 138, 0.837);
}


button{
    margin-top: 2%;
    color:black;
    background-color: white;
    height: 50px;
    width: 120px;
    border-radius: 20%;
    font-family: 'Times New Roman', Times, serif;
    font-size: medium;
    font-weight: bolder;
    background-color: burlywood;
    position: relative;
}

img{
    margin:auto;
    height: 256px;
    width: 256px;
}
#close{
     margin-left:20%;
}

button:hover{
    color: aliceblue;
    background-color:darkred;
    cursor: pointer;
}

    </style>

</head>
<body>
    <script type="text/javascript">
        function door_open(){
    document.getElementById('image').src="open.jpg.";
}
function door_close(){
    document.getElementById('image').src ="closed.jpg ";
}

    </script>
    <h1>CLICK THE BUTTON TO OPEN AND CLOSR THE DOOR..!</h1>
    <div>
        <img id="image" src="open.jpeg" alt="off">
    </div>
    <div>
        <button id="open" onclick="door_open()">OPEN</button>
        <button id="close" onclick="door_close()">CLOSE</button>
    </div>
    <script src="./door.js"></script>
</body>
</html>

