var data = {
  theme: {
    recentlyViewed: {
      productInfo: {
        product1: {
          title: "Organic Cotton Pyjama1",
          price: 13500,
          type: "tops",
          images: [
            "https://cdn.shopify.com/s/files/1/0283/1338/7053/products/NCBW-0136-NCTW-0417-n-p-black_1_360x.jpg?v=1606315778",
          ],
        },
        product2: {
          title: "Organic Cotton Pyjama2",
          price: 13500,
          type: "tops1",
          images: [
            "https://cdn.shopify.com/s/files/1/0283/1338/7053/products/NCBW-0136-NCTW-0417-n-p-black_1_360x.jpg?v=1606315778",
          ],
        },
        product3: {
          title: "Organic Cotton Pyjama3",
          price: 13500,
          type: "tops2",
          images: [
            "https://cdn.shopify.com/s/files/1/0283/1338/7053/products/NCBW-0136-NCTW-0417-n-p-black_1_360x.jpg?v=1606315778",
          ],
        },
        product4: {
          title: "Organic Cotton Pyjama4",
          price: 13500,
          type: "tops3",
          images: [
            "https://cdn.shopify.com/s/files/1/0283/1338/7053/products/NCBW-0136-NCTW-0417-n-p-black_1_360x.jpg?v=1606315778",
          ],
        },
        product5: {
          title: "Organic Cotton Pyjama5",
          price: 12500,
          type: "tops4",
          images: [
            "https://cdn.shopify.com/s/files/1/0283/1338/7053/products/NCBW-0136-NCTW-0417-n-p-black_1_360x.jpg?v=1606315778",
          ],
        },
        product6: {
          title: "Organic Cotton Pyjama6",
          price: 12500,
          type: "tops5",
          images: [
            "https://cdn.shopify.com/s/files/1/0283/1338/7053/products/NCBW-0136-NCTW-0417-n-p-black_1_360x.jpg?v=1606315778",
          ],
        },
      },
      recent: {
        product1: {
          aspectRatio: "131",
        },
        product2: {
          aspectRatio: "131",
        },
        product3: {
          aspectRatio: "131",
        },
        product4: {
          aspectRatio: "131",
        },
        product5: {
          aspectRatio: "131",
        },
        product6: {
          aspectRatio: "131",
        },
      },
    },
  },
};

var newsletter = document.querySelector("#shopify-section-global-newsletter");
var npmInsta = document.querySelector(".np-home-insta-galery");
var recentlyViewed = document.createElement("section");
var headline = document.createElement("h2");
var arrowWrapper = document.createElement("div");
var slideRight = document.createElement("span");
var slideLeft = document.createElement("span");
var items = document.createElement("div");

function checkKeyExist(obj) {
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}
function renderRecentlyViewed(product) {
  var column = document.createElement("div");
  var picture = document.createElement("picture");
  var image = document.createElement("img");
  var title = document.createElement("h3");
  var type = document.createElement("h4");
  var price = document.createElement("p");

  items.setAttribute("class", "recently-viewed__items");
  column.setAttribute("class", "recently-viewed__column");
  image.setAttribute("src", product.images[0]);
  image.setAttribute("alt", product.title);
  image.setAttribute("class", "recently-viewed__column__img");
  title.setAttribute("class", "recently-viewed__column__title");
  title.textContent = product.title;
  type.setAttribute("class", "recently-viewed__column__type");
  type.textContent = product.type;
  price.setAttribute("class", "recently-viewed__column__price");
  price.textContent = product.price;

  column.appendChild(picture);
  picture.appendChild(image);
  column.appendChild(title);
  column.appendChild(type);
  column.appendChild(price);

  items.appendChild(column);
}
function writeCss() {
  var cssRules =
    '*,:after,:before{box-sizing:border-box}h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.recently-viewed{max-width:700px;margin:20px auto;transition:all .3s}.recently-viewed__headline{text-align:center;padding:20px;text-transform:uppercase;font-size:24px}.recently-viewed__arrow-wrapper{display:none;justify-content:flex-end}.recently-viewed__arrow{width:30px;height:30px;background:#fff;border-radius:50%;margin:0 5px;position:relative;cursor:pointer;border:2px solid gray;transition:all .3s}.recently-viewed__arrow:hover{background:#000}.recently-viewed__arrow--left::after,.recently-viewed__arrow--right::after{content:"<";position:absolute;color:#000;top:50%;left:50%;transform:translate(-50%,-50%);font-size:24px;font-weight:700;transition:all .3s}.recently-viewed__arrow--right::after{content:">"}.recently-viewed__arrow--left:hover::after,.recently-viewed__arrow--right:hover::after{color:#fff}.recently-viewed__items{display:flex;flex-wrap:nowrap;overflow-x:auto;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}.recently-viewed__items::-webkit-scrollbar{display:none}.recently-viewed__column__img{width:100%;object-fit:cover}.recently-viewed__column__title{font-size:18px;line-height:24px}.recently-viewed__column__type{font-size:16px;padding:5px 0}.recently-viewed__column__price{font-size:14px}';
  var style = document.createElement("style");
  style.innerHTML = cssRules;
  npmInsta.parentNode.insertBefore(style, npmInsta.nextSibling);
}
function productScroll() {
  var productContainer = document.querySelector(".recently-viewed__items");
  var slider = document.querySelector(".recently-viewed__arrow-wrapper");
  var buttonRight = document.querySelector(".recently-viewed__arrow--right");
  var buttonLeft = document.querySelector(".recently-viewed__arrow--left");

  var productContainerWidth = productContainer.offsetWidth;
  var products = productContainer.children;
  var margin = 20,
    items = 0,
    totalItems = 0;

  var responsive = [
    { breakPoint: { width: 0, item: 2 } },
    { breakPoint: { width: 699, item: 4 } },
  ];

  function load() {
    var responsiveLength = responsive.length;
    for (var i = 0; i < responsiveLength; i++) {
      if (window.innerWidth > responsive[i].breakPoint.width) {
        items = responsive[i].breakPoint.item;
      }
    }
    start();
  }
  function start() {
    var totalProducts = products.length;
    var columnWidth = 0;
    for (var i = 0; i < totalProducts; i++) {
      columnWidth = productContainerWidth / items - margin;
      products[i].style.flex = "0 " + "0 " + columnWidth + "px";
      products[i].style.margin = margin / 2 + "px";
      totalItems++;
    }
    var totalSlides = Math.ceil(totalItems / items);
    if (totalSlides > 1) {
      slider.style.display = "flex";
      buttonLeft.addEventListener("click", function () {
        productContainer.scrollLeft -= columnWidth + margin / 2;
      });

      buttonRight.addEventListener("click", function () {
        productContainer.scrollLeft += columnWidth + margin / 2;
      });
    }
  }
  load();
}

if (checkKeyExist(window, "theme", "recentlyViewed", "recent")) {
  var recentViewedItems = window.theme.recentlyViewed.recent;
  var productInfo = window.theme.recentlyViewed.productInfo;
  var count = 0;
  for (var productKey in recentViewedItems) {
    if (productInfo[productKey]) {
      renderRecentlyViewed(productInfo[productKey]);
      count++;
    }
  }
  if (count > 0) {
    recentlyViewed.setAttribute("class", "recently-viewed");
    headline.setAttribute("class", "recently-viewed__headline");
    headline.textContent = "Recently Viewed";
    recentlyViewed.appendChild(headline);
    arrowWrapper.setAttribute("class", "recently-viewed__arrow-wrapper");
    slideRight.setAttribute(
      "class",
      "recently-viewed__arrow recently-viewed__arrow--right"
    );
    slideLeft.setAttribute(
      "class",
      "recently-viewed__arrow recently-viewed__arrow--left"
    );
    arrowWrapper.appendChild(slideLeft);
    arrowWrapper.appendChild(slideRight);
    recentlyViewed.appendChild(arrowWrapper);
    recentlyViewed.appendChild(items);
    newsletter.parentNode.insertBefore(
      recentlyViewed,
      newsletter.previousSibling
    );
    writeCss();
    productScroll();
  }
}
