(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var n=a("pOBw"),r=a("q1tI"),o=a.n(r),i=a("NmYn"),s=a.n(i),b=a("OKom"),c=a("k4MR"),l=a("TSYQ"),p=a.n(l),m=a("QH2O"),d=a("qKvR"),u=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.text},a)))))},h=a("pEPl"),j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:s},"Edit this page on GitHub"))):null},g=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var f=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=s()(e,{lower:!0}),o=r===n,i=new RegExp(n+"(?!-)"),b=a.replace(i,r);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(d.b)(y.Link,{className:N.link,to:""+b},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},r))))))},n}(o.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,i=t.frontmatter,l=void 0===i?{}:i,p=t.relativePagePath,m=t.titleType,h=l.tabs,j=l.title,y=l.theme,N=l.description,v=l.keywords,k=n.data.site.pathPrefix,C=k?r.pathname.replace(k,""):r.pathname,x=h?C.split("/").slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:h,homepage:!1,theme:y,pageTitle:j,pageDescription:N,pageKeywords:v,titleType:m},Object(d.b)(u,{title:o?Object(d.b)(o,null):j,label:"label",tabs:h}),h&&Object(d.b)(f,{slug:C,tabs:h,currentTab:x}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:r,slug:C,tabs:h,currentTab:x}),Object(d.b)(b.a,null))}},Uxid:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i,s={},b=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:s},l=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(l,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"This project is a ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/"}),"Gatsby theme")," that empowers developers, writers, and designers to create fast, accessible sites that look and feel like Carbon. Follow along to start creating your own site.")),Object(n.b)("h2",{id:"first-steps"},"First steps"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Create your site")," – use the gatsby CLI to bootstrap your site with the starter"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npx gatsby new my-carbon-site https://github.com/carbon-design-system/gatsby-starter-carbon-theme\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Start developing")," – navigate into your directory with ",Object(n.b)("inlineCode",{parentName:"p"},"cd my-carbon-site"),"."),Object(n.b)("p",{parentName:"li"},"Start it up using one of the following snippets. You can tell which command to use based on the lock file at the root of your project (",Object(n.b)("inlineCode",{parentName:"p"},"yarn.lock")," for yarn and ",Object(n.b)("inlineCode",{parentName:"p"},"package-lock.json")," for npm). For yarn, type ",Object(n.b)("inlineCode",{parentName:"p"},"yarn dev")," for npm, you’ll use ",Object(n.b)("inlineCode",{parentName:"p"},"npm run dev"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"Make some changes!")," – open ",Object(n.b)("a",o({parentName:"p"},{href:"//localhost:8000"}),"localhost:8000")," in your browser to see your site running."),Object(n.b)("p",{parentName:"li"},"Each of the Items in your side bar correlates to a MDX file in your ",Object(n.b)("inlineCode",{parentName:"p"},"src/pages/")," directory. Navigate to a site and try editing the corresponding markdown file. You’ll be able to see it update live!"))),Object(n.b)("h2",{id:"-whats-in-here"},"🔍 What’s in here?"),Object(n.b)("p",null,"Lets check out the structure of our project"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{}),".\n├── LICENSE\n├── README.md\n├── gatsby-config.js\n├── node_modules\n├── package.json\n├── public\n├── src\n│   ├── data\n│   ├── gatsby-theme-carbon\n│   ├── images\n│   └── pages\n└── yarn.lock\n")),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"/node_modules")),": This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"/src")),": This directory will contain all of the code related to what you will see on the front-end of your site."),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"data")," this is where you’ll update your sidebar order and contents"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"images")," you can colocate your images here or store them next to your pages, whichver you chose"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"gatsby-theme-carbon")," this is where you’ll override (known as shadowing) the default ",Object(n.b)("inlineCode",{parentName:"li"},"gatsby-theme-carbon")," components"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"pages")," This is where most of your content will live. You’ll represent each page with an MDX file."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},".gitignore")),": This file tells git which files it should not track / not maintain a version history for.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"gatsby-config.js")),": This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description. You’ll notice that all of the configuration for the site is coming from ",Object(n.b)("inlineCode",{parentName:"p"},"gatsby-theme-carbon"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"LICENSE")),": Gatsby is licensed under the Apache 2.0 license.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"yarn.lock"))," (See ",Object(n.b)("inlineCode",{parentName:"p"},"package.json")," below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. ",Object(n.b)("strong",{parentName:"p"},"(You won’t change this file directly)."))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"package.json")),": A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project."))))}p.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/site-gatsby-carbon-hello"}}}')}}]);
//# sourceMappingURL=component---src-pages-getting-started-index-mdx-30e4f38bb397c9e3858f.js.map