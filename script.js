//addListItem("product-list", {name: "cool product"})

onNewListItem("product-list", function(product) {
  console.log(product.picture)
  
var newDiv = $("<div>"+product.price+"</div>")
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>"+product.picture+).attr("src", "http://pix.iemoji.com/images/emoji/apple/ios-9/256/thinking-face.png")  
  

  $(".product-list-container").append(newDiv, nameHeader, image)
})