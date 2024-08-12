<!DOCTYPE html>
<html>

<head>
  <title>Sky | Onyyyyx</title>
  <meta charset="utf-8">
  <link rel='stylesheet' type='text/css' href='style.css'>
  <link rel='icon' href='images/other/icon.png'>
  <script src="script.js"></script>
</head>

<body>
  <header>
    <button class="button" data-text="Awesome">
      <span class="actual-text">&nbsp;sky&nbsp;</span>
      <span aria-hidden="true" class="hover-text">&nbsp;sky&nbsp;</span>
    </button>
    <div class="topnav" id="myTopnav">
			<a href="index.html">Home</a>
			<a href="moon.php" class="active">Moon</a>
			<a href="stars.php">Stars</a>
			<a href="deepsky.php">Deep Sky</a>
			<a href="openfield.php">Open Field</a>
			<a href="javascript:void(0);" class="icon" onclick="myFunction()">
				<i class="fa fa-bars"></i>
			</a>
		</div>
  </header>
  <main>
    <div class="gallery">
      <?php
        $files = scandir('images/moon');
        foreach ($files as $f) {
          if ($f === '.') { continue; }
          elseif ($f === '..') { continue; }
          echo('<img src="images/moon/' . $f . '">');
        };
      ?>
    </div>
  </main>
  <footer>
    <a class="btn btn-primary" href="#"><img src="images/other/top.png"></a>
    <p>Developpement: <a href="https://github.com/onyyyyx">Onyx</a></p>
    <p>Pictures: <a href="https://github.com/onyyyyx">Onyx</a></p>
  </footer>
</body>

</html>