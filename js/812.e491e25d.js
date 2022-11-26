"use strict";(self["webpackChunktotbookstore"]=self["webpackChunktotbookstore"]||[]).push([[812],{882:(t,e,a)=>{a.d(e,{i:()=>c});var i=a(587);const c=(0,i.Q_)("cart",{state:()=>({items:[]}),actions:{addCart(t){if(this.items){let e=!1;for(let a of this.items)if(a.id===t.id){a.qtde+=1,e=!0;break}e||(t.qtde=1,this.items.push(t))}else t.qtde=1,this.items=[t]},searchCart(t){let e=-1;for(const[a,i]of this.items.entries())if(i.id===t.id){e=a;break}return e},removeItem(t){let e=this.searchCart(t);-1!=e&&this.items.splice(e,1)},increase(t){let e=this.items[this.searchCart(t)];e.qtde<e.quantity&&e.qtde++},decrease(t){let e=this.items[this.searchCart(t)];e.qtde>1&&e.qtde--},async checkout(t){try{let e=[];for(let t of this.items)e.push({book:t.id,qtde:t.qtde});const a={items:e,user:t,date:(new Date).toJSON()};console.log(a);const i=JSON.stringify(a),c=await fetch("http://localhost:3000/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:i});await c.json();this.items=[]}catch(e){}}},getters:{totalPrice(){let t=0;if(this.items)for(let e of this.items)t+=e.qtde*e.price;return t}}})},403:(t,e,a)=>{a.r(e),a.d(e,{default:()=>$});var i=a(812),c=a(893);const s=t=>((0,i.dD)("data-v-4fef95ca"),t=t(),(0,i.Cn)(),t),r={class:"cart"},o={key:0},d=(0,i.uE)('<h1 class="capital center" data-v-4fef95ca>Carrinho de Compras</h1><div class="cart-product" data-v-4fef95ca><div class="cart-product-img" data-v-4fef95ca></div><div class="cart-product-info" data-v-4fef95ca><div class="cart-product-details" data-v-4fef95ca>Título</div><div class="cart-product-details" data-v-4fef95ca>Preço unitário</div><div class="cart-product-details" data-v-4fef95ca>Quantidade</div><div class="cart-product-details icon" data-v-4fef95ca>Remover</div></div></div>',2),l={class:"cart-product-img"},n=["src","onClick"],u={class:"cart-product-info"},h={class:"cart-product-details"},v={class:"cart-product-details"},f={class:"cart-product-details"},p=["onClick"],k=["onClick"],m={class:"cart-product-details icon trash"},C=["onClick"],_={key:0,class:"center"},g=s((()=>(0,i._)("br",null,null,-1))),b=s((()=>(0,i._)("br",null,null,-1))),w={key:1},q=s((()=>(0,i._)("h1",{class:"capital center"},"Seu carrinho está vazio!",-1))),y=[q];function D(t,e,a,s,q,D){return(0,i.wg)(),(0,i.iD)("div",r,[q.cart.items.length?((0,i.wg)(),(0,i.iD)("div",o,[d,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(q.cart.items,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"cart-product",key:t.id},[(0,i._)("div",l,[(0,i._)("img",{src:t.coverImg,onClick:e=>D.bookDetail(t)},null,8,n)]),(0,i._)("div",u,[(0,i._)("div",h,(0,c.zw)(t.title),1),(0,i._)("div",v,(0,c.zw)(t.price),1),(0,i._)("div",f,[(0,i._)("button",{onClick:e=>q.cart.decrease(t)},"-",8,p),(0,i.Uk)(" "+(0,c.zw)(t.qtde)+" ",1),(0,i._)("button",{onClick:e=>q.cart.increase(t)},"+",8,k)]),(0,i._)("div",m,[(0,i._)("i",{class:"fa-solid fa-trash-can",onClick:e=>q.cart.removeItem(t)},null,8,C)])])])))),128)),0!=q.cart.totalPrice?((0,i.wg)(),(0,i.iD)("div",_,[(0,i._)("strong",null,"Total: R$ "+(0,c.zw)(q.cart.totalPrice.toFixed(2)),1),g,b,(0,i._)("button",{onClick:e[0]||(e[0]=(...t)=>D.checkout&&D.checkout(...t))},"Finalizar Pedido")])):(0,i.kq)("",!0)])):((0,i.wg)(),(0,i.iD)("div",w,y))])}var z=a(882),P=a(899),I=a(885);const S={name:"Cart",data(){return{cart:null}},created(){this.cart=(0,z.i)()},methods:{bookDetail(t){(0,P.m)().lastSeen=t,this.$router.push("/book")},checkout(){(0,I.Q)().isLoggedIn?this.$router.push("/checkout"):((0,I.Q)().checkout=!0,this.$router.push("/profile"))}}};var Q=a(998);const T=(0,Q.Z)(S,[["render",D],["__scopeId","data-v-4fef95ca"]]),$=T}}]);
//# sourceMappingURL=812.e491e25d.js.map