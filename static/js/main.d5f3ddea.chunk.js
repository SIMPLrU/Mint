(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{213:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},241:function(e,t){},250:function(e,t){},268:function(e,t){},270:function(e,t){},289:function(e,t){},290:function(e,t){},358:function(e,t){},360:function(e,t){},370:function(e,t){},372:function(e,t){},397:function(e,t){},399:function(e,t){},400:function(e,t){},405:function(e,t){},407:function(e,t){},420:function(e,t){},432:function(e,t){},435:function(e,t){},440:function(e,t){},448:function(e,t){},523:function(e,t,A){},524:function(e,t,A){},525:function(e,t,A){"use strict";A.r(t);var n,a,i,r,s,u,o,c,p,l,d,y,b,m=A(1),f=A(78),x=A.n(f),j=A(115),O=A(17),h=A(55),v=A(19),T=A.n(v),w=A(63),M=A(62),g=A.n(M),z=A(212),P=A.n(z),C=A(213),X=A(64),L=A(214),S=A(16),N={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(S.a)(Object(S.a)({},N),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(S.a)(Object(S.a)({},N),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(S.a)(Object(S.a)({},e),{},{account:t.payload.account});default:return e}},H={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(S.a)(Object(S.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(S.a)(Object(S.a)({},H),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},W=Object(X.b)({blockchain:k,data:E}),I=[L.a],F=Object(X.c)(X.a.apply(void 0,I)),Y=Object(X.d)(W,F),V=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},Z=function(e){return function(){var e=Object(w.a)(T.a.mark((function e(t){var A,n,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,Y.getState().blockchain.smartContract.methods.name().call();case 4:return A=e.sent,e.next=7,Y.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return n=e.sent,e.next=10,Y.getState().blockchain.smartContract.methods.cost().call();case 10:a=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:A,totalSupply:n,cost:a}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(V("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()},R=function(e){return{type:"CONNECTION_FAILED",payload:e}},J=function(e){return function(){var t=Object(w.a)(T.a.mark((function t(A){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:A({type:"UPDATE_ACCOUNT",payload:{account:e}}),A(Z());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=A(18),D=K.a.div(n||(n=Object(O.a)(["\n  background-color: var(--black);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),B=K.a.div(a||(a=Object(O.a)(["\n  height: 8px;\n  width: 8px;\n"]))),q=K.a.div(i||(i=Object(O.a)(["\n  height: 16px;\n  width: 16px;\n"]))),G=K.a.div(r||(r=Object(O.a)(["\n  height: 24px;\n  width: 24px;\n"]))),U=K.a.div(s||(s=Object(O.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Q=K.a.div(u||(u=Object(O.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),_=K.a.p(o||(o=Object(O.a)(["\n  color: var(--white);\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),$=(K.a.p(c||(c=Object(O.a)(["\n  color: var(--white);\n  font-size: 14px;\n  line-height: 1.6;\n"]))),K.a.p(p||(p=Object(O.a)(["\n  color: var(--white);\n  font-size: 18px;\n  line-height: 1.6;\n"])))),ee=(K.a.div(l||(l=Object(O.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),A(5)),te=K.a.button(d||(d=Object(O.a)(["\n  padding: 2px;\n  border-radius: 100px;\n  border: none;\n  background-color: #ffffff;\n  padding: 2px;\n  font-weight: bold;\n  color: #000000;\n  width: 400px;\n  cursor: pointer;\n  box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  -webkit-box-shadow: 2px 3px 10px -2px rgba(250, 250, 0, 0.5);\n  -moz-box-shadow: 2px 8px 4px -2px rgba(250, 250, 0, 0.5);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n  :hover {\n    -webkit-box-shadow: 2px 3px 40px -2px rgba(250, 250, 0, 0.9);\n  }\n"]))),Ae=K.a.div(y||(y=Object(O.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: column;\n  }\n"]))),ne=K.a.img(b||(b=Object(O.a)(["\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n    height: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"])));var ae=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.blockchain})),A=Object(h.c)((function(e){return e.data})),n=Object(m.useState)("What characteristic will you generate?"),a=Object(j.a)(n,2),i=a[0],r=a[1],s=Object(m.useState)(!1),u=Object(j.a)(s,2),o=u[0],c=u[1],p=function(){""!==t.account&&null!==t.smartContract&&e(Z(t.account))};return Object(m.useEffect)((function(){p()}),[t.account]),Object(ee.jsx)(D,{style:{backgroundColor:"var(--black)"},children:Object(ee.jsxs)(Q,{flex:1,ai:"center",style:{padding:12},children:[Object(ee.jsx)(_,{style:{textAlign:"center",fontSize:36,fontWeight:"bold"},children:"THE VEYESORS COLLECTION"}),Object(ee.jsx)(G,{}),Object(ee.jsxs)(Ae,{flex:1,style:{padding:12},children:[Object(ee.jsxs)(Q,{flex:1,jc:"center",ai:"center",children:[Object(ee.jsx)(ne,{alt:"example",src:"data:image/png;base64,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"}),Object(ee.jsx)(G,{}),Object(ee.jsxs)(_,{style:{textAlign:"center",fontSize:26,fontWeight:"bold"},children:[A.totalSupply,"/15"]})]}),Object(ee.jsx)(G,{}),Object(ee.jsx)(Q,{flex:1,jc:"center",ai:"center",style:{backgroundColor:"#000000",padding:12},children:15==Number(A.totalSupply)?Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(_,{style:{textAlign:"center"},children:"The sale has ended."}),Object(ee.jsx)(q,{}),Object(ee.jsxs)($,{style:{textAlign:"center"},children:["You can still buy and trade TBC NFTs on"," ",Object(ee.jsx)("a",{target:"",href:"https://opensea.io/collection/VCol",children:"Opensea.io"})]})]}):Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(_,{style:{textAlign:"center"},children:"1 NFT costs .01 ETH"}),Object(ee.jsx)(B,{}),Object(ee.jsx)($,{style:{textAlign:"center"},children:"-excluding gas fee-"}),Object(ee.jsx)(U,{}),Object(ee.jsx)(q,{}),Object(ee.jsx)($,{style:{textAlign:"center"},children:i}),Object(ee.jsx)(G,{}),""===t.account||null===t.smartContract?Object(ee.jsxs)(Q,{ai:"center",jc:"center",children:[Object(ee.jsx)($,{style:{textAlign:"center",fontSize:24}}),Object(ee.jsx)(q,{}),Object(ee.jsx)(te,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(w.a)(T.a.mark((function e(t){var A,n,a,i,r,s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),A=window,n=A.ethereum,a=n&&n.isMetaMask,e.next=5,window.ethereum.request({method:"eth_requestAccounts"});case 5:if(!a){e.next=23;break}return g.a.setProvider(n),i=new P.a(n),e.prev=8,e.next=11,n.request({method:"eth_requestAccounts"});case 11:return r=e.sent,e.next=14,n.request({method:"net_version"});case 14:4==e.sent?(s=new g.a(C,"0x73a950f0588240ee4dddf40cc6706e4c96532672"),t({type:"CONNECTION_SUCCESS",payload:{account:r[0],smartContract:s,web3:i}}),n.on("accountsChanged",(function(e){t(J(e[0]))})),n.on("chainChanged",(function(){window.location.reload()}))):t(R("Change network to Ethereum")),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(8),t(R("Something went wrong"));case 21:e.next=24;break;case 23:t(R("Install Metamask"));case 24:case"end":return e.stop()}}),e,null,[[8,18]])})));return function(t){return e.apply(this,arguments)}}()),p()},children:"CONNECT WALLET"}),""!==t.errorMsg?Object(ee.jsxs)(ee.Fragment,{children:[Object(ee.jsx)(q,{}),Object(ee.jsx)($,{style:{textAlign:"center",fontSize:24},children:t.errorMsg})]}):null]}):Object(ee.jsx)(Q,{ai:"center",jc:"center",fd:"row",children:Object(ee.jsx)(te,{disabled:o?1:0,onClick:function(A){var n;A.preventDefault(),(n=1)<=0||(r("Preparing your NFT..."),c(!0),t.smartContract.methods.mint(t.account,n).send({gasLimit:"285000",to:"0x73a950f0588240ee4dddf40cc6706e4c96532672",from:t.account,value:t.web3.utils.toWei((.01*n).toString(),"ether")}).once("error",(function(e){console.log(e),r("It seems the transaction was cancelled."),c(!1)})).then((function(A){r("Congrats! You just purchased a rare limited randomly generated NFT from the Veyesors Collection."),c(!1),e(Z(t.account))}))),p()},children:o?"Busy...":"Buy 1 NFT"})})]})})]}),Object(ee.jsx)(q,{}),Object(ee.jsxs)(Q,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ee.jsx)($,{style:{textAlign:"center",fontSize:24},children:"KNOWLEDGE AS CURRENCY"}),Object(ee.jsx)(q,{}),Object(ee.jsxs)($,{style:{textAlign:"center",fontSize:20},children:["COLLECTION LAUNCHES SOON ",Object(ee.jsx)("p",{})]})]})]})})},ie=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,529)).then((function(t){var A=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;A(e),n(e),a(e),i(e),r(e)}))};A(523),A(524);x.a.render(Object(ee.jsx)(h.a,{store:Y,children:Object(ee.jsx)(ae,{})}),document.getElementById("root")),ie()}},[[525,1,2]]]);
//# sourceMappingURL=main.d5f3ddea.chunk.js.map