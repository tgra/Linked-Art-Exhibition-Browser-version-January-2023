(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{172:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/exhibitions/start_dsc",function(){return r(1465)}])},8736:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(5893),s=r(545);function i(){return(0,n.jsx)(s.Z,{bg:"info",text:"light",children:(0,n.jsxs)(s.Z.Body,{children:[(0,n.jsx)(s.Z.Title,{children:"Exhibitions"}),(0,n.jsxs)(s.Z.Text,{children:["Alternative New York exhibitions","."]}),(0,n.jsx)(s.Z.Link,{href:"/exhibitions/title_asc",children:"Exhibition title"}),(0,n.jsx)(s.Z.Link,{href:"/exhibitions/start_asc",children:"Start date"})]})})}},9244:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),s=r(1664),i=r.n(s);function c(e){let{id:t,_label:r,start:s}=e,c="../../exhibition/";return c+=t.split("/").pop(),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i(),{href:c,children:r})}),(0,n.jsxs)("td",{className:"date",children:["  ",new Date(s).toDateString()]})]},t)}},91:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5893),s=r(1664),i=r.n(s);function c(){return(0,n.jsxs)("thead",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(i(),{href:"title_asc",children:"Title"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i(),{href:"start_asc",children:"Start date"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsxs)("th",{children:[(0,n.jsx)(i(),{href:"title_asc",children:"Asc"})," ",(0,n.jsx)(i(),{href:"title_dsc",children:"Dsc"})]}),(0,n.jsxs)("th",{children:[(0,n.jsx)(i(),{href:"start_asc",children:"Asc"})," ",(0,n.jsx)(i(),{href:"start_dsc",children:"Dsc"})]})]})]})}},1465:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return m}});var n=r(5893),s=r(7294),i=r(9008),c=r.n(i),l=r(8736),d=r(682),o=r(4051),h=r(1555),a=r(2186),u=r(7631),x=r(91),f=r(5147),j=r(9244);let p=e=>{let{exSummaryDataList:t}=e;return(0,n.jsx)(a.Z,{children:(0,n.jsxs)("div",{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:"MOMA & Alternative New York Exhibitions"}),(0,n.jsx)("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",integrity:"sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",crossOrigin:"anonymous"}),(0,n.jsx)("script",{src:"https://unpkg.com/react/umd/react.production.min.js",crossOrigin:!0,async:!0})]}),(0,n.jsx)("main",{children:(0,n.jsxs)(d.Z,{children:[(0,n.jsxs)(u.Z,{children:[(0,n.jsx)(u.Z.Item,{href:"../../",children:"Home"}),(0,n.jsx)(u.Z.Item,{active:!0,children:"Exhibitions"}),(0,n.jsx)(u.Z.Item,{active:!0,children:"Order: Start date - Descending"})]}),(0,n.jsx)(l.Z,{}),(0,n.jsx)("h3",{children:"Order: Start date - Descending"}),(0,n.jsx)(o.Z,{children:(0,n.jsx)(h.Z,{children:(0,n.jsxs)(f.Z,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[(0,n.jsx)(x.Z,{}),(0,n.jsx)("tbody",{children:t.map(e=>(0,s.createElement)(j.Z,{...e,key:e.id}))})]})})})]})})]})})};var m=!0;t.default=p},1555:function(e,t,r){"use strict";var n=r(4184),s=r.n(n),i=r(7294),c=r(6792),l=r(5893);let d=i.forwardRef((e,t)=>{let[{className:r,...n},{as:i="div",bsPrefix:d,spans:o}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,c.vE)(t,"col");let i=(0,c.pi)(),l=(0,c.zG)(),d=[],o=[];return i.forEach(e=>{let r,s,i;let c=n[e];delete n[e],"object"==typeof c&&null!=c?{span:r,offset:s,order:i}=c:r=c;let h=e!==l?`-${e}`:"";r&&d.push(!0===r?`${t}${h}`:`${t}${h}-${r}`),null!=i&&o.push(`order${h}-${i}`),null!=s&&o.push(`offset${h}-${s}`)}),[{...n,className:s()(r,...d,...o)},{as:e,bsPrefix:t,spans:d}]}(e);return(0,l.jsx)(i,{...n,ref:t,className:s()(r,!o.length&&d)})});d.displayName="Col",t.Z=d},4051:function(e,t,r){"use strict";var n=r(4184),s=r.n(n),i=r(7294),c=r(6792),l=r(5893);let d=i.forwardRef(({bsPrefix:e,className:t,as:r="div",...n},i)=>{let d=(0,c.vE)(e,"row"),o=(0,c.pi)(),h=(0,c.zG)(),a=`${d}-cols`,u=[];return o.forEach(e=>{let t;let r=n[e];delete n[e],null!=r&&"object"==typeof r?{cols:t}=r:t=r;let s=e!==h?`-${e}`:"";null!=t&&u.push(`${a}${s}-${t}`)}),(0,l.jsx)(r,{ref:i,...n,className:s()(t,d,...u)})});d.displayName="Row",t.Z=d},2186:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7294);let s={prefix:String(Math.round(1e10*Math.random())),current:0},i=n.createContext(s);"undefined"!=typeof window&&window.document&&window.document.createElement;var c=function(e){let t=(0,n.useContext)(i),r=(0,n.useMemo)(()=>({prefix:t===s?"":`${t.prefix}-${++t.current}`,current:0}),[t]);return n.createElement(i.Provider,{value:r},e.children)}},5147:function(e,t,r){"use strict";var n=r(4184),s=r.n(n),i=r(7294),c=r(6792),l=r(5893);let d=i.forwardRef(({bsPrefix:e,className:t,striped:r,bordered:n,borderless:i,hover:d,size:o,variant:h,responsive:a,...u},x)=>{let f=(0,c.vE)(e,"table"),j=s()(t,f,h&&`${f}-${h}`,o&&`${f}-${o}`,r&&`${f}-${"string"==typeof r?`striped-${r}`:"striped"}`,n&&`${f}-bordered`,i&&`${f}-borderless`,d&&`${f}-hover`),p=(0,l.jsx)("table",{...u,className:j,ref:x});if(a){let m=`${f}-responsive`;return"string"==typeof a&&(m=`${m}-${a}`),(0,l.jsx)("div",{className:m,children:p})}return p});t.Z=d}},function(e){e.O(0,[584,774,888,179],function(){return e(e.s=172)}),_N_E=e.O()}]);