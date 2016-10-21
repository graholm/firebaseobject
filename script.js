addListItem("product-list", {name: "cool goat",           price:"2000000",
picture: "https://66.media.tumblr.com/avatar_f2d49cb25615_128.png"
})

onNewListItem("product-list", function(product) {
  console.log(product.picture)
  
var newDiv = $("<div>"+product.price+"</div>")
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", product.picture)  
  

  $(".product-list-container").append(newDiv, nameHeader, image)
})