
const footerHTML = 
`
<footer class="section-footer">
    <div class="footer-container container">

      <div class="content_1">
        <img src="https://logos.textgiraffe.com/logos/logo-name/Akshita-designstyle-boots-m.png" width="30%" height="auto" alt="">
        <p>Welcome to Electrical Appliances, your ultimate destinity for cutting-edge gadgets !  </p>
      </div>

      <div class="content_2">
        <h3>SHOPPING</h3>
        <a href="#">Computer Science</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales & Discount</a>
      </div>

      <div class="content_3">
        <h3>Experience</h3>
        <a href="contact.html">Contact Us</a>
        <a href="#" target="blank">Payment Method</a>
        <a href="#" target="blank">Delivery</a>
        <a href="#" target="blank">Return and Exchange</a>
      </div>

      <div class="content_4">
        <h3>NEWSLETTER</h3>
        <p>Be the first to know about new <br> arrivls, sales & promos !</p>
        <div class="f-mail">
          <input type="email" placeholder="Enter your email" required>
          
        </div>
      </div>
    </div>

    <hr>

    <div class="f-design">
      <div class="f-design-text">
        <p>Designed and code by Akshita  </p>
      </div>
    </div>

  </footer>

`

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);