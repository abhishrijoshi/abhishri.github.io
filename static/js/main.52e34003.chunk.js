(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{29:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(0),i=e(12),a=e.n(i),c=e(17),s=e(2),u=e(3);function l(){var n=Object(u.a)(["\n  html, body {\n    margin: 0;\n    padding: 0;\n  }\n\n  *, *::after, *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: ",";\n    color: ",";\n    height: 25vh;\n    text-rendering: optimizeLegibility;\n  \n  }\n\n  h1 {\n    margin-top:300px;\n    margin-bottom: 0px;\n    \n    font-size: 2rem;\n    text-align: center;\n    text-transform: uppercase;\n  }\n\n\n\n\n  \n  }\n  div {\n    text-align: center;\n  }\n\n  small {\n    display: block;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n  \n  }\n\n\n  hr {\n   \n   border: 2px dotted ",";\n  border-style: none none  dotted; \n  color: "," ; \n  background-color: "," ;\n  margin-left: auto;\n  margin-right: auto;\n  }\n\n\n  button {\n    font-size: 20px;\n    border: 1px solid black;\n    display: inline-block;\n    color: hsl(222, 25%, 14%);\n    position: relative;\n}\n\nbutton::after {\n     content: '';\n     position: absolute;\n     width: 100%;\n     transform: scaleX(1);\n     height: 3px;\n     bottom: 0;\n     left: 0;\n     background-color: hsl(243, 80%, 62%);\n     transform-origin: bottom left;\n     transition: transform .3s ease-in-out;\n }\n\nbutton:hover::after {\n     transform: scaleX(0);\n     transform-origin: bottom right;\n }\nh3{\n  position: absolute;\n  bottom: 250px;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n}\n\nh4{\n  position: absolute;\n  bottom: 100px;\n  text-align: center;\n  \n}\n\n\n\n}\n  "]);return l=function(){return n},n}var m=Object(s.b)(l(),(function(n){return n.theme.primary}),(function(n){return n.theme.secondry}),(function(n){return n.theme.primaryHover}),(function(n){return n.theme.primary}),(function(n){return n.theme.primaryLight}),(function(n){return n.theme.secondry})),d={primary:"white  ",secondry:"#1a1b1e ",primaryHover:"#343078",mobile:"576px"},p=e(4),b=e(6);function f(){var n=Object(u.a)(["\n  position: absolute;\n  top: 5%;\n  left: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  span {\n    width: 2rem;\n    height: 0.25rem;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return f=function(){return n},n}var h=s.c.button(f(),(function(n){var t=n.theme;return n.open?t.primary:t.secondry}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),g=function(n){var t=n.open,e=n.setOpen,o=Object(b.a)(n,["open","setOpen"]),i=!!t;return Object(r.jsxs)(h,Object(p.a)(Object(p.a)({"aria-label":"Toggle menu","aria-expanded":i,open:t,onClick:function(){return e(!t)}},o),{},{children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]}))};function j(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: ",";\n  transform: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 2rem;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: ",") {\n      width: 100%;\n    }\n\n  a {\n    font-size: 2rem;\n    text-transform: uppercase;\n    padding: 2rem 0;\n    font-weight: bold;\n    letter-spacing: 0.5rem;\n    color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: ",") {\n      font-size: 1.5rem;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return j=function(){return n},n}var x=s.c.nav(j(),(function(n){return n.theme.secondry}),(function(n){return n.open?"translateX(0)":"translateX(-100%)"}),(function(n){return n.theme.mobile}),(function(n){return n.theme.primary}),(function(n){return n.theme.mobile}),(function(n){return n.theme.primaryHover})),O=function(n){var t=n.open,e=Object(b.a)(n,["open"]),o=!!t;return Object(r.jsx)(x,Object(p.a)(Object(p.a)({open:t,"aria-hidden":!o},e),{},{children:Object(r.jsx)("a",{href:" https://github.com/abhishrijoshi ",target:"_blank",children:"Projects"})}))},y=e(16);var v=function(){var n,t,e=Object(o.useState)(!1),i=Object(c.a)(e,2),a=i[0],u=i[1],l=Object(o.useRef)(),p="main-menu";return n=l,t=function(){return u(!1)},Object(o.useEffect)((function(){var e=function(e){n.current&&!n.current.contains(e.target)&&t(e)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n,t]),Object(r.jsx)(s.a,{theme:d,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)("div",{ref:l,children:Object(r.jsxs)(y.a,{disabled:!a,children:[Object(r.jsx)(g,{open:a,setOpen:u,"aria-controls":p}),Object(r.jsx)(O,{open:a,setOpen:u,id:p})]})})]})})};a.a.render(Object(r.jsx)(v,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.52e34003.chunk.js.map