(this["webpackJsonpelectron-chat"]=this["webpackJsonpelectron-chat"]||[]).push([[0],{132:function(e,t,a){e.exports=a(216)},137:function(e,t,a){},138:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},139:function(e,t,a){},188:function(e,t,a){},207:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(5),l=a.n(r),o=(a(137),a(138),a(139),a(13)),c=a(14),i=a(16),m=a(15),u=a(17),h=a(55),p=a(217),g=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,{style:{display:"flex"}},s.a.createElement("div",{style:{backgroundColor:"white"}},s.a.createElement("img",{style:{maxWidth:"47%"},src:"logo.png"})),s.a.createElement(p.a,{size:"large",icon:"user",className:"vertical-center",style:{right:"2.5%",marginTop:"2.5%",position:"absolute"}}))}}]),t}(n.Component),d=a(218),f=a(30),b=a(222),E=(a(188),["#f56a00","#7265e6","#ffbf00","#00a2ae"]),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).name=e.name,a.timestamp=e.timestamp,a.preview=e.preview,a.state={color:E[Math.floor(Math.random()*E.length)]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,{size:"small",loading:!1},s.a.createElement(h.a,{style:{marginTop:"0%",marginBottom:"0%",left:"-10%"},type:"flex",justify:"space-around",align:"middle"},s.a.createElement(f.a,{span:16,push:2},s.a.createElement(h.a,{style:{display:"flex"}},s.a.createElement(f.a,{span:8},s.a.createElement("p",{style:{textAlign:"left",fontWeight:"bold"},className:"text"},this.name)),s.a.createElement(f.a,{push:16},s.a.createElement(b.a,{style:{right:"0px",align:"right"},color:"#2db7f5"},this.timestamp))),s.a.createElement(h.a,null,s.a.createElement("p",{className:"text"},this.preview))),s.a.createElement(f.a,{span:3,pull:20},s.a.createElement(p.a,{size:"large",style:{backgroundColor:this.state.color}},this.name[0]))))}}]),t}(n.Component),O=a(53),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).cards_list=e.cards_list,console.log("cards",a.cards_list),a.message_cards=a.generateCards(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"generateCards",value:function(){return s.a.createElement("div",null,this.cards_list.map((function(e,t){var a=e.name,n=e.timestamp,r=e.preview;return s.a.createElement("div",{style:{marginTop:".1%",marginLeft:"0%",marginRight:"0%"}},s.a.createElement(v,{key:t,name:a,timestamp:n,preview:r}))})))}},{key:"render",value:function(){var e=this.generateCards();return s.a.createElement("div",null,s.a.createElement(O.b,{to:"/messages"},e))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("div",{style:{backgroundColor:"white",marginTop:"1%"}},s.a.createElement("p",null,"\xa9 AtomicNet 2019")))}}]),t}(n.Component),w=a(9),k=a(221),C=a(220),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={visible:a.props.show,username:"",message:""},a.showModal=function(){a.setState({visible:!0,username:"",message:""})},a.handleOk=function(e){console.log("YOOOOOO"),a.props.create_new(a.state.username,a.state.message),a.forceUpdate(),a.props.close()},a.handleCancel=function(e){a.props.close()},a.username="",a.message="",a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handleMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){return s.a.createElement(k.a,{visible:this.props.visible,onOk:this.handleOk,onCancel:this.handleCancel,title:"Create New Message"},s.a.createElement(C.a,{onChange:this.handleUsernameChange.bind(this),value:this.state.username,style:{marginBottom:"1%"},placeholder:"Recipient Username"}),s.a.createElement(C.a,{onChange:this.handleMessageChange.bind(this),value:this.state.message,placeholder:"First Message"}))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onClick=function(){console.log("state modal",a.showModal),a.showModal?a.showModal=!1:a.showModal||(a.showModal=!0),a.forceUpdate()},a.closeModal=function(){a.showModal=!1,a.forceUpdate()},a.showModal=!1,console.log("HERERERRE",a.showModal),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(x,{visible:this.showModal,close:this.closeModal,create_new:this.props.create_new}),s.a.createElement("a",{onClick:this.onClick}," ",s.a.createElement(d.a,{size:"small",style:{marginTop:".5%"}},s.a.createElement(h.a,null,s.a.createElement(w.a,{style:{fontSize:"25px"},type:"plus-circle"}),s.a.createElement("p",null,"Create New Message")))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).createNewMessage=function(e,t){var n=new Date,s=n.getHours()+":"+n.getMinutes()+" ";a.message_list.push({name:e,timestamp:s,preview:t}),a.forceUpdate(),console.log(a.message_list),console.log("new")},a.message_list=[{name:"Beave",timestamp:"11:02 pm",preview:"Help me please. Laura is still here"},{name:"Longo",timestamp:"8:00 pm",preview:"I'm out"},{name:"Kai",timestamp:"7:30 am",preview:"I wish I were out"},{name:"Ori",timestamp:"2:59 am",preview:"Nerds"}],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("rendering main"),console.log(this.message_list),s.a.createElement("div",{style:{backgroundColor:"#e8e8e8"}},s.a.createElement(g,null),s.a.createElement(M,{create_new:this.createNewMessage}),s.a.createElement(j,{cards_list:this.message_list}),s.a.createElement(y,null))}}]),t}(n.Component),_=C.a.Search,N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={message:""},a.onSend=e.onSend,a.text="",a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){console.log(e.target.value),this.text=e.target.value,this.forceUpdate()}},{key:"clear",value:function(){this.text="",this.forceUpdate()}},{key:"render",value:function(){return s.a.createElement(_,{onSearch:this.props.onSend,placeholder:"Type Message...",enterButton:"Send"})}}]),t}(n.Component),T=(a(207),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).text=e.text,a.mine=e.mine,a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.text;return this.mine?s.a.createElement(h.a,null,s.a.createElement(f.a,{span:8,offset:16},s.a.createElement("p",{className:"messageMineText"},e))):s.a.createElement(h.a,null,s.a.createElement(f.a,{span:8},s.a.createElement("p",{className:"messageNotMineText"},e)))}}]),t}(n.Component)),U=(a(208),a(219)),z=(n.Component,function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"renderMessages",value:function(){return s.a.createElement("div",{style:{}},s.a.createElement(h.a,{style:{backgroundColor:"white"}},s.a.createElement(f.a,{span:8},s.a.createElement(O.b,{to:"/home"},s.a.createElement(w.a,{style:{fontSize:"20px",marginTop:"11%",marginLeft:"0%"},type:"left-circle"}))),s.a.createElement(f.a,{style:{fontSize:"18px",marginTop:"3%"},span:8},s.a.createElement("p",null,"A Krantz")),s.a.createElement(f.a,{span:8})),this.props.getMessages().map((function(e,t){return console.log(e),s.a.createElement(T,{text:e.text,mine:e.mine})})))}},{key:"render",value:function(){var e=this.renderMessages();return console.log("rendering "+e),s.a.createElement("div",null,e)}}]),t}(n.Component)),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onSend=function(e){a.messages.push({text:e,mine:!0}),console.log("sent "+e),a.forceUpdate()},a.getMessages=function(){return a.messages},a.messages=[{text:"hello you. why do you like to eat steak when chicken is tastier?",mine:!1},{text:"hello now",mine:!1},{text:"goodbye",mine:!0},{text:"Good Morning. What's up",mine:!1},{text:"The cow just went for a walk. All is well",mine:!0},{text:"Cool",mine:!1},{text:"Let's meet today",mine:!1},{text:"sure",mine:!0}],a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{backgroundColor:"#e8e8e8"}},s.a.createElement(z,{messages:this.messages,getMessages:this.getMessages}),s.a.createElement(N,{onSend:this.onSend}))}}]),t}(n.Component),R=a(40);var A=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(O.a,null,s.a.createElement(R.c,null,s.a.createElement(R.a,{path:"/home"},s.a.createElement(S,null)),s.a.createElement(R.a,{path:"/messages"},s.a.createElement(B,null)),s.a.createElement(R.a,{path:"/"},s.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[132,1,2]]]);
//# sourceMappingURL=main.5d26cc6d.chunk.js.map