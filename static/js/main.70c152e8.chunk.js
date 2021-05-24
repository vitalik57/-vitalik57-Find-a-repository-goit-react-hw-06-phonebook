(this["webpackJsonpgoit-react-homerwork-02-phoneboook"]=this["webpackJsonpgoit-react-homerwork-02-phoneboook"]||[]).push([[0],{17:function(t,e,n){t.exports={button:"Contact_button__2aawn",list:"Contact_list__1OufD"}},36:function(t,e){},67:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),o=n(13),s=n.n(o),i=n(11),u=n.n(i),l=n(12),b=n(23),d=n(7),j=n(15),h=n(16),m=n(20),p=n(19),f=n(69),O=n(1),v=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r={id:Object(f.a)(),name:a,number:c};t.props.addContact(r),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(h.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsxs)("label",{children:["Name:",Object(O.jsx)("input",{type:"text",value:e,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",placeholder:"Name...",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("label",{children:["Number:",Object(O.jsx)("input",{type:"tell",value:n,name:"number",placeholder:"Number...",onChange:this.handleChange})]}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"submit",disabled:!e.length||!n.length,children:"Add contact"})]})}}]),n}(c.Component),C=n(17),x=n.n(C),g=function(t){var e=t.name,n=t.number,a=t.onRemove;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("li",{children:[e," : ",n]}),Object(O.jsx)("button",{className:x.a.button,type:"button",onClick:a,children:"Delete"})]})},y=function(t){var e=t.contacts,n=t.onRemove;return Object(O.jsx)("ul",{className:x.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(O.jsx)(g,{name:a,number:c,onRemove:function(){return n(e)}},e)}))})},k=function(t){var e=t.onChange;return Object(O.jsxs)(O.Fragment,{children:["Find contacts by name:",Object(O.jsx)("input",{placeholder:"Search...",type:"text",name:"filter",onChange:e})]})},w=function(t){var e=t.title,n=t.children;return Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{children:e}),n]})},A=n(8),S=Object(A.b)("getAllContacts"),N=Object(A.b)("addContact"),_=Object(A.b)("removeContact"),R=n(18),D=n(24),F=n.n(D),L=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.removeContact=function(e){t.state.contacts.filter((function(t){return t.id!==e}));t.props.removeContact(e)},t.addContact=function(){var e=Object(b.a)(u.a.mark((function e(n){var a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.post("https://shop-a2177-default-rtdb.firebaseio.com/contacts.json",n);case 3:a=e.sent,c=a.data,console.log(c),t.props.addContact(Object(l.a)(Object(l.a)({},n),{},{id:c.name})),console.log(c),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:r=n.name,t.state.contacts.map((function(t){return t.name.toLowerCase()})).includes(r.toLowerCase())?alert("".concat(r," is already in contact list")):t.props.addContact(Object(l.a)(Object(l.a)({},t.state.contacts),{},{contact:n}));case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;if(n.length)return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(b.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,F.a.get("https://shop-a2177-default-rtdb.firebaseio.com/contacts.json");case 3:e=t.sent,n=e.data,console.log(n),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.contacts;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(w,{title:"Phonebook",children:Object(O.jsx)(v,{addContact:this.addContact})}),Object(O.jsxs)(w,{title:"Contacts",children:[t.length>1&&Object(O.jsx)(k,{onChange:this.handleChange}),t.length?Object(O.jsx)(y,{contacts:this.props.contacts.items,onRemove:this.removeContact}):Object(O.jsx)("p",{children:"There are no contacts here"})]})]})}}]),n}(c.Component),z=Object(R.b)((function(t){return{contacts:{items:t.contacts.items,filter:t.contacts.filter}}}),(function(t){return{getAllContacts:function(e){t(S(e))},addContact:function(e){t(N(e))},removeContact:function(e){t(_(e))}}}))(L),Z=n(6),E=n(27),J=Object(A.c)([],(a={},Object(d.a)(a,S,(function(t,e){return e.payload})),Object(d.a)(a,N,(function(t,e){var n=e.payload;return[].concat(Object(E.a)(t),[n])})),Object(d.a)(a,_,(function(t,e){var n=e.payload;return Object(E.a)(t.filter((function(t){return t.id!==n})))})),a)),M=n(36),B=n.n(M),H=Object(Z.b)({items:J,filter:B.a}),I=Object(A.a)({reducer:{contacts:H}}),K=n(37);s.a.render(Object(O.jsx)(R.a,{store:I,children:Object(O.jsx)(K.a,{children:Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(z,{})})})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.70c152e8.chunk.js.map