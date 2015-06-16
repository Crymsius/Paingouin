<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

	$bdd = new mysqli("localhost", "paingouin", "foosaing", "paingouin");

	$req = $bdd->query('SELECT id as Id, nom, valeur FROM donnees');

	$rows = array();
	while($r = $req->fetch_array(MYSQLI_ASSOC)) {
    	$rows[] = $r;
	}
	print json_encode($rows);
	$req->close;
?>