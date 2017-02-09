<?php

	header('Content-Type: text/xml');
	echo '<?xml version="1.0" encoding="UTF-8" standalone="yes" ?>'; 

	echo'<response>';
	
	$food = $_GET['food'];
	$foodArray = array('spaghetti', 'dumplings', 'rice');
	if(in_array($food,$foodArray)) {
		echo 'We do have ' . $food . '!'; //not secure
	} else if($food=='') {
		echo 'Enter a food you idiot!';
	} else {
		echo 'Sorry punk we don\'t sell ' . $food . '!';
	}
	echo'</response>';

?>