<?php
include ("InsCrawl.php");
$t = array("1.jpg");
for ($i = 0; $i < count($t); $i++) {
	getImg($t[$i], "Dff/imageDff" . $i . ".jpg");
	echo $t[$i];
	echo "<br/>";
}
