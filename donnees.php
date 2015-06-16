<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

	$bdd = new mysqli("localhost", "paingouin", "foosaing", "paingouin");

	$req = $bdd->query('SELECT id as CACA, nom, valeur FROM donnees');

	$rows = array();
	while($r = $req->fetch_array(MYSQLI_ASSOC)) {
    	$rows[] = $r;
	}
	print json_encode($rows);
	$req->close;
/*	
	$outp = "";
	while($rs = $req->fetch_array(MYSQLI_ASSOC)) {
		if ($outp != "") {$outp .= ",";}
		$outp .= '{"Id":"'  . $rs["id"] . '",';
		$outp .= '"Nom":"'   . $rs["nom"]        . '",';
		$outp .= '"Valeur":"'. $rs["valeur"]     . '"}'; 
	}
	$outp ='{"records":['.$outp.']}';
	$req->close;
	echo($outp);
*/
?>