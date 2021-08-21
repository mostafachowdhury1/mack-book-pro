
const extramemory=document.getElementById("extra-momory-cost")
// // ssd
const ssdprice=document.getElementById("extra-ssd-price")

// delivery
const deliveryCost=document.getElementById("delivery-cost")

// leptop price

const leptopPrice=document.getElementById("leptop-price")

// total price 
const totalprice=document.getElementById("total-price")

// footer total price with discount all price
const totalPriceWithDiscount=document.getElementById("all-price")


// ////////////////////////////////////////memory 

document.getElementById("memory-price-8gb").addEventListener("click",function(){
  extramemory.innerText='0';
  updatebalance()
})


document.getElementById("memory-price-16gb").addEventListener("click",function(){
    extramemory.innerText='180';
    updatebalance()
  })


  // ///////////////////////////////ssd 

  document.getElementById("ssd-price-small").addEventListener('click',function(){

    ssdprice.innerText=0;
    updatebalance()

  })


  document.getElementById("ssd-price-medium").addEventListener('click',function(){

    ssdprice.innerText=100;
    updatebalance()

  })


  document.getElementById("ssd-price-1tb").addEventListener('click',function(){

    ssdprice.innerText=180;
    updatebalance()

  })
// //////////////////////////////////// deliver

  document.getElementById("free-delivery").addEventListener("click",function() {
      deliveryCost.innerText="0"
      updatebalance()
  })

  document.getElementById("premium-delivery").addEventListener("click",function() {
    deliveryCost.innerText="20"
    updatebalance()
})

  //////////////////////////////    updatebalance

function updatebalance() {
    const leptop=leptopPrice.innerText="1299";
    let parseleptop=parseFloat(leptop)
    const deliver=parseFloat(deliveryCost.innerText)
    const memory=parseFloat(extramemory.innerText)
    const storage=parseFloat(ssdprice.innerText)
    totalprice.innerText=parseleptop+ memory+storage +deliver;
    
    totalPriceWithDiscount.innerText=parseleptop+ memory+storage +deliver;
    discuntbalance()
}

//////////////// promo and discount

 function discuntbalance(){
  const promo=document.getElementById("promo-input")
  apply.addEventListener("click",function (event) {
    event.preventDefault()
    let totalbalance=parseFloat(totalprice.innerText)
    let discountamount=20;
   
    const totalP= totalbalance-(totalbalance*(discountamount)/100)
   
     
    if(promo.value=="stevekaku"){
   
   totalPriceWithDiscount.innerText=totalP;
   
    promo.value="";
    
    }
 
    else{
      console.log("wrong code")
      promo.value="";
    }
  })

 }