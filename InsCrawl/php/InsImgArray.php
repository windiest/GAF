<?php
include ("InsCrawl.php");
$t = array();
for ($i = 0; $i < count($t); $i++) {
	getImg($t[$i], "Dff/imageDff" . $i . ".jpg");
	echo $t[$i];
	echo "<br/>";
}
