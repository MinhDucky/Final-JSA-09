
let menulist= document.getElementById("menu-list")

// TẠO 1 ARRAY ĐỂ LƯU TRỮ DATA
let productStorage = []

fetch('./assets/js/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data.products)
        // GÁN  DANH SÁCH SẢN PHẨM VÀO productStorage
        productStorage = data.products
        console.log(productStorage)
        // IN RA SẢN PHẨM
        productStorage.forEach(element => {
            let li = document.createElement("li")
            li.innerHTML = `
            <div class="food-menu-card">

            <div class="card-banner">
              <img src="${element.imgLink}" width="300" height="300" loading="lazy"
                alt="Fried Chicken Unlimited" style="object-fit: cover !important; width: 300px; height: 300px !important;">

              <div class="badge">-15%</div>

              <button class="btn food-menu-btn">Order Now</button>
            </div>

            <div class="wrapper">

              <div class="rating-wrapper">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
            </div>

            <h3 class="h3 card-title">${element.name}</h3>

            <div class="price-wrapper">

              <p class="price-text">Price:</p>

              <data class="price">${element.price}</data>

              <del class="del" value="69.00">$69.00</del>

            </div>

          </div>
            `
            menulist.appendChild(li)
          })
      })
