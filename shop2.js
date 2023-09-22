
//shopping cart logic

//displays the container2(checkout) when check out btn is clicked
btnCheckout.addEventListener("click", function () {
  var show = document.getElementById("container2");
  if (show.style.display === "none") {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
}); 


//page load delay function which allows shop page to load before you can click
// add itmes which prevents shopping card item discrepencies
window.onload = function () {
  setTimeout(function () {
 

//api for getting data from rawg.io.  I spent 15 hours on these api functions and tried
 // everything I could think of and research and this is the only way this would work for me

 
getGameName();
async function getGameName() {
  //url for raw dog + the api key
  const apiKey = "b6784beccad4403ebf6711c876238b8e";
  const url = `https://rawg.io/api/games?token&key=${apiKey}`;

  //data.results[0].name
  const response = await fetch(url);
  await response
    .json()
    .then(
      (data) => (
        
        
        (this.document.querySelector("#game10").innerHTML = data.results[0].name),
        
        (this.document.querySelector("#release-date").innerHTML = "Released: " + data.results[0].released),
        
        (this.document.querySelector("#genre").innerHTML = "Rating: " + data.results[0].rating + " /5")
      )
    );
 
  }

  //game 2

  getGameName2();
  async function getGameName2() {
    //url for raw dog + the api key
    const apiKey = "b6784beccad4403ebf6711c876238b8e";
    const url = `https://rawg.io/api/games?token&key=${apiKey}`;

    
    const response = await fetch(url);
    await response
      .json()
      .then(
        (data) => (
          (this.document.querySelector("#game11").innerHTML = data.results[1].name),
          (this.document.querySelector("#release-date2").innerHTML = "Released: " + data.results[1].released),
          (this.document.querySelector("#genre2").innerHTML = "Rating: " + data.results[1].rating + " /5")
        )
      );
  }

  //game 3
  getGameName3();
  async function getGameName3() {
    //url for raw dog + the api key
    const apiKey = "b6784beccad4403ebf6711c876238b8e";
    const url = `https://rawg.io/api/games?token&key=${apiKey}`;

    //data.results[0].name
    const response = await fetch(url);
    await response
      .json()
      .then(
        (data) => (
          (this.document.querySelector("#game13").innerHTML =  data.results[3].name),
          (this.document.querySelector("#release-date3").innerHTML ="Released: " + data.results[3].released),
          (this.document.querySelector("#genre3").innerHTML = "Rating: " + data.results[3].rating + " /5")
        )
      );
  }


// game 4
getGameName4();
async function getGameName4() {
  //url for raw dog + the api key
  const apiKey = "b6784beccad4403ebf6711c876238b8e";
  const url = `https://rawg.io/api/games?token&key=${apiKey}`;

  //data.results[0].name
  const response = await fetch(url);
  await response
    .json()
    .then(
      (data) => (
        (this.document.querySelector("#game14").innerHTML = data.results[4].name),
        (this.document.querySelector("#release-date4").innerHTML ="Released: " + data.results[4].released),
        (this.document.querySelector("#genre4").innerHTML ="Rating: " + data.results[4].rating + " /5")
      )
    );
}

//game 5
getGameName5();
async function getGameName5() {
  //url for raw dog + the api key
  const apiKey = "b6784beccad4403ebf6711c876238b8e";
  const url = `https://rawg.io/api/games?token&key=${apiKey}`;

  //data.results[0].name
  const response = await fetch(url);
  await response
    .json()
    .then(
      (data) => (
        (this.document.querySelector("#game15").innerHTML = data.results[6].name),
        (this.document.querySelector("#release-date5").innerHTML = "Released: " + data.results[6].released),
        (this.document.querySelector("#genre5").innerHTML = "Rating: " + data.results[6].rating + " /5")
      )
    );
}

//game 6

getGameName6();
async function getGameName6() {
  //url for raw dog + the api key
  const apiKey = "b6784beccad4403ebf6711c876238b8e";
  const url = `https://rawg.io/api/games?token&key=${apiKey}`;

  //data.results[0].name
  const response = await fetch(url);
  await response
    .json()
    .then(
      (data) => (
        (this.document.querySelector("#game10").innerHTML =
          data.results[0].name),
        (this.document.querySelector("#release-date").innerHTML =
          "Released " + data.results[0].released),
        (this.document.querySelector("#genre").innerHTML =
          "Rating " + data.results[0].rating + " /5")
      )
    );
  }


    //if user clicks .card div(game item)
    $(".card").click(function () {
      let products = [];

      //populates the products array with current products info
      if (localStorage.getItem("items")) {
        products = JSON.parse(localStorage.getItem("items"));

        // var itemNumber = product.lenght;
      }

      const itemElement = $(this).find(".card-text").text(); //price
      
      const itemPrice = itemElement.split("$")[1]; // price without  '$'
     
      const itemName = $(this).find(".card-title").text(); //product name
      //const pricetotal = itemElement;

      //check if the item is alreadyin the cart
      let itemExist = false;

      products.forEach((product) => {
        if (product.name === itemName) {
          itemExist = true;
          product.quantity += 1;

          
        }
      });

      //if the item is not in the cart, add it to the cart
      if (!itemExist) {
        products.push({
          name: itemName,
          price: itemPrice,
          quantity: 1,
        });
        
      }

      //updates the shopping cart button when the add item button is cliced
      var itemQty4 = 0;

      products.forEach((item) => {
        itemQty4 = itemQty4 + item.quantity;
      });
      $(".numberOfItems").html(itemQty4);

      

      //save the product array to local storage
      localStorage.setItem("items", JSON.stringify(products));
      //open shoppingCartButton.html and update numberOfItems
    }); //end of click card function
  }, 4000);
};


$(document).ready(
  function () {

 var itemQty = 0;

    // when the user clicks the shopping cart button, update .modal-body with the items in the cart

    $(".buttonWrapper").click(function () {
      
      
      if (localStorage.getItem("items")) {
        products = JSON.parse(localStorage.getItem("items"));

        let modalBody = $(".modal-body");
        modalBody.empty(); // empty the initial contents of modal body before adding new items
        // render products name, price, and quantity

        products.map((product) => {
          //calls the updateTotal() which updates price total on the button wrap toggle button
          updateTotal();
         // updateItems();

          modalBody.append(
            `<div class="productWrapper" id="${product.name}">
                <div id="productInfo">
                  <div class="name">${product.name} - $${product.price}/item</div>

                <div class="quantity">x ${product.quantity}</div>
                </div>
                <div id="actions">
                  <button class="btn btn-primary increaseQuantity" id="${product.name}">
                    +
                  </button>
                  <button class="btn btn-danger decreaseQuantity" id="${product.name}">
                    -
                  </button>  
              </div>`
          );
           
        });
 
      //finding the total price of the items in the shopping cart
        var priceTotal1 = 0;
        products.forEach((item) => {
          priceTotal1 = priceTotal1 + parseInt(item.price) * item.quantity;
        });
// finding the total amount of items in the cart
        var itemQty = 0;
      
        products.forEach((item) => {
        itemQty = itemQty + item.quantity;
          
        });

        //this pushes the price total variable to display on the modal footer
        //this took a lot of research...div elements are not the same as html elements so have to use
        //this funciton instead of  .innerhtml
        
        //increase button functionality
        $(".increaseQuantity").click(function () {
          // get the id attribute of the button
          let productName = $(this).attr("id");

          // match the productName to the selected item inside products array
          let product = products.find(
            (product) => product.name === productName
          
          );


// update total number of items in the shopping cart when the increase button is clicked
var itemQty2 = 0;

products.forEach((item) => {
  itemQty2 = itemQty2 + item.quantity;
  
});

//adds on to itemQty2
itemQty2++
 //upddates the the numberof items w the variable itemQt2
$(".numberOfItems").html(itemQty2);

//initialize fire base and save to firebase
saveTotalItemsFire();
const db = firebase.firestore();
db.collection("totalItems").doc("1hDGHApbeLOaEnIXN4wN").update({
  itemQuantity: itemQty2,
});
          
          // then increase the selected item quantity by 1
          product.quantity++;
          product.itemQty++;

          // update the quantity div's text - go up to productWrapper level, and then find the div with .quantity class
          $(this)
            .closest(".productWrapper") // get the closest productWrapper div
            .find(".quantity") // get the quantity div
            .text(`x ${product.quantity}`) // update the text of the quantity
            .find(".total")

            .find(".priceTotal")
            .text(`${product.priceTotal1}`)
            .find(".itemQty")
            .text(`${product.itemQty}`)
        
          updateTotal();
//this function updates the total items when increased is clicked and when the close button is  clicked which then  item quantity on shop modal is
//updated
$(".close").click(function () {
  
$(".numberOfItems").text(itemQty2);
});

          
          // update the items in localStorage
          localStorage.setItem("items", JSON.stringify(products));
        });


        //Decrease button functionality
        $(".decreaseQuantity").click(function () {
          if (firebase.apps.length == 0) {
            firebase.initializeApp(firebaseConfig);
          }
          // get the id attribute of the button
          let productName = $(this).attr("id");
          // match the productName to the selected item inside products array
          let product = products.find(
            (product) => product.name === productName
          );
          // then decrease the selected item quantity by 1
          if (product.quantity <= 0) {
            product.quantity = 0;
          } else {
            product.quantity--;
          }

          // function for updating the total number of items in the cart when decrease button is clicked
          var itemQty3 = 0;

          products.forEach((item) => {
            itemQty3 = itemQty3 - item.quantity;
           
          });
          //removes the negative sign form item
          itemQty3 *= -1;
         
         

          $(".numberOfItems").html(itemQty3);

          //saves the itemQty to firestore on decrease
          saveTotalItemsFire();
          //initialize fire base and save to firebase
          saveTotalItemsFire();
          const db = firebase.firestore();
          db.collection("totalItems").doc("1hDGHApbeLOaEnIXN4wN").update({
            itemQuantity: itemQty3,
          });

          // update the items in localStorage
          localStorage.setItem("items", JSON.stringify(products));

          // update the quantity div's text - go up to productWrapper level, and then find the div with .quantity class
          $(this)
            .closest(".productWrapper") // get the closest productWrapper div
            .find(".quantity") // get the quantity div
            .text(`x ${product.quantity}`); // update the text of the quantity

          //calls the updateTotal() which updates price total on decrease button */
          updateTotal();

          //when the close box is clicked the shopping cart item total is is updated
          $(".close").click(function () {
            
            $(".numberOfItems").html(itemQty3);
          });

          // update the items in localStorage
          localStorage.setItem("items", JSON.stringify(products));
        });

        

        //update total function
        $("#checkoutTotal2").html("$ Total: " + priceTotal1);

        function updateTotal() {
          var priceTotal1 = 0;
          products.forEach((item) => {
            priceTotal1 = priceTotal1 + parseInt(item.price) * item.quantity;
          });

          $("#checkoutTotal").html("$ Total: " + priceTotal1);
          $("#checkoutTotal2").html("$ Total: " + priceTotal1);
        }
       


        
        

        localStorage.setItem("items", JSON.stringify(products));
       
        // Your web app's Firebase configuration

        // For Firebase JS SDK v7.20.0 and later, measurementId is optional

        const firebaseConfig = {
          apiKey: "AIzaSyDm3ibkwIyj2cP4bTMlwtmoZ0z_QIuHJjE",

          authDomain: "davisproject2-af99a.firebaseapp.com",

          databaseURL:
            "https://davisproject2-af99a-default-rtdb.firebaseio.com",

          projectId: "davisproject2-af99a",

          storageBucket: "davisproject2-af99a.appspot.com",

          messagingSenderId: "1025834514468",

          appId: "1:1025834514468:web:30991c512d4f0aa6ff80b1",

          measurementId: "G-Y2R1V7RZSD",
        };
        
        //initialize the firebase app
        //had to make an if statement to make sure the firebase initialization wasnt called more than once
        //which is was and was throwing an error
        if (firebase.apps.length == 0) {
          firebase.initializeApp(firebaseConfig);
        }

        //reference for our database
        const contactFormDB = firebase.database().ref("DavisProject2");
        const db = firebase.firestore();

        /*  db.collection('DavisProject2').get().then((snapshot)=>{
        console.log(snapshot.docs);
        }) */
        //saving itemQty to firestore db not realtime db
        //update the doc itemQty in fire basse
        db.collection("totalItems").doc("1hDGHApbeLOaEnIXN4wN").update({
          itemQuantity: itemQty,
        });

        document
          .getElementById("contactForm")
          .addEventListener("submit", submitForm);
        //when btn submitted the function for sending the email will be called
        document
          .getElementById("contactForm")
          .addEventListener("submit", emailSend);
        //this function will reset total price and qty
        document
          .getElementById("contactForm")
          .addEventListener("submit", resetTotals);

        //resetTotals function
        function resetTotals() {
          $("#checkoutTotal").html("$ Total: 0.00");
          $("#checkoutTotal2").html("$ Total: 0.00");

          //modal reset
          var message = "Your cart is empty";
          modalBody.empty();
          modalBody.append(message);
        }

        function emailSend(e, priceTotal1) {
          e.preventDefault();
          var pricetotal = "$ " + priceTotal1;
          var name = document.getElementById("name").value;
          var address = document.getElementById("address").value;
          var email = document.getElementById("email").value;
          var ccard = document.getElementById("creditCard").value;
          var subject = "Your Order Has Been Processed!";
          var body =
            "Thank You for your Order<br>  " +
            name +
            address +
            "Phone: " +
            phone +
            "Total" +
            pricetotal +
            "<br>" +
            " Visa " +
            ccard +
            " Your item(s) will be shipped shipped in 2 business days";

          // cardHide(ccard);
          let cardMask = cardHide(ccard);

          function cardHide() {
            let hideNum = [];
            for (let i = 0; i < ccard.length; i++) {
              if (i < ccard.length - 4) {
                hideNum.push("x");
              } else {
                hideNum.push(ccard[i]);
              }
            }
            let cardMask = hideNum.join("");

            return cardMask;
          }
          

          Email.send({
            SecurityToken: "9e8d2429-1e93-449c-a964-2516f136fe45",
            Host: "smtp.gmail.com",
            Username: "evensplitns@gmail.com",
            Password: "loxsjktvmxuappyg",
            creditCard: cardMask,
            To: email,
            From: "evensplitns@gmail.com",
            Subject: subject,
            Body: body,
          }).then((message) => alert(message));

          alert("Your payment has been processed, Thank you");
          document.getElementById("contactForm").reset();
        }
        console.log(priceTotal1 + "this is the total price being send to db");
        //function to submit form
        function submitForm(e) {
          e.preventDefault();

          var name = getElementVal("name");
          var email = getElementVal("email");
          var address = getElementVal("address");
          var phone = getElementVal("phone");
          var creditCard = getElementVal("creditCard");
          var nameOnCard = getElementVal("nameOnCard");
          var totalPrice = "$" + priceTotal1;

          //save data to firebase
          saveMessage(
            name,
            email,
            address,
            phone,
            creditCard,
            nameOnCard,
            totalPrice
          );
        }

        //function to get form values
        function getElementVal(id) {
          return document.getElementById(id).value;
        }
        //save form data to firebase
        function saveMessage(
          name,
          email,
          address,
          phone,
          creditCard,
          nameOnCard,
          totalPrice
        ) {
          var newContactForm = contactFormDB.push();
          newContactForm.set({
            name: name,
            email: email,
            phone: phone,
            address: address,
            creditCard: creditCard,
            nameOnCard: nameOnCard,
            totalPrice: totalPrice,
          });
          
        }
      }
    });
  

} //end of document.ready function
);

//displays the payment details when btnCheckout button is clicked
btnCheckout.addEventListener("click", function () {
  let show = document.getElementById("container2");
  if (show.style.display === "none") {
    show.style.display = "block";
  
  }
});

// removes the payment details when btnCheckout2 is clicked
btnCheckout2.addEventListener("click", function () {
  let show = document.getElementById("container2");
  show.style.display = "none";
});

//Game 1 Show
document.getElementById("game1").addEventListener("click", myToast);
function myToast() {
  let myAlert = document.querySelector(".toast");
  let bsAlert = new bootstrap.Toast(myAlert);
  bsAlert.show();
  
}

//Game 2 Show
document.getElementById("game2").addEventListener("click", myToast2);
function myToast2() {
  let myAlert = document.querySelector("#toast2");
  let bsAlert = new bootstrap.Toast(myAlert);
  bsAlert.show();
}

//Game 3 Show
document.getElementById("game3").addEventListener("click", myToast3);
function myToast3() {
  let myAlert = document.querySelector("#toast3");
  let bsAlert = new bootstrap.Toast(myAlert);
  bsAlert.show();
}

//Game 4 Show
document.getElementById("game4").addEventListener("click", myToast4);
function myToast4() {
  let myAlert = document.querySelector("#toast4");
  let bsAlert = new bootstrap.Toast(myAlert);
  bsAlert.show();
}


//Game 45 Show
document.getElementById("game5").addEventListener("click", myToast4);
function myToast4() {
  let myAlert = document.querySelector("#toast5");
  let bsAlert = new bootstrap.Toast(myAlert);
  bsAlert.show();
}






//initialize firebase app funtions
 
function saveTotalItemsFire(){
  const firebaseConfig = {
    apiKey: "AIzaSyDm3ibkwIyj2cP4bTMlwtmoZ0z_QIuHJjE",

    authDomain: "davisproject2-af99a.firebaseapp.com",

    databaseURL: "https://davisproject2-af99a-default-rtdb.firebaseio.com",

    projectId: "davisproject2-af99a",

    storageBucket: "davisproject2-af99a.appspot.com",

    messagingSenderId: "1025834514468",

    appId: "1:1025834514468:web:30991c512d4f0aa6ff80b1",

    measurementId: "G-Y2R1V7RZSD",
  };
  //initialize the firebase app

  if (firebase.apps.length == 0) {
    firebase.initializeApp(firebaseConfig);
  }

  


};




$(".text-muted").html("Just Now");

