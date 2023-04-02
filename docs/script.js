/*
  All variable functions are been called at the buttom of the code
*/

// Getting the light box element properties
const lightBox = document.querySelector('.light-box'); 
const lightBoxCloseIcon = document.querySelector('.light-box-close-icon');

// Getting both the product image at the page and on the light box
const mainPageProductImage = document.querySelector('.main-page-product-image'); 
const lightBoxProductImage = document.querySelector('.lightBox-box-product-image'); 

// Getting all the elements that will active as the active class for the image thumbnails on the page
const active = document.querySelectorAll('.active');

// Getting all the elements that will active as the active class for the image thumbnails on the light element page 
const lightBoxActive = document.querySelectorAll('.active2')

// Getting all the image thumbnails
const imageThumbnail = document.querySelectorAll('.thumbnail');

// Getting the next and previous buttons on both decktop and mobile
const nextBtn = document.querySelectorAll('.next-btn');
const previousBtn = document.querySelectorAll('.previous-btn');

// Accessing the element that will store the number of items selected
const numberOfItem = document.querySelector('.number-of-item');

// Buttons to add and substract the number of items selectd
const addBtn = document.querySelector('.add-btn');
const minusBtn = document.querySelector('.minus-btn');

// Accessing all cart elements
const cart = document.querySelector('.cart');
const cartIcon = document.querySelector('.cart-icon');
const cartItemImage = document.querySelector('.cart-item-image');
const cartItemTitle = document.querySelector('.cart-item-title');
const cartItemPrice = document.querySelector('.cart-item-price');
const cartItemTotalPrice = document.querySelector('.cart-item-total-price');
const deletIcon = document.querySelector('.delete-icon');
const cartEmpty = document.querySelector('.cart-empty');
const itemContainer = document.querySelector('.item-container');

// Accessing the text contents of the item properties
const itemTitle = document.querySelector('.item-title');
const itemPrice = document.querySelector('.item-price');
const addItemBtn = document.querySelector('.add-item-btn');
const itemNumberIndicator = document.querySelector('.cart-icon-container');

// Getting the nav properties
const navIcon = document.querySelector('.nav-icon');
const navCloseIcon = document.querySelector('.nav-close-icon');
const navMenu = document.querySelector('.nav-menu');
const navContainer = document.querySelector('.nav-container');

// Setting the current items selected number
let itemNumber = 0;

// Setting all the product image alt attribute and the src attribute to an array of object
const productImages = [
  {
    alt: 'image-product-1',
    src: '../images/image-product-1.jpg'
  },
  {
    alt: 'image-product-2',
    src: '../images/image-product-2.jpg'
  },
  {
    alt: 'image-product-3',
    src: '../images/image-product-3.jpg'
  },
  {
    alt: 'image-product-4',
    src: '../images/image-product-4.jpg'
  },
];

[product1, product2, product3, product4] = productImages; // Destructuring the product image array

// An variable function to show the cart
const showCart = () => {
  cartIcon.addEventListener('click', () => {
    cart.classList.toggle('hidden');
  })
}

// A variable function to show the light box
const showLightBox = () => {
  mainPageProductImage.addEventListener('click', () => {
    lightBox.classList.remove('invisible');
  })
}

// A variable function to hide the light box
const hideLightBox = () => {
  lightBoxCloseIcon.addEventListener('click', () => {
    lightBox.classList.add('invisible');
  })
}

// A variable function to set the active state of the light box thumbnail images
const setActiveState = ([e, set]) => {
  /* 
    Set active by removing the hidden class from the DOM list of the active elements by their index and when set is true an.
    Then add the hidden class if set is false (which means not the current thumbnail image so it is false)
  */
  set && active[e].classList.toggle('hidden'); 
  !set && active[e].classList.add('hidden');

  set && lightBoxActive[e].classList.toggle('hidden');
  !set && lightBoxActive[e].classList.add('hidden');
}

// A variable function to set the product images from the product image array
const setProductImage = ([alt, src]) => {
  mainPageProductImage.setAttribute('alt', `${alt}`);
  mainPageProductImage.setAttribute('src', `${src}`);

  lightBoxProductImage.setAttribute('alt', `${alt}`);
  lightBoxProductImage.setAttribute('src', `${src}`);
}

// A variable function to meet the conditions before sending values to setProductImage function
const conditionToSetProductImage = (e) => {

  /* 
    Check if the src attribute of the prop passed in includes the string
    Basically this can be done by matching the ids of the product images if specified or getting from a database
    Then if match send the values from the destructured product image array from the corresponding matchs
    And also setting the active state element by passing the true with the right index of the active element then setting the rest to false
  */

  if(e.currentSrc.includes('product-1')) {

    setProductImage([product1.alt, product1.src])
    setActiveState([0, true]);
    setActiveState([1, false]);
    setActiveState([2, false]);
    setActiveState([3, false]);

  } else if(e.currentSrc.includes('product-2')) {
    
    setProductImage([product2.alt, product2.src])
    setActiveState([1, true]);
    setActiveState([0, false]); 
    setActiveState([2, false]);
    setActiveState([3, false]);

  } else if(e.currentSrc.includes('product-3')) {

    setProductImage([product3.alt, product3.src])
    setActiveState([2, true]);
    setActiveState([0, false]);
    setActiveState([1, false]);
    setActiveState([3, false]);

  } else if(e.currentSrc.includes('product-4')) {

    setProductImage([product4.alt, product4.src])
    setActiveState([3, true]);
    setActiveState([0, false]);
    setActiveState([1, false]);
    setActiveState([2, false]);

  } else {
    alert(`Image wasn't uploaded`);
  }
}

/* 
  A variable function to get the thumbnail images with for each loop to add click evens on each of the thumbnail images
  Then passing the thumbnail image to the condition function to get the src attribute for the match
*/
const getThumbnailImage = () => {
  imageThumbnail.forEach(img => {
    img.addEventListener('click', () => {
      conditionToSetProductImage(img)
    })
  })
}

// A function to get the next image src and alt attributes when the next icon is clicked
const nextImageBtn = () => {
  // forEach loop is used becacuse the next icon class is added to more than one element(which means more occurrance of the next icon)
  nextBtn.forEach(btn => btn.addEventListener('click', () => {
    /*
      set the image alt attribute value to a alt variable, 
      to used to find the index of it in the product image array
    */
    let alt = lightBoxProductImage.getAttribute('alt');
    let index = productImages.findIndex(items => items.alt === alt); // finding the index
    let currentImage = index; // setting the index of the matching alt to be the current index

    // checking if the current index is less than the lenght of the product image array as it will be nexting to the next image properties to set it to the light box image src and alt attribute values
    if(currentImage < productImages.length - 1) {
      currentImage++; // incrementing so to get the next properties of the product image array

      // getting the next values of the product image array by setting the incremented current image value as the index of the product image array
      let nextImage = productImages[currentImage];

      // converting the active element DOM node list to an array to get them by index
      let previousActiveThumbnail = Array.prototype.slice.call(active);

      // getting the previous image before the current one by setting the index to the current image index then substract by one to go to the previous index, returning the previous image
      let previousThumbnail = previousActiveThumbnail[currentImage - 1];

      // getting the index of the previous image before the current one, by finding the index of the previous image
      let previousThumbnailIndex = previousActiveThumbnail.indexOf(previousThumbnail);

      // sending the values of the next image as props to the setProductImage function to set the image
      setProductImage([nextImage.alt, nextImage.src]);

      // sending the index of the current image as a props with true as a second value to the setActiveState function set the current image thumbnail to the active state as well as the previous image index then setting the second value to false to remove the active state
      setActiveState([currentImage, true]);
      setActiveState([previousThumbnailIndex, false]);
    }
  }))
}

// A function to get the previous image src and alt attributes when the previous icon is clicked
const previousImageBtn = () => {
  // forEach loop is used becacuse the previous icon class is added to more than one element(which means more occurrance of the previous icon)
  previousBtn.forEach(btn => btn.addEventListener('click', () => {
    /*
      set the image alt attribute value to a alt variable, 
      to used to find the index of it in the product image array
    */
    let alt = lightBoxProductImage.getAttribute('alt');
    let index = productImages.findIndex(items => items.alt === alt);// finding the index
    let currentImage = index;// setting the index of the matching alt to be the current index

    // checking if the current index is greater than 0 as it will be nexting to the previous image properties to set it to the light box image src and alt attribute values
    if(currentImage > 0) {
      currentImage--;// decrementing so to get the previous properties of the product image array

      // getting the previous values of the product image array by setting the decremented current image value as the index of the product image array
      let previousImage = productImages[currentImage];

      // converting the active element DOM node list to an array to get them by index
      let previousActiveThumbnail = Array.prototype.slice.call(active);

      // getting the previous image before the current one by setting the index to the current image index then add by one to go to the previous index, returning the previous image
      let previousThumbnail = previousActiveThumbnail[currentImage + 1];

      // getting the index of the previous image before the current one, by finding the index of the previous image
      let previousThumbnailIndex = previousActiveThumbnail.indexOf(previousThumbnail);

      // sending the values of the previous image as props to the setProductImage function to set the image
      setProductImage([previousImage.alt, previousImage.src]);

      // sending the index of the current image as a props with true as a second value to the setActiveState function to set the current image thumbnail to the active state as well as the previous image index then setting the second value to false to remove the active state
      setActiveState([currentImage, true]);
      setActiveState([previousThumbnailIndex, false]);
    }
  }))
}

// A function to increment the selected items number
const addItem = () => {
  addBtn.addEventListener('click', () => {
    itemNumber++;
    numberOfItem.textContent = itemNumber; // then set it to number of items element
  })
}

// A function to decrement the selected items number
const minusItem = () => {
  minusBtn.addEventListener('click', () => {
    itemNumber > 0 && itemNumber--;
    numberOfItem.textContent = itemNumber; // then set it to number of items element
  })
}

// A function to add item to the cart
const addToCart = () => {
  let newItemImage = mainPageProductImage.getAttribute('src'); // getting the src attribute of the product image

  addItemBtn.addEventListener('click', () => {
    // setting a new item price from the item price element and the number of the selected items
    let newItemPrice = `${itemPrice.textContent} x ${itemNumber}`; 

    // using string method to return the item price number without the dollar symbol tp get only the number to be used to multiply the number of selected items to get the total price of the accumulated items
    let itemPriceNumber = itemPrice.textContent.slice(1, itemPrice.textContent.length - 3);

    // multiplying to get the total of the accumulated items
    let total = itemNumber > 0 ? itemPriceNumber * itemNumber : itemPriceNumber;

    cartItemImage.setAttribute('src', `${newItemImage}`); // setting the cart image from the newItemImage
    cartItemTitle.textContent = itemTitle.textContent; // setting the title to the title of the cart item
    cartItemPrice.textContent = newItemPrice; // setting the price of the cart item price
    cartItemTotalPrice.textContent = `$${total}.00`; // setting the total to the cart item total price
    itemNumberIndicator.textContent = itemNumber === 0 ? 1 : itemNumber; // setting the number of items in cart to the number indicator

    // setting every fields to defualts
    itemNumber = 0;
    numberOfItem.textContent = itemNumber;

    // to show the items in the cart
    itemContainer.classList.remove('hidden');

    // to hide the empty dis play from the cart
    cartEmpty.classList.add('hidden');
  })
}


// A function to check if the cart is empty then display the empty message
const cartContainer = () => {
  // to check if item is not empty by checking if the hidden class is not present then hide the empty message adding the hidden class to the empty message element, but if the cart is empty remove the hidden class from the empty message element
  if(!itemContainer.classList.contains('hidden')) {
    cartEmpty.classList.add('hidden');
  } else {
    cartEmpty.classList.remove('hidden');
  }
}

// A function to delete cart item by adding hidden class to it, then call the cartContainer function to determine which one to display
const deleteItem = () => {
  deletIcon.addEventListener('click', () => {
    itemContainer.classList.toggle('hidden');
    cartContainer();
    itemNumberIndicator.textContent = itemNumber;
  })
}

// functon to show nav menu
const showNav = () => {
  navIcon.addEventListener('click', () => {
    navContainer.classList.remove('hidden');
    
    if(navMenu.classList.contains('left-[-80%]')) {
      navMenu.classList.remove('left-[-80%]');
      navMenu.classList.add('left-[0%]');
    }
  })
}

//function to hide nav menu
const hideNav = () => {
  navCloseIcon.addEventListener('click', () => {
    navContainer.classList.add('hidden');
    
    if(navMenu.classList.contains('left-[0%]')) {
      navMenu.classList.remove('left-[0%]');
      navMenu.classList.add('left-[-80%]');
    }
  })
}

showCart();
showLightBox();
hideLightBox();
getThumbnailImage();
nextImageBtn();
previousImageBtn();
addItem();
minusItem();
addToCart();
deleteItem();
showNav();
hideNav();