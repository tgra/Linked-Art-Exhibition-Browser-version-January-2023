(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[914],{2630:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/persons/name_dsc",function(){return r(8634)}])},8159:function(e,n,r){"use strict";r.d(n,{Z:function(){return i}});var t=r(5893),s=r(545);function i(){return(0,t.jsx)(s.Z,{bg:"info",text:"light",children:(0,t.jsxs)(s.Z.Body,{children:[(0,t.jsx)(s.Z.Title,{children:"People"}),(0,t.jsxs)(s.Z.Text,{children:["People involved in alternative New York exhibitions","."]}),(0,t.jsx)(s.Z.Link,{href:"/persons/name_dsc",children:"Personal name"}),(0,t.jsx)(s.Z.Link,{href:"/persons/born_asc",children:"Birth date"}),(0,t.jsx)(s.Z.Link,{href:"/persons/died_asc",children:"Death date"}),(0,t.jsx)(s.Z.Link,{href:"/persons/totalex_dsc",children:"Number of exhibitions"})]})})}},8589:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(5893),s=r(1664),i=r.n(s);function c(e){let{id:n,_label:r,born:s,died:c,total_exhibitions:d}=e,h="/person/"+n.split("/").pop();return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(i(),{href:h,children:r})}),(0,t.jsx)("td",{children:new Date(s).toDateString()}),(0,t.jsx)("td",{children:new Date(c).toDateString()}),(0,t.jsx)("td",{children:d})]},n)}},4775:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(5893),s=r(1664),i=r.n(s);function c(){return(0,t.jsxs)("thead",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(i(),{href:"name_dsc",children:"Personal name"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i(),{href:"born_asc",children:"Birth date"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i(),{href:"died_asc",children:"Death date"})}),(0,t.jsx)("th",{children:(0,t.jsx)(i(),{href:"totalex_dsc",children:"Total number exhibitions"})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(i(),{href:"name_dsc",children:"Dsc"})}),(0,t.jsxs)("th",{children:[(0,t.jsx)(i(),{href:"born_asc",children:"Asc"})," ",(0,t.jsx)(i(),{href:"born_dsc",children:"Dsc"})]}),(0,t.jsxs)("th",{children:[(0,t.jsx)(i(),{href:"died_asc",children:"Asc"})," ",(0,t.jsx)(i(),{href:"died_dsc",children:"Dsc"})]}),(0,t.jsx)("th",{children:(0,t.jsx)(i(),{href:"totalex_dsc",children:"Dsc"})})]})]})}},8634:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return f}});var t=r(5893),s=r(7294),i=r(9008),c=r.n(i),d=r(8159),h=r(682),l=r(2186),o=r(7631),a=r(4775),x=r(8589),u=r(5147);let j=e=>{let{personSummaryDataList:n}=e;return(0,t.jsx)(l.Z,{children:(0,t.jsxs)("div",{children:[(0,t.jsxs)(c(),{children:[(0,t.jsx)("title",{children:"MOMA & Alternative New York Exhibitions"}),(0,t.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,t.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",crossOrigin:!0,async:!0})]}),(0,t.jsx)("main",{children:(0,t.jsxs)(h.Z,{children:[(0,t.jsxs)(o.Z,{children:[(0,t.jsx)(o.Z.Item,{href:"../../",children:"Home"}),(0,t.jsx)(o.Z.Item,{active:!0,children:"People"}),(0,t.jsx)(o.Z.Item,{active:!0,children:"Order: Personal name - Descending"})]}),(0,t.jsx)(d.Z,{}),(0,t.jsx)("h3",{children:"Order: Personal name - Descending"}),(0,t.jsxs)(u.Z,{children:[(0,t.jsx)(a.Z,{}),(0,t.jsx)("tbody",{children:n.map(e=>(0,s.createElement)(x.Z,{...e,key:e.id}))})]})]})})]})})};var f=!0;n.default=j},2186:function(e,n,r){"use strict";r.d(n,{Z:function(){return c}});var t=r(7294);let s={prefix:String(Math.round(1e10*Math.random())),current:0},i=t.createContext(s);"undefined"!=typeof window&&window.document&&window.document.createElement;var c=function(e){let n=(0,t.useContext)(i),r=(0,t.useMemo)(()=>({prefix:n===s?"":`${n.prefix}-${++n.current}`,current:0}),[n]);return t.createElement(i.Provider,{value:r},e.children)}},5147:function(e,n,r){"use strict";var t=r(4184),s=r.n(t),i=r(7294),c=r(6792),d=r(5893);let h=i.forwardRef(({bsPrefix:e,className:n,striped:r,bordered:t,borderless:i,hover:h,size:l,variant:o,responsive:a,...x},u)=>{let j=(0,c.vE)(e,"table"),f=s()(n,j,o&&`${j}-${o}`,l&&`${j}-${l}`,r&&`${j}-${"string"==typeof r?`striped-${r}`:"striped"}`,t&&`${j}-bordered`,i&&`${j}-borderless`,h&&`${j}-hover`),p=(0,d.jsx)("table",{...x,className:f,ref:u});if(a){let m=`${j}-responsive`;return"string"==typeof a&&(m=`${m}-${a}`),(0,d.jsx)("div",{className:m,children:p})}return p});n.Z=h}},function(e){e.O(0,[584,774,888,179],function(){return e(e.s=2630)}),_N_E=e.O()}]);