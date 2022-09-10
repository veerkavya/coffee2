const hover=document.querySelectorAll(".hovbutton");
const menu=document.getElementsByClassName("menu")[0];

{
 const cart=document.getElementsByClassName("cu");
 var i=0;
 var costco=0;
 hover.forEach(function(e){
    e.addEventListener("click",function(){
        costco+=+(e.previousElementSibling.previousElementSibling.children[0].textContent);
        i+=1;
        if(i<=1){
            
            menu.insertAdjacentHTML("afterend",`<div class="cart">
            <h2 class="h3">My cart
            </h2>
            <button class="remove r1"><i class="fa-solid fa-xmark i9" ></i></button>
            <ul class="cu">

            </ul>
            <div class="ttp">
            <div class="tp">
              <p class="htp">Total price - <span class="cost">${costco}</span><button class="pay"><a href="./payment.html">Pay Now</a></button></p>
            </div>
            </div>
        </div>
        `)
        }
        const c=e.previousElementSibling.previousElementSibling;
        
        const img=e.parentElement.parentElement.nextElementSibling.getAttribute("src")
        const scost=document.getElementsByClassName("cost")[0];
        console.log(costco);
        scost.textContent=costco;
        console.log(c)
        cart[0].insertAdjacentHTML("beforeend",`<li><img class="il" src="${img}"><button class="plus">+</button><span class="contq">1</span><button class="minus">-</button><button class="remove"><i class="fa-solid fa-xmark i9" ></i></button></li>`);
        const imgl=document.getElementsByClassName("il")
        imgl[imgl.length-1].insertAdjacentHTML("afterend",`${c.innerHTML}`);
        console.log(cart[0])
        const remove1=document.querySelectorAll(".remove");
        console.log(remove1)
        remove1[remove1.length-1].addEventListener("click",function(){
                
                if(remove1[remove1.length-1].classList.contains("r1")){
                    
                    
                }
                
                costco-=+(remove1[remove1.length-1].parentElement.children[1].textContent)
                remove1[remove1.length-1].parentElement.remove()
                const scost=document.getElementsByClassName("cost")[0];
                console.log(costco);
                scost.textContent=costco;
                if(cart[0]!=undefined){
                    if([...(cart[0].children)].length==0){
                        const cart1=document.getElementsByClassName("cart")[0];
                        
                        cart1.remove()
                        
                        i=0;
                    }}
                
            })
            
        const plus=document.querySelectorAll(".plus");
       
        plus[plus.length-1].addEventListener("click",function(){
            console.log(plus);
            plus[plus.length-1].nextElementSibling.textContent=+(plus[plus.length-1].nextElementSibling.textContent)+1
            costco+=+(plus[plus.length-1].previousElementSibling.textContent)
            const scost=document.getElementsByClassName("cost")[0];
                scost.textContent=costco; 
                console.log(costco)
        })
        const minus=document.querySelectorAll(".minus");
       
        minus[minus.length-1].addEventListener("click",function(){
            console.log(minus);
            minus[minus.length-1].previousElementSibling.textContent=+(minus[minus.length-1].previousElementSibling.textContent)-1
            if( minus[minus.length-1].previousElementSibling.textContent==0){
                minus[minus.length-1].parentElement.remove()
                if(cart[0]!=undefined){
                    if([...(cart[0].children)].length==0){
                        const cart1=document.getElementsByClassName("cart")[0];
                        
                        cart1.remove()
                        
                        i=0;
                    }}
                
            }
            costco-=+(minus[minus.length-1].previousElementSibling.previousElementSibling.previousElementSibling.textContent)
            const scost=document.getElementsByClassName("cost")[0];
                scost.textContent=costco; 
                console.log(costco)
        })
        const r1=document.querySelectorAll(".r1")[0];
        r1.addEventListener("click",function(){
            i=0;
            r1.parentElement.remove()
            costco=0
        })
 })
 })
}