(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var i=n("pOBw"),a=n("q1tI"),o=n.n(a),r=n("NmYn"),c=n.n(r),l=n("OKom"),s=n("k4MR"),u=n("TSYQ"),b=n.n(u),p=n("QH2O"),m=n("qKvR"),d=function(e){var t,n=e.title,i=e.tabs,a=void 0===i?[]:i;return Object(m.b)("div",{className:b()(p.pageHeader,(t={},t[p.withTabs]=a.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.text},n)))))},g=n("pEPl"),N=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,i=g.data.site.siteMetadata.repository,a=n||i,o=a.baseUrl,r=a.subDirectory,c=o+"/edit/"+a.branch+r+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+N.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:N.link,href:c},"Edit this page on GitHub"))):null},f=n("FCXl"),j=(n("Oyvg"),n("Wbzz")),v=n("I8xM");var h=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],a=t.map((function(e){var t,a=c()(e,{lower:!0}),o=a===i,r=new RegExp(i+"(?!-)"),l=n.replace(r,a);return Object(m.b)("li",{key:e,className:b()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(m.b)(j.Link,{className:v.link,to:""+l},e))}));return Object(m.b)("div",{className:v.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:v.list},a))))))},i}(o.a.Component),y=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,r=t.frontmatter,u=void 0===r?{}:r,b=t.relativePagePath,p=t.titleType,g=u.tabs,N=u.title,j=u.theme,v=u.description,q=u.keywords,I=i.data.site.pathPrefix,x=I?a.pathname.replace(I,""):a.pathname,w=g?x.split("/").slice(-1)[0]||c()(g[0],{lower:!0}):"";return Object(m.b)(s.a,{tabs:g,homepage:!1,theme:j,pageTitle:N,pageDescription:v,pageKeywords:q,titleType:p},Object(m.b)(d,{title:o?Object(m.b)(o,null):N,label:"label",tabs:g}),g&&Object(m.b)(h,{slug:x,tabs:g,currentTab:w}),Object(m.b)(y.a,{padded:!0},n,Object(m.b)(O,{relativePagePath:b})),Object(m.b)(f.a,{pageContext:t,location:a,slug:x,tabs:g,currentTab:w}),Object(m.b)(l.a,null))}},IHbj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var i=n("7ljp"),a=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("PageDescription"),s=c("InlineNotification"),u={_frontmatter:r},b=a.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(i.b)(b,o({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<InlineNotification>")," component is used to communicate important information to a user.")),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("h4",{id:"info"},"Info"),Object(i.b)(s,{mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Lorem ipsum:")," dolor sit amet, ",Object(i.b)("a",o({parentName:"p"},{href:"/site-gatsby-carbon-hello/components/InlineNotification"}),"consectetur adipiscing")," elit. Curabitur ac odio arcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar pellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim dui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit non vel quam.")),Object(i.b)("h4",{id:"error"},"Error"),Object(i.b)(s,{kind:"error",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Error:")," dolor sit amet, ",Object(i.b)("a",o({parentName:"p"},{href:"/site-gatsby-carbon-hello/components/InlineNotification"}),"consectetur adipiscing")," elit. Curabitur ac odio arcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar pellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim dui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit non vel quam.")),Object(i.b)("h4",{id:"success"},"Success"),Object(i.b)(s,{kind:"success",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Success:")," dolor sit amet, ",Object(i.b)("a",o({parentName:"p"},{href:"/site-gatsby-carbon-hello/components/InlineNotification"}),"consectetur adipiscing")," elit. Curabitur ac odio arcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar pellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim dui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit non vel quam.")),Object(i.b)("h4",{id:"warning"},"Warning"),Object(i.b)(s,{kind:"warning",mdxType:"InlineNotification"},Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Warning:")," dolor sit amet, ",Object(i.b)("a",o({parentName:"p"},{href:"/site-gatsby-carbon-hello/components/InlineNotification"}),"consectetur adipiscing")," elit. Curabitur ac odio arcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar pellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim dui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit non vel quam.")),Object(i.b)("h2",{id:"code"},"Code"),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{className:"language-jsx",metastring:"path=components/InlineNotification/InlineNotification.js src=https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/InlineNotification",path:"components/InlineNotification/InlineNotification.js",src:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/master/packages/gatsby-theme-carbon/src/components/InlineNotification"}),'// Info\n<InlineNotification>\n\n**Lorem ipsum:** dolor sit amet, [consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio arcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar pellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim dui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit non vel quam.\n\n</InlineNotification>\n\n// Error\n<InlineNotification kind="error">\n\n**Error:** dolor sit amet, [consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio arcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar pellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim dui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit non vel quam.\n\n</InlineNotification>\n\n// Success\n<InlineNotification kind="success">\n\n**Success:** dolor sit amet, [consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio arcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar pellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim dui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit non vel quam.\n\n</InlineNotification>\n\n// Warning\n<InlineNotification kind="warning">\n\n**Warning:** dolor sit amet, [consectetur adipiscing](/components/InlineNotification) elit. Curabitur ac odio arcu. Vestibulum egestas eleifend porttitor. Quisque malesuada pulvinar pellentesque. Nunc dictum odio eu enim venenatis fringilla. Nunc finibus enim dui, a tempus quam commodo vitae. Donec non eros gravida dolor porta suscipit non vel quam.\n\n</InlineNotification>\n')),Object(i.b)("h3",{id:"inlinenotification-props"},Object(i.b)("inlineCode",{parentName:"h3"},"InlineNotification")," Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",o({parentName:"tr"},{align:null}),"property"),Object(i.b)("th",o({parentName:"tr"},{align:null}),"propType"),Object(i.b)("th",o({parentName:"tr"},{align:null}),"required"),Object(i.b)("th",o({parentName:"tr"},{align:null}),"default"),Object(i.b)("th",o({parentName:"tr"},{align:null}),"description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",o({parentName:"tr"},{align:null}),"children"),Object(i.b)("td",o({parentName:"tr"},{align:null}),"node"),Object(i.b)("td",o({parentName:"tr"},{align:null})),Object(i.b)("td",o({parentName:"tr"},{align:null})),Object(i.b)("td",o({parentName:"tr"},{align:null}),"Pass in the children that will be rendered within the notification")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",o({parentName:"tr"},{align:null}),"className"),Object(i.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",o({parentName:"tr"},{align:null})),Object(i.b)("td",o({parentName:"tr"},{align:null})),Object(i.b)("td",o({parentName:"tr"},{align:null}),"Specify an optional className to be applied to the container node")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",o({parentName:"tr"},{align:null}),"kind"),Object(i.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",o({parentName:"tr"},{align:null}),"yes"),Object(i.b)("td",o({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"info")),Object(i.b)("td",o({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"error"),", ",Object(i.b)("inlineCode",{parentName:"td"},"info"),", ",Object(i.b)("inlineCode",{parentName:"td"},"success"),", ",Object(i.b)("inlineCode",{parentName:"td"},"warning"))))))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/site-gatsby-carbon-hello"}}}')}}]);
//# sourceMappingURL=component---src-pages-components-inline-notification-mdx-d07fc3db7ca439b1cd34.js.map