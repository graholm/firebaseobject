addListItem("product-list", {name: "cool thing",           price:"5",
picture: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg"
                          
                            
                            })

onNewListItem("product-list", function(product) {
  console.log(product.picture)
  
var newDiv = $("<div>"+product.price+"</div>")
  var nameHeader = $("<h1 class='product-name'>" + product.name + "</h1>")
  var image = $("<img class='product-image'>").attr("src", product.picture)  
  

  $(".product-list-container").append(newDiv, nameHeader, image)
})