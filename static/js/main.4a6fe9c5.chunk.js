(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){},114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),o=a.n(i),l=(a(58),a(10)),c=a(11),s=a(13),u=a(12),m=a(14),p=a(51),d=a(45),f=Object(n.createContext)(),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],finalProduct:[],isLoading:!0},a.fetchData=function(){setTimeout(function(){a.setState({products:d,isLoading:!1})},1e3)},a.getProductDetails=function(e,t,n,r,i,o){a.setState({finalProduct:{product:{id:e,options:[{id:t,value:n},{id:r,value:i}],priceValue:o}}})},a.createFinalOrderDetails=function(e,t,n,r,i,o,l){var c=Object(p.a)({},a.state.finalProduct);console.log(c),a.setState({finalProduct:[c,{user:{name:e,surname:t,email:n,address:{street:r,housenumber:o,city:i,postcode:l}}}]}),a.sendData()},a.sendData=function(){console.log(a.state.finalProduct)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this;return r.a.createElement(f.Provider,{value:{state:this.state,updateProduct:function(t,a,n,r,i,o){return e.getProductDetails(t,a,n,r,i,o)},updateUser:function(t,a,n,r,i,o,l){e.createFinalOrderDetails(t,a,n,r,i,o,l)}}},this.props.children)}}]),t}(n.Component),C=f,b=a(119),y=a(115),E=a(50),v=a(46),O=a(118),g=a(116),D=a(117),I=a(122),j=(a(87),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.priceModifier,a=e.setColorPriceModifier,n=e.name,i=e.setColor,o=e.setColorID,l=e.colorID,c=e.setOptionsColorID,s=e.optionColorID;return r.a.createElement("button",{style:{backgroundColor:n},className:"CircleColor",onClick:function(){return i(n),o(l),c(s),a(t)}})}}]),t}(n.Component)),P=(a(88),a(120)),S=a(121),M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleName=function(e){return a.setState({nameValue:e.target.value})},a.handleSurname=function(e){return a.setState({surnameValue:e.target.value})},a.handleEmail=function(e){return a.setState({emailValue:e.target.value})},a.handleStreet=function(e){return a.setState({streetValue:e.target.value})},a.handleCity=function(e){return a.setState({cityValue:e.target.value})},a.handleHouseNumber=function(e){return a.setState({housenumberValue:e.target.value})},a.handleZIP=function(e){return a.setState({zipValue:e.target.value})},a.state={nameValue:null,surnameValue:null,emailValue:null,streetValue:null,cityValue:null,housenumberValue:null,zipValue:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){var e=this;return r.a.createElement(C.Consumer,null,function(t){return r.a.createElement(P.a,Object.assign({},e.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),r.a.createElement(P.a.Header,{closeButton:!0},r.a.createElement(P.a.Title,{id:"contained-modal-title-vcenter"},"Purchase Order Detail Information")),r.a.createElement(S.a,{onSubmit:e.handleSubmit},r.a.createElement(P.a.Body,null,r.a.createElement(S.a.Row,null,r.a.createElement(E.a,null,r.a.createElement(S.a.Label,null,"Name"),r.a.createElement(S.a.Control,{onChange:e.handleName,required:!0,placeholder:"First name"})),r.a.createElement(E.a,null,r.a.createElement(S.a.Label,null,"Surame"),r.a.createElement(S.a.Control,{onChange:e.handleSurname,required:!0,placeholder:"Last name"}))),r.a.createElement(S.a.Group,{controlId:"formBasicEmail"},r.a.createElement(S.a.Label,null,"Email address"),r.a.createElement(S.a.Control,{onChange:e.handleEmail,required:!0,type:"email",placeholder:"Enter email"}),r.a.createElement(S.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(S.a.Group,{controlId:"formGridAddress1"},r.a.createElement(S.a.Label,null,"Street"),r.a.createElement(S.a.Control,{onChange:e.handleStreet,required:!0,placeholder:"1234 Main St"})),r.a.createElement(S.a.Group,{controlId:"formGridCity"},r.a.createElement(S.a.Label,null,"City"),r.a.createElement(S.a.Control,{onChange:e.handleCity,required:!0})),r.a.createElement(S.a.Group,{controlId:"formGridHouse"},r.a.createElement(S.a.Label,null,"HouseNumber"),r.a.createElement(S.a.Control,{onChange:e.handleHouseNumber,required:!0})),r.a.createElement(S.a.Group,{controlId:"formGridZip"},r.a.createElement(S.a.Label,null,"Zip"),r.a.createElement(S.a.Control,{onChange:e.handleZIP,required:!0}))),r.a.createElement(P.a.Footer,null,r.a.createElement(I.a,{type:"submit",onClick:function(){return t.updateUser(e.state.nameValue,e.state.surnameValue,e.state.emailValue,e.state.streetValue,e.state.cityValue,e.state.housenumberValue,e.state.zipValue)}},"Buy"),r.a.createElement(I.a,{onClick:e.props.onHide},"Cancel"))))})}}]),t}(n.Component),w=(a(110),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.priceModifier,a=e.setCapacityPriceModifier,n=e.name,i=e.capacityID,o=e.optionCapacityID,l=e.setOptionsCapacityID,c=e.setCapacityID,s=e.setCapacity;return r.a.createElement(I.a,{className:"CapacityButton",onClick:function(){return s(n),c(i),l(o),a(t)}},n)}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).setCapacity=function(e){return a.setState({capacity:e})},a.setColor=function(e){return a.setState({backColor:e})},a.setCapacityID=function(e){return a.setState({CapacityID:e})},a.setColorID=function(e){return a.setState({ColorID:e})},a.setOptionsColorID=function(e){return a.setState({optionsColorID:e})},a.setOptionsCapacityID=function(e){return a.setState({optionsCapacityID:e})},a.setNewPrice=function(e){return a.setState({price:e})},a.setColorPriceModifier=function(e){return a.setState({colorPriceModifier:e})},a.setCapacityPriceModifier=function(e){return a.setState({capacityPriceModifier:e})},a.state={backColor:"white",modalShow:!1,CapacityID:null,ColorID:null,optionsCapacityID:null,optionsColorID:null,price:null,colorPriceModifier:null,capacityPriceModifier:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({price:this.props.price})}},{key:"render",value:function(){var e=this,t=this.props,a=t.options,n=t.productID,i=function(){return e.setState({modalShow:!1})};return r.a.createElement(C.Consumer,null,function(t){return r.a.createElement("div",null,a.map(function(t,a){return n=t.name,i=t.values,o=t.id,"Color"===n?r.a.createElement(y.a,null," ",i.map(function(t,a){return r.a.createElement(E.a,{key:a},r.a.createElement(j,{priceModifier:t.priceModifier,setColorPriceModifier:e.setColorPriceModifier,name:t.name,colorID:t.id,optionColorID:o,setColor:e.setColor,setColorID:e.setColorID,setOptionsColorID:e.setOptionsColorID}))})):null;var n,i,o}),r.a.createElement(y.a,null,r.a.createElement(E.a,{xs:4,sm:4,className:"CapacityColumn"},a.map(function(t,a){return n=t.name,i=t.values,o=t.id,"Capacity"===n?r.a.createElement(g.a,{"aria-label":"Toolbar with button groups"},r.a.createElement(D.a,{className:"mr-2","aria-label":"First group"},r.a.createElement(y.a,null,i.map(function(t,a){return r.a.createElement(E.a,{xs:12},r.a.createElement(w,{priceModifier:t.priceModifier,setCapacityPriceModifier:e.setCapacityPriceModifier,name:t.name,capacityID:t.id,optionCapacityID:o,setCapacity:e.setCapacity,setCapacityID:e.setCapacityID,setOptionsCapacityID:e.setOptionsCapacityID}))})))):null;var n,i,o})),r.a.createElement(E.a,{xs:4,sm:4,className:"Phone",style:{backgroundColor:e.state.backColor}},r.a.createElement("div",{className:"Cellphone"})),r.a.createElement(E.a,{xs:4,sm:4,className:"Price"},"$",e.state.price+e.state.colorPriceModifier+e.state.capacityPriceModifier),r.a.createElement(E.a,{xs:12},r.a.createElement(I.a,{variant:"primary",size:"lg",onClick:function(){return e.setState({modalShow:!0}),t.updateProduct(n,e.state.optionsCapacityID,e.state.CapacityID,e.state.optionsColorID,e.state.ColorID,e.state.price+e.state.colorPriceModifier+e.state.capacityPriceModifier)}},"Buy"),r.a.createElement(M,{show:e.state.modalShow,onHide:i}))))})}}]),t}(n.Component),N=(a(111),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).showColorPicker=function(){a.setState({showAbout:!a.state.showAbout})},a.state={showAbout:!0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.name,n=t.image,i=t.oldPrice,o=t.price;return r.a.createElement("div",null,this.state.showAbout?r.a.createElement(y.a,{onClick:function(){return e.showColorPicker()}},r.a.createElement(E.a,{xs:6},a,r.a.createElement(O.a,{src:n,fluid:!0})),r.a.createElement(E.a,{xs:6,className:"PriceDetails"},r.a.createElement(y.a,null,r.a.createElement(E.a,{xs:12,className:"OldPrice"},"$",i),r.a.createElement(E.a,{xs:12,className:"CurrentPrice"},"$",o)))):r.a.createElement(k,this.props))}}]),t}(n.Component)),V=(a(112),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(C.Consumer,null,function(e){return r.a.createElement(b.a,null,r.a.createElement(y.a,{className:"Body"},e.state.isLoading?r.a.createElement("div",{className:"sweet-loading"},r.a.createElement(v.ClipLoader,{sizeUnit:"px",size:260,color:"#8b8b8b",loading:e.state.isLoading})):e.state.products.map(function(e,t){return r.a.createElement(E.a,{xs:12,sm:12,md:12,key:t,className:"DisplayedProduct"},r.a.createElement(N,{name:e.name,image:e.image,oldPrice:e.oldPrice,price:e.price,options:e.options,key:t,productID:e.id}))})))})}}]),t}(n.Component)),x=(a(113),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{className:"LayoutRow"},r.a.createElement(E.a,{xs:0,sm:2,md:3}),r.a.createElement(E.a,{xs:12,sm:8,md:6},r.a.createElement(V,null)),r.a.createElement(E.a,{xs:0,sm:2,md:3}))}}]),t}(n.Component)),G=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h,null,r.a.createElement(x,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e){e.exports=[{id:1,name:"iPhone 8",price:99.99,oldPrice:599,image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/select/iphone8-select-2017?wid=212&hei=292&fmt=png-alpha&.v=1503618523038",options:[{id:100,name:"Color",values:[{id:1e3,name:"Silver",priceModifier:0},{id:1001,name:"Space Gray",priceModifier:0},{id:1002,name:"Gold",priceModifier:0}]},{id:101,name:"Capacity",values:[{id:1100,name:"64 GB",priceModifier:0},{id:1101,name:"256 GB",priceModifier:40}]}]},{id:2,name:"iPhone 8 Plus",price:129.99,oldPrice:699,image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-select-2017?wid=234&hei=330&fmt=png-alpha&.v=1503618522714",options:[{id:100,name:"Color",values:[{id:1e3,name:"Silver",priceModifier:0},{id:1001,name:"Space Gray",priceModifier:0},{id:1002,name:"Gold",priceModifier:0},{id:1003,name:"Red",priceModifier:10}]},{id:101,name:"Capacity",values:[{id:1100,name:"64 GB",priceModifier:0},{id:1101,name:"256 GB",priceModifier:40}]}]}]},52:function(e,t,a){e.exports=a(114)},58:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.4a6fe9c5.chunk.js.map