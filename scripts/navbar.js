function navbar(){
    return `<div class="navbar">
        <div>
            <a href="index.html">
                <img src="https://www.travelguru.com/travelguru/resources/beetle/images/tg/travelguru-homestay-logo-199x52.png">
            </a>
        </div>

        <div class="dropdown">
            <button class="dropbtn">
                <div class="hosting">
                    <a href="##.html">Become a Host</a>
                </div>
            </button>
        </div>

        <div class="dropdown">
            <button class="dropbtn">Help</button>
            <div class="dropdown-content">
                <a href="#">Contact Us</a>
                <a href="#">Cancel Bookings</a>
                <a href="#">List your Hotel</a>
            </div>
        </div>

        <div class="dropdown">
            <button class="dropbtn"><a>Offers</a></button>
        </div>
       
        <div class="dropdown">
            <button class="dropbtn">My Account</button>
            <div class="dropdown-content">
                <a href="./pages/signin.html">Login</a>
                <a href="./pages/signup.html">SignUp</a>
            </div>
        </div>
    </div>`
}

export default navbar;