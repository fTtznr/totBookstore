"use strict";(self["webpackChunktotbookstore"]=self["webpackChunktotbookstore"]||[]).push([[980],{882:(t,e,l)=>{l.d(e,{i:()=>n});var i=l(587);const n=(0,i.Q_)("cart",{state:()=>({items:[]}),actions:{addCart(t){if(this.items){let e=!1;for(let l of this.items)if(l.id===t.id){l.qtde+=1,e=!0;break}e||(t.qtde=1,this.items.push(t))}else t.qtde=1,this.items=[t]},searchCart(t){let e=-1;for(const[l,i]of this.items.entries())if(i.id===t.id){e=l;break}return e},removeItem(t){let e=this.searchCart(t);-1!=e&&this.items.splice(e,1)},increase(t){let e=this.items[this.searchCart(t)];e.qtde<e.quantity&&e.qtde++},decrease(t){let e=this.items[this.searchCart(t)];e.qtde>1&&e.qtde--},async checkout(t){try{let e=[];for(let t of this.items)e.push({book:t.id,qtde:t.qtde});const l={items:e,user:t,date:(new Date).toJSON()};console.log(l);const i=JSON.stringify(l),n=await fetch("http://localhost:3000/orders",{method:"POST",headers:{"Content-Type":"application/json"},body:i});await n.json();this.items=[]}catch(e){}}},getters:{totalPrice(){let t=0;if(this.items)for(let e of this.items)t+=e.qtde*e.price;return t}}})},855:(t,e,l)=>{l.d(e,{Z:()=>m});var i=l(812),n=l(220),r=l(54);function s(t,e,l,s,o,a){const u=(0,i.up)("Message");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.wy)((0,i._)("img",{class:"icon, addCart",src:r,onClick:e[0]||(e[0]=t=>a.addCart(l.book))},null,512),[[n.F8,!o.msg]]),(0,i.wy)((0,i.Wm)(u,{msg:o.msg},null,8,["msg"]),[[n.F8,o.msg]])])}var o=l(882),a=l(940);const u={name:"AddtoCart",props:{book:Object},components:{Message:a.Z},data(){return{msg:null}},methods:{addCart(t){(0,o.i)().addCart(t),this.msg="Item adicionado ao carrinho",setTimeout((()=>this.msg=""),3e3)}}};var c=l(998);const d=(0,c.Z)(u,[["render",s]]),m=d},940:(t,e,l)=>{l.d(e,{Z:()=>m});var i=l(812),n=l(893);const r=t=>((0,i.dD)("data-v-05ab3836"),t=t(),(0,i.Cn)(),t),s={class:"alert success"},o=r((()=>(0,i._)("span",{class:"closebtn"},"×",-1)));function a(t,e,l,r,a,u){return(0,i.wg)(),(0,i.iD)("div",s,[o,(0,i.Uk)((0,n.zw)(l.msg),1)])}const u={name:"Message",props:{msg:String},mounted(){let t,e=document.getElementsByClassName("closebtn");for(t=0;t<e.length;t++)e[t].onclick=function(){let t=this.parentElement;t.style.opacity="0",setTimeout((function(){t.style.display="none"}),600)}}};var c=l(998);const d=(0,c.Z)(u,[["render",a],["__scopeId","data-v-05ab3836"]]),m=d},516:(t,e,l)=>{l.d(e,{Z:()=>w});var i=l(812),n=l(893),r=l(220);const s={class:"product-box"},o={class:"product-img"},a=["src","onClick"],u={class:"product-info"},c={key:0,class:"price"},d={key:1},m={style:{"text-align":"center"}};function h(t,e,l,h,p,b){const _=(0,i.up)("AddtoCart");return(0,i.wg)(),(0,i.iD)("div",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.bookStore.searchResult,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"product",key:t.id},[(0,i._)("div",o,[(0,i._)("img",{src:t.coverImg,onClick:e=>b.bookDetail(t)},null,8,a)]),(0,i._)("div",u,[(0,i._)("h3",null,(0,n.zw)(t.title),1),t.price>0&&t.quantity>0?((0,i.wg)(),(0,i.iD)("span",c,[(0,i._)("h4",null," R$ "+(0,n.zw)(t.price),1)])):((0,i.wg)(),(0,i.iD)("span",d,"Indisponível")),(0,i._)("p",null,(0,n.zw)(t.description.slice(0,250))+"...",1),(0,i.wy)((0,i._)("p",m,[(0,i.Wm)(_,{book:t},null,8,["book"])],512),[[r.F8,t.price>0&&t.quantity>0]])])])))),128))])}var p=l(899),b=l(855);const _={name:"ProductBox",components:{AddtoCart:b.Z},data(){return{bookStore:null}},created(){this.bookStore=(0,p.m)()},methods:{bookDetail(t){this.bookStore.lastSeen=t,this.$router.push("/book")}}};var f=l(998);const y=(0,f.Z)(_,[["render",h]]),w=y},980:(t,e,l)=>{l.r(e),l.d(e,{default:()=>tt});var i=l(812),n=l(220);const r=t=>((0,i.dD)("data-v-6b536d09"),t=t(),(0,i.Cn)(),t),s={class:"search"},o={class:"remove-book-form"},a=r((()=>(0,i._)("h2",{class:"center"},"Aplicar Filtro",-1))),u={class:"form-field"},c=r((()=>(0,i._)("label",{for:"title"},"Título do Livro:",-1))),d=r((()=>(0,i._)("br",null,null,-1))),m=r((()=>(0,i._)("br",null,null,-1))),h=r((()=>(0,i._)("br",null,null,-1))),p={class:"form-field"},b=r((()=>(0,i._)("label",{for:"author"},"Autor",-1))),_=r((()=>(0,i._)("br",null,null,-1))),f=r((()=>(0,i._)("br",null,null,-1))),y=r((()=>(0,i._)("br",null,null,-1))),w={class:"form-field"},g=r((()=>(0,i._)("label",{for:"isbn"},"ISBN",-1))),v=r((()=>(0,i._)("br",null,null,-1))),k=r((()=>(0,i._)("br",null,null,-1))),C=r((()=>(0,i._)("br",null,null,-1))),q={class:"form-field"},P=r((()=>(0,i._)("label",{for:"edition"},"Edição:",-1))),x=r((()=>(0,i._)("br",null,null,-1))),S=r((()=>(0,i._)("br",null,null,-1))),D=r((()=>(0,i._)("br",null,null,-1))),L={class:"form-field"},V=r((()=>(0,i._)("label",{for:"publisher"},"Editora",-1))),Z=r((()=>(0,i._)("br",null,null,-1))),U=r((()=>(0,i._)("br",null,null,-1))),I=r((()=>(0,i._)("br",null,null,-1))),B={class:"form-field"},R=r((()=>(0,i._)("label",{for:"price"},"Preço:",-1))),A=r((()=>(0,i._)("br",null,null,-1))),E=r((()=>(0,i._)("br",null,null,-1))),M=r((()=>(0,i._)("br",null,null,-1))),T=r((()=>(0,i._)("br",null,null,-1))),z={class:"form-field"},F=r((()=>(0,i._)("label",{for:"quantity"},"Estoque:",-1))),N=r((()=>(0,i._)("br",null,null,-1))),O=r((()=>(0,i._)("br",null,null,-1))),j=r((()=>(0,i._)("br",null,null,-1))),W=r((()=>(0,i._)("br",null,null,-1))),J=r((()=>(0,i._)("br",null,null,-1))),$=r((()=>(0,i._)("input",{type:"submit",class:"center",value:"Buscar Livro"},null,-1)));function H(t,e,l,r,H,K){const Q=(0,i.up)("ProductBox");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",o,[a,(0,i._)("form",{onSubmit:e[8]||(e[8]=(...t)=>K.filterSearch&&K.filterSearch(...t))},[(0,i._)("ul",null,[(0,i._)("li",u,[c,d,(0,i.wy)((0,i._)("input",{type:"text",id:"title",name:"title","onUpdate:modelValue":e[0]||(e[0]=t=>H.title=t)},null,512),[[n.nr,H.title]]),m,h]),(0,i._)("li",p,[b,_,(0,i.wy)((0,i._)("input",{type:"text",id:"author",name:"author","onUpdate:modelValue":e[1]||(e[1]=t=>H.author=t)},null,512),[[n.nr,H.author]]),f,y]),(0,i._)("li",w,[g,v,(0,i.wy)((0,i._)("input",{type:"isbn",id:"isbn",name:"isbn","onUpdate:modelValue":e[2]||(e[2]=t=>H.isbn=t)},null,512),[[n.nr,H.isbn]]),k,C]),(0,i._)("li",q,[P,x,(0,i.wy)((0,i._)("input",{type:"text",id:"edition",name:"edition","onUpdate:modelValue":e[3]||(e[3]=t=>H.edition=t)},null,512),[[n.nr,H.edition]]),S,D]),(0,i._)("li",L,[V,Z,(0,i.wy)((0,i._)("input",{type:"text",id:"publisher",name:"publisher","onUpdate:modelValue":e[4]||(e[4]=t=>H.publisher=t)},null,512),[[n.nr,H.publisher]]),U,I]),(0,i._)("li",B,[R,A,(0,i.wy)((0,i._)("input",{type:"number",id:"minPrice",name:"minPrice",placeholder:"Valor Mínimo","onUpdate:modelValue":e[5]||(e[5]=t=>H.minPrice=t)},null,512),[[n.nr,H.minPrice]]),E,(0,i.wy)((0,i._)("input",{type:"number",id:"maxPrice",name:"maxPrice",placeholder:"Valor Máximo","onUpdate:modelValue":e[6]||(e[6]=t=>H.maxPrice=t)},null,512),[[n.nr,H.maxPrice]]),M,T]),(0,i._)("li",z,[F,N,(0,i.wy)((0,i._)("input",{type:"number",step:"1",min:"0",id:"quantity",name:"quantity","onUpdate:modelValue":e[7]||(e[7]=t=>H.quantity=t)},null,512),[[n.nr,H.quantity]]),O,j])]),W,J,$],32)]),(0,i.Wm)(Q)])}var K=l(516),Q=l(899);const Y={name:"Search",components:{ProductBox:K.Z},data(){return{title:null,author:null,isbn:null,edition:null,publisher:null,minPrice:null,maxPrice:null,quantity:null}},methods:{filterSearch(t){t.preventDefault(),(0,Q.m)().searchResult=(0,Q.m)().filterReference,(0,Q.m)().searchResult=(0,Q.m)().searchResult.filter((t=>{let e=!0,l=!0,i=!0,n=!0,r=!0,s=!0,o=!0,a=!0;return this.title&&(e=!!t.title.toLowerCase().includes(this.title.toLowerCase())),this.author&&(l=!!t.author.toLowerCase().includes(this.author.toLowerCase())),this.isbn&&(i=t.isbn==this.isbn),this.edition&&(n=!!t.edition.toLowerCase().includes(this.edition.toLowerCase())),this.publisher&&(r=!!t.publisher.toLowerCase().includes(this.publisher.toLowerCase())),this.minPrice&&(s=t.price>=this.minPrice),this.maxPrice&&(o=t.price<=this.maxPrice),this.quantity&&(a=t.quantity==this.quantity),e&&l&&i&&n&&r&&s&&o&&a}))}}};var G=l(998);const X=(0,G.Z)(Y,[["render",H],["__scopeId","data-v-6b536d09"]]),tt=X}}]);
//# sourceMappingURL=980.28e76ab5.js.map