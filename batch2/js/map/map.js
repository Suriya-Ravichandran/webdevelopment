 const product = new Map();

    function deleteproduct(key) {
    product.delete(key);
    productlist();
    }

    function productlist() {
    const productListElement = document.getElementById("productlist");
    let html = "";

    for (const [key, value] of product) {
        html += `
        <li class="list-group-item">
            Name: ${value.pname}, Price: ${value.price}, Quantity: ${value.quantity}
            <button class="btn btn-danger ms-2" onclick="deleteproduct('${key}')">Delete</button>
        </li>`;
    }
    productListElement.innerHTML = html;
    }

    function addproduct() {
      const productname = document.getElementById("productname").value.trim();
      const price = document.getElementById("price").value.trim();
      const quantity = Number(document.getElementById("quantity").value);

      if (productname && price && quantity > 0) {
        product.set(productname, { pname: productname, price: price, quantity: quantity });
        console.log(product);
        productlist();
      } else {
        alert("Please enter valid product details.");
      }
    }




