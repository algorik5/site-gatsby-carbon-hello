(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),n=a("q1tI"),o=a.n(n),s=a("NmYn"),b=a.n(s),l=a("OKom"),c=a("k4MR"),i=a("TSYQ"),p=a.n(i),d=a("QH2O"),m=a("qKvR"),h=function(e){var t,a=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(m.b)("div",{className:p()(d.pageHeader,(t={},t[d.withTabs]=n.length,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:d.text},a)))))},u=a("pEPl"),g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=u.data.site.siteMetadata.repository,n=a||r,o=n.baseUrl,s=n.subDirectory,b=o+"/edit/"+n.branch+s+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},j=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var v=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=b()(e,{lower:!0}),o=n===r,s=new RegExp(r+"(?!-)"),l=a.replace(s,n);return Object(m.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(m.b)(f.Link,{className:N.link,to:""+l},e))}));return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:N.list},n))))))},r}(o.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,s=t.frontmatter,i=void 0===s?{}:s,p=t.relativePagePath,d=t.titleType,u=i.tabs,g=i.title,f=i.theme,N=i.description,y=i.keywords,x=r.data.site.pathPrefix,k=x?n.pathname.replace(x,""):n.pathname,T=u?k.split("/").slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(m.b)(c.a,{tabs:u,homepage:!1,theme:f,pageTitle:g,pageDescription:N,pageKeywords:y,titleType:d},Object(m.b)(h,{title:o?Object(m.b)(o,null):g,label:"label",tabs:u}),u&&Object(m.b)(v,{slug:k,tabs:u,currentTab:T}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:p})),Object(m.b)(j.a,{pageContext:t,location:n,slug:k,tabs:u,currentTab:T}),Object(m.b)(l.a,null))}},AsDm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),n=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s,b={},l=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:b},i=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(i,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(l,{mdxType:"PageDescription"},Object(r.b)("p",null,"When authoring markdown using the Carbon Gatsby theme, code blocks have some extra super powers you can take advantage of. We provide carbon-themed syntax highlighting as well as optional ",Object(r.b)("inlineCode",{parentName:"p"},"path")," and ",Object(r.b)("inlineCode",{parentName:"p"},"src")," features.")),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"}),"### Path and src\n")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-markdown",metastring:"path=/directory/file.mdx",path:"/directory/file.mdx"}),"### Just path\n")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-markdown",metastring:"src=https://gatsby-theme-carbon.now.sh",src:"https://gatsby-theme-carbon.now.sh"}),"### Just src\n")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-markdown"}),"### No path or src\n")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"}),"### Path and src w/ overflow\n\nThis example overflows to demonstrate the text fading out under the side bar. This example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar. This example overflows to demonstrate the text fading out under the side bar.\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Code block")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"within a list item"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",o({parentName:"pre"},{className:"language-markdown",metastring:"path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh",path:"/directory/file.mdx",src:"https://gatsby-theme-carbon.now.sh"}),"### Path and src w/ overflow\n\nThis example overflows to demonstrate the text fading out under the side bar. This example overflows to demonstrate the text fading out under the side bar.\nThis example overflows to demonstrate the text fading out under the side bar. This example overflows to demonstrate the text fading out under the side bar.\n")))),Object(r.b)("h2",{id:"code"},"Code"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"```markdown path=/directory/file.mdx src=https://gatsby-theme-carbon.now.sh\n### Path and src\n\nThis code snippet provides both a `path` and a `src`.\n```\n")),Object(r.b)("h3",{id:"props"},"Props"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",o({parentName:"tr"},{align:null}),"property"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"propType"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"language"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",o({parentName:"tr"},{align:null}),Object(r.b)("a",o({parentName:"td"},{href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/vendor/prism/includeLangs.js"}),"Available languages."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"src"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"The full url of a relevant link (source)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"path"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"A string indicating the filename or path. Due to markdown limitations this can only be a single word")))))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/site-gatsby-carbon-hello"}}}')}}]);
//# sourceMappingURL=component---src-pages-components-code-blocks-mdx-54e2d69aa78ebb5147bd.js.map