import { products } from './data/products.js';


const button = document.getElementById('btn');
const cartItems = document.getElementById('modal-content')

function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 2000);
    });
}

const drawProducts = () => {
    fetchProducts()
        .then(res => JSON.parse(res))
        .then(products => {
            let markupArray = products.map(item => createProduct(item));
            let container = document.createElement('div');
            container.classList.add('container');
            container.append(...markupArray);
            document.body.appendChild(container)
            console.log(document.body);
        });
}

const createProduct = ({ name, src, price }) => {
    let productItem = document.createElement('div');
    productItem.classList.add('productItem')

    let div = document.createElement('div');
    div.classList.add('productCont')

    let imgDiv = document.createElement('div');
    // image.setAttribute('background-image', ``);
    imgDiv.style.backgroundImage = `url('${src}')`
    imgDiv.classList.add('image')

    let spanDiv = document.createElement('div');
    spanDiv.classList.add('spanDiv')

    let productTitle = document.createElement('span');
    productTitle.innerText = name;
    productTitle.classList.add('productTitle')

    let productPrice = document.createElement('span');
    productPrice.innerText = price;
    productPrice.classList.add('productPrice')

    let addToCart = document.createElement('button');
    addToCart.classList.add('addToCart')
    addToCart.innerText = 'ADD TO CART'
    addToCart.addEventListener('click', (event) => {
        const targetItem = event.target.parentElement.parentElement;
        const clone = targetItem.cloneNode(true)
        cartItems.appendChild(clone);
    })

    productItem.append(div,);

    div.append(imgDiv,spanDiv,addToCart);
    spanDiv.append(productTitle,productPrice)

    return productItem;
}

drawProducts()

let filterInput = document.getElementById('filter');

filterInput.addEventListener('input', (event) => {
    let searchInput = event.target.value;
    let container = document.querySelector('.container')
    let list = [...container.children];

    if (searchInput.length) {
        list = list.map(user => {
            let content = user.innerText;

            if(!content.includes(searchInput)) {
                user.style.display = 'none';
            } else {
                user.style.display = 'block';
            }
            return user;
        })
        container.innerHTML = '';
        container.append(...list)
    } else {
        list.map(user => {
            user.style.display = 'block';
            return user;
        })
    }
})

let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


