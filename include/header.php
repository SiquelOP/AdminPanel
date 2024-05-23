<header>
    <div class="headerHolder">
        <a href="index.php"><img src="assets/img/Logo.png" alt="Eurozon logo" class="logo"></a>

        <div class="nav">

        </div>

        <div class="user">
            <?php 
                if (isset($_SESSION['user']) && $_SESSION['user']['authorization'] == 3) {
                    echo '<a href="addItem.php"> <img src="https://img.icons8.com/ios-glyphs/80/FFFFFF/plus-math.png" alt="addItem"> </a>';
                    echo '<a href="panel.php"> <img src="https://img.icons8.com/material-sharp/80/FFFFFF/admin-settings-male.png" alt="addItem"> </a>';
                }
            ?>
            <a href="koszyk.php"><img src="assets/img/cart.png" alt="profile"></a>
            <img src="assets/img/user.png" alt="profile">
        </div>
    </div>
</header>