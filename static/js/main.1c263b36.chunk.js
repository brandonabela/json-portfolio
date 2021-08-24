(this["webpackJsonpjson-portfolio"]=this["webpackJsonpjson-portfolio"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"name":"Name Surname","email":"Email","heading":"Biography Description [education], [Work Experience], [Portfolio], [skills] and [contact].","skills":"Skills Description.","projects":"Projects Description.","employers":"Employers Descriptions."}')},28:function(e){e.exports=JSON.parse('[{"name":"discord","link":""},{"name":"facebook","link":""},{"name":"github","link":"https://github.com/brandonabela/"},{"name":"instagram","link":""},{"name":"linkedin","link":"https://www.linkedin.com/in/brandon-abela/"},{"name":"reddit","link":""},{"name":"skype","link":""},{"name":"slack","link":""},{"name":"telegram","link":""},{"name":"twitch","link":""},{"name":"twitter","link":""},{"name":"youtube","link":""}]')},32:function(e){e.exports=JSON.parse('[{"start":"Start 1","end":"End 1","name":"Employers 1","role":"Role 1"},{"start":"Start 2","end":"End 2","name":"Employers 2","role":"Role 2"},{"start":"Start 3","end":"End 3","name":"Employers 3","role":"Role 3"},{"start":"Start 4","end":"End 4","name":"Employers 4","role":"Role 4"}]')},33:function(e){e.exports=JSON.parse('[{"name":"Name 1","description":["Description 1."],"technologies":["Technologies 1A","Technologies 1B","Technologies 1C"],"images":1,"imageHeading":"Project","overview":true},{"name":"Name 2","description":["Description 2."],"technologies":["Technologies 2A"],"images":1,"imageHeading":"Project","overview":true},{"name":"Name 3","description":["Description 3."],"technologies":["Technologies 3A","Technologies 3B","Technologies 3C","Technologies 3D"],"images":1,"imageHeading":"Project","overview":true},{"name":"Name 4","description":["Description 4."],"technologies":["Technologies 4A","Technologies 4B"],"images":1,"imageHeading":"Project","overview":true}]')},34:function(e){e.exports=JSON.parse('[{"title":"Title 1","icon":"bi-file-earmark-code-fill","overview":true,"languages":["Language 1A","Language 1B","Language 1C","Language 1D"],"tools":["Tool 1A","Tool 1B"]},{"title":"Title 2","icon":"bi-file-earmark-code-fill","overview":true,"languages":["Language 2A","Language 2B","Language 2C"],"tools":["Tool 2A","Tool 2B","Tool 2C"]},{"title":"Title 3","icon":"bi-file-earmark-code-fill","overview":true,"languages":["Language 3A","Language 3B"],"tools":["Tool 3A"]}]')},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),i=n(18),a=n.n(i),r=(n(39),n(7)),o=n(6),l=(n(40),n(41),n(63)),j=n(58),d=n(64),b=(n(42),n(14)),m=n(28),h=n(1);var x=function(){var e=Object(o.f)().pathname.split("/");return Object(h.jsx)("header",{children:Object(h.jsx)(l.a,{collapseOnSelect:!0,fixed:"top",expand:"lg",children:Object(h.jsxs)(j.a,{children:[Object(h.jsxs)(l.a.Brand,{children:[m.map((function(e,t){return""!==e.link?Object(h.jsx)("a",{href:e.link,children:Object(h.jsx)("i",{className:"bi bi-"+e.name})},t):""})),Object(h.jsx)("a",{href:"mailto:"+b.email,children:Object(h.jsx)("i",{className:"bi bi-envelope-fill"})})]}),Object(h.jsx)(l.a.Toggle,{className:"bi bi-list"}),Object(h.jsx)(l.a.Collapse,{children:Object(h.jsx)(d.a,{children:[{path:"/",text:"About"},{path:"/education",text:"Education"},{path:"/work",text:"Work"},{path:"/skills",text:"Skills"},{path:"/portfolio",text:"Portfolio"},{path:"/contact",text:"Contact"}].map((function(t,n){return Object(h.jsx)(d.a.Link,{eventkey:n,as:r.b,to:t.path,className:e[1]===t.path.substr(1)?"active":"",children:t.text},n)}))})})]})})})},p=n(59),u=n(60),O=n(61),g=n(65),f=n(62);n(52);var v=function(e){return Object(h.jsx)(p.a,{children:Object(h.jsxs)("h3",{className:"text-center",children:[" ",e.name," "]})})},k=(n(53),n(32)),N=n(33),w=n(34);var T=function(){return Object(h.jsxs)("div",{className:"content about",children:[Object(h.jsx)("section",{className:"section-padding blue-section profile-intro",children:Object(h.jsx)(j.a,{children:Object(h.jsxs)(p.a,{children:[Object(h.jsx)(u.a,{sm:3,className:"profile-picture",children:Object(h.jsx)(O.a,{src:"./images/ProfilePicture.png",alt:"profile-picture",rounded:!0})}),Object(h.jsxs)(u.a,{sm:9,className:"website-intro",children:[Object(h.jsx)("h4",{children:" Hello, my name is "}),Object(h.jsxs)("h1",{children:[" ",b.name," "]}),Object(h.jsx)("p",{children:b.heading.split(/\[|]/).map((function(e,t){if(t%2===1){var n=e.toLowerCase();if(n.includes("education"))return Object(h.jsxs)(r.b,{to:"/education",children:[" ",e," "]},t);if(n.includes("work"))return Object(h.jsxs)(r.b,{to:"/work",children:[" ",e," "]},t);if(n.includes("skills"))return Object(h.jsxs)(r.b,{to:"/skills",children:[" ",e," "]},t);if(n.includes("portfolio"))return Object(h.jsxs)(r.b,{to:"/portfolio",children:[" ",e," "]},t);if(n.includes("contact"))return Object(h.jsxs)(r.b,{to:"/contact",children:[" ",e," "]},t)}return e}))}),Object(h.jsx)(r.b,{className:"btn",role:"button",to:"/contact",children:" Contact Me "})]})]})})}),Object(h.jsx)("section",{className:"section-padding dark-section",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(v,{name:"Skills Overview"}),Object(h.jsxs)("p",{className:"content-gutter text-center",children:[" ",b.skills," "]}),Object(h.jsx)(p.a,{className:"justify-content-md-center skills",children:w.filter((function(e){return e.overview})).slice(0,3).map((function(e){return Object(h.jsx)(u.a,{md:4,children:Object(h.jsxs)("div",{className:"skill-item",children:[Object(h.jsxs)("div",{className:"skill-icon text-center",children:[" ",Object(h.jsx)("i",{className:"bi "+e.icon})," "]}),Object(h.jsxs)("h5",{children:[" ",e.title," "]}),Object(h.jsx)("ul",{children:e.languages.slice(0,5).map((function(e){return Object(h.jsxs)("li",{children:[" ",Object(h.jsx)("span",{children:" \u2714 "})," ",e," "]})}))})]})})}))}),Object(h.jsx)(r.b,{className:"btn",role:"button",to:"/skills",children:" View All Skills "})]})}),Object(h.jsx)("section",{className:"section-padding light-section projects",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(v,{name:"Featured Projects"}),Object(h.jsxs)("p",{className:"content-gutter text-center",children:[" ",b.projects," "]}),Object(h.jsx)(p.a,{className:"justify-content-md-center text-center",children:N.filter((function(e){return e.overview})).slice(0,4).map((function(e){return Object(h.jsx)(u.a,{md:3,sm:6,children:Object(h.jsxs)(g.a,{children:[Object(h.jsxs)("div",{className:"card-img",children:[Object(h.jsx)(g.a.Img,{variant:"top",alt:e.name.toLowerCase().replaceAll(" ","_"),src:"./images/projects/"+e.imageHeading+"01.png"}),Object(h.jsx)(r.b,{className:"card-img-overlay btn",role:"button",to:"/portfolio/"+e.name.toLowerCase().replace(/\s+/g,"-"),children:Object(h.jsx)(r.b,{className:"btn",role:"button",to:"/portfolio/"+e.name.toLowerCase().replace(/\s+/g,"-"),children:"Read More"})})]}),Object(h.jsxs)(g.a.Body,{children:[Object(h.jsx)(g.a.Title,{children:Object(h.jsx)(r.b,{to:"/portfolio/"+e.name.toLowerCase().replace(/\s+/g,"-"),children:e.name})}),Object(h.jsx)(g.a.Text,{children:e.technologies.map((function(e){return Object(h.jsxs)(f.a,{pill:!0,children:[" ",e," "]})}))})]})]})})}))}),Object(h.jsx)(r.b,{className:"btn",role:"button",to:"/portfolio",children:" View All Projects "})]})}),Object(h.jsx)("section",{className:"section-padding dark-section",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(v,{name:"Employers"}),Object(h.jsxs)("p",{className:"content-gutter text-center",children:[" ",b.employers," "]}),Object(h.jsx)(p.a,{className:"justify-content-md-center",children:k.slice(0,4).map((function(e){return Object(h.jsx)(u.a,{md:3,sm:6,className:"text-center",children:Object(h.jsxs)("div",{className:"timeline-step",children:[Object(h.jsx)("div",{className:"inner-circle"}),Object(h.jsxs)("p",{className:"title",children:[" ",e.start.substring(e.start.lastIndexOf(" ")+1)," "]}),Object(h.jsxs)("p",{children:[" ",e.role," "]}),Object(h.jsxs)("p",{children:[" ",e.name," "]})]})})}))}),Object(h.jsx)(r.b,{className:"btn",role:"button",to:"/work",children:" View All Employers "})]})}),Object(h.jsx)("section",{className:"section-padding blue-section text-center contact",children:Object(h.jsx)(j.a,{children:Object(h.jsx)(p.a,{children:Object(h.jsxs)(u.a,{children:[Object(h.jsx)(O.a,{src:"./images/ProfilePicture.png",roundedCircle:!0}),Object(h.jsx)("h3",{children:" Interested in hiring me for your project? "}),Object(h.jsxs)("p",{className:"content-gutter",children:[" Looking for an experienced developer to develop or ship your software product? To start an initial chat, drop an email at ",Object(h.jsxs)("a",{href:"mailto:"+b.email,children:[" ",b.email," "]})," or use the form on ",Object(h.jsx)(r.b,{to:"/contact",children:" Contact Me "}),". "]}),Object(h.jsx)(r.b,{className:"btn",role:"button",to:"/contact",children:" Contact Me "})]})})})})]})};n(54);var y=function(e){return Object(h.jsx)("div",{className:"page-heading",children:Object(h.jsx)(j.a,{children:Object(h.jsx)(p.a,{children:Object(h.jsxs)("h2",{children:[" ",e.name," "]})})})})};var A=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{name:"Education"}),Object(h.jsx)(j.a,{})]})};var C=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{name:"Work Experience"}),Object(h.jsx)(j.a,{})]})};var E=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{name:"Skills"}),Object(h.jsx)(j.a,{})]})};var S=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{name:"Portfolio"}),Object(h.jsx)(j.a,{})]})};var L=function(e){var t=e.match;return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{name:"Portfolio Detail - ID"+t.params.id}),Object(h.jsx)(j.a,{})]})};var P=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(y,{name:"Contact"}),Object(h.jsx)(j.a,{})]})};var B=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"Not Found"})})};n(55);var D=function(){return Object(h.jsx)("footer",{children:Object(h.jsx)(j.a,{children:Object(h.jsx)(p.a,{className:"text-center",children:Object(h.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," - ",Object(h.jsx)("a",{href:"https://github.com/brandonabela/json-portfolio",children:"Template"})," developed by ",Object(h.jsx)("a",{href:"https://github.com/brandonabela",children:"Brandon Abela"}),". All rights reserved."]})})})})};var J=function(){return Object(h.jsx)(r.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsx)("div",{className:"page",children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:T}),Object(h.jsx)(o.a,{path:"/education",component:A}),Object(h.jsx)(o.a,{path:"/work",component:C}),Object(h.jsx)(o.a,{path:"/skills",component:E}),Object(h.jsx)(o.a,{exact:!0,path:"/portfolio",component:S}),Object(h.jsx)(o.a,{path:"/portfolio/:id",component:L}),Object(h.jsx)(o.a,{path:"/contact",component:P}),Object(h.jsx)(o.a,{component:B})]})}),Object(h.jsx)(D,{})]})})};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(J,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.1c263b36.chunk.js.map