// Mkulima Platform
// Mkulima is new Kenyan business-to-business (B2B) agro-startup focusing on connecting grocery vendors to rural farmers. This is through their online marketplace where farmers can trade vegetables and fruits with grocery vendors. To begin with, farmers have to register on the platform and login. Thereafter, they can upload their products with respective prices. On the other hand, grocery vendors can signup and login to the platform to place their bulk order requests. 

// Create a class Mkulima that will keep a list of farms, grocery vendors and products. A single farm record should contain id, farm name, farmer, phone number and address. A single grocery vendor record should contain id, store name and phone number. A product should have id, name and price fields. 

// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity



  class Mkulima {
  
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.addFarm= function(farmId,name,farmer,phone,address){
            this.farms.push({farmId,name,farmer,phone,address})
      }
      this.removeFarm=function(id){
         let accessFarm= this.farms.find(item=>item.farmId===id)
         let farmIndex=this.farms.indexOf(accessFarm)
         this.farms.splice(farmIndex,1)
      }
      this.updateFarm=function(oldId,newFarmId, newName, newFarmer, newPhone, newAddress){
              let accessFarm= this.farms.find(item=>item.farmId===oldId)
              accessFarm.farmId = newFarmId
              accessFarm.name=newName
              accessFarm.farmer=newFarmer
              accessFarm.phone=newPhone
              accessFarm.address=newAddress
      }
      this.getFarm=function(id){
          console.log(this.farms.find(object=>object.farmId===id))
      }
      this.addProduct= function(productId,name,price){
          this.products.push({productId,name,price})
    }
    this.removeProduct=function(id){
       let productIndex= this.products.findIndex(item=>item.productId===id)
       this.farms.splice(productIndex,1)
    }
    this.updateProduct=function(oldId,newId, newProductName, newPrice){
            let product= this.products.find(item=>item.productId===oldId)
            product.productId=newId
            product.name=newProductName
            product.price=newPrice
    }
    this.getProduct=function(id){
      console.log(this.products.find(product=>product.farmId===id))
     }
  
  
    this.printProducts=function(){
      console.log(this.product)
     }
     this.calculateOrderCost=function(id,quantity){
      let product= this.products.find(item=>item.productId===id)
      console.log(`For ${quantity} of ${product.name}, the cost of your order is ${product.price*quantity}`)
      this.orders.push(product)
      this.order
  
     }
  }
  }
  
  let mkulimaPlatform= new Mkulima()
  mkulimaPlatform.addFarm("B13J2HA","Maize farm","Ntinyari","0767895433","Meru,Muthara");
  mkulimaPlatform.addFarm("F34L20HA","Coffee farm","Cheru","0780986754","Tigoni, Limuru");
  
  
  mkulimaPlatform.updateFarm("B13J2HA","P26N30HA","Millet farm", "Nina","0789765412","Nyahururu, Swera");
  
  console.log(mkulimaPlatform.farms);
  
  mkulimaPlatform.getFarm("P26N30HA");

  mkulimaPlatform.addProduct("67wm","Sorghum", 3400);
  console.log(mkulimaPlatform.products);

  mkulimaPlatform.updateProduct("67wm","89k","Wheat",5500);
  console.log(mkulimaPlatform.products);

  mkulimaPlatform.removeFarm("P26N30HA");
  console.log(mkulimaPlatform.farms);

  
  
