(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{280:function(t,a,s){"use strict";s.r(a);var e=s(5),n=function(t){t.options.__data__block__={md_1a962850:"graph TB\nC((Users))--\x3eN[Nginx]\nN--\x3eS[Sails]\nN--\x3eS2[Sails]\nN--\x3eS3[Sails]"}},r=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"deploying-sails-js-with-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deploying-sails-js-with-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Deploying Sails.js with nginx")]),t._v(" "),s("p",[t._v("Nginx is a powerful and lightweight HTTP server that we use to proxy requests between\nthe internet and our Sails application. By serving our web traffic with nginx we will be able to load-balance our web\ntraffic between multiple application servers, host several domains or SSL certificates on the same IP address, set up L4 rate-limiting and access controls and much more.")]),t._v(" "),s("MermaidDiagram",{attrs:{id:"md_1a962850",value:JSON.stringify(t.$dataBlock.md_1a962850),preset:"vue"}}),s("p",[t._v("By the end of this guide all of our user traffic will flow into nginx and be passed off to one (or more) servers running our Sails application.")]),t._v(" "),s("p",[t._v("By using nginx at the edge to accept and handle user requests, we will be able (but not required) to load-balance requests across multiple application servers to prepare for increases in traffic and allow for "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Scalability#HORIZONTAL-SCALING",target:"_blank",rel:"noopener noreferrer"}},[t._v("horizontal scaling"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"application-requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#application-requirements","aria-hidden":"true"}},[t._v("#")]),t._v(" Application Requirements")]),t._v(" "),s("p",[t._v("In order for client IP addresses to be accessible in Sails, you'll need to set "),s("a",{attrs:{href:"https://sailsjs.com/documentation/reference/configuration/sails-config-http",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("sails.config.http.trustProxy")]),s("OutboundLink")],1),t._v(" to "),s("code",[t._v("true")]),t._v(". This guide also assumes that you have already configured your Sails application to run as a long-lived service.")]),t._v(" "),s("h2",{attrs:{id:"installing-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installing-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Installing nginx")]),t._v(" "),s("p",[t._v("You may need to first install nginx if it's not already.\nThe following commands should be enough to get you started quickly.")]),t._v(" "),s("p",[t._v("If you want to make sure you're running the latest version\nor to create a custom build of nginx you should check out the official "),s("a",{attrs:{href:"https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx installation docs"),s("OutboundLink")],1),t._v("\nas OS distributions can often include old versions in their software repositories.")]),t._v(" "),s("Tabs",{attrs:{type:"board-card"}},[s("Tab",{attrs:{label:"Ubuntu/Debian"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"CentOS/RHEL"}},[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])])]),t._v(" "),s("Tab",{attrs:{label:"OSX"}},[s("p",[t._v("Assuming you have "),s("a",{attrs:{href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("homebrew"),s("OutboundLink")],1),t._v(" installed, simply run:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("brew "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nginx\n")])])])])],1),t._v(" "),s("h2",{attrs:{id:"proxying-nginx-requests-to-our-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#proxying-nginx-requests-to-our-application","aria-hidden":"true"}},[t._v("#")]),t._v(" Proxying nginx requests to our application")]),t._v(" "),s("p",[t._v("We'll need to add a configuration file to tell nginx how and where to send requests to our Sails.js application.")]),t._v(" "),s("Tabs",{attrs:{type:"board-card"}},[s("Tab",{attrs:{label:"Ubuntu/Debian"}},[s("div",{staticClass:"tip custom-block"},[s("p",[t._v("If you're using Ubuntu/Debian, this configuration file will need to be placed in the "),s("code",[t._v("***/etc/nginx/sites-enabled***")]),t._v(" directory")])])]),t._v(" "),s("Tab",{attrs:{label:"CentOS/RHEL"}},[s("div",{staticClass:"tip custom-block"},[s("p",[t._v("If you're using CentOS/RHEL, this configuration file will need to be placed in the "),s("code",[t._v("***/etc/nginx/sites-enabled***")]),t._v(" directory")])])]),t._v(" "),s("Tab",{attrs:{label:"OSX"}},[s("div",{staticClass:"tip custom-block"},[s("p",[t._v("If you're using OSX, this configuration file will need to be placed in the "),s("code",[t._v("***/etc/nginx/sites-enabled***")]),t._v(" directory")])])])],1),t._v(" "),s("p",[t._v("The following nginx configuration file contains the "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=9ogQ0uge06o",target:"_blank",rel:"noopener noreferrer"}},[t._v("bare necessities"),s("OutboundLink")],1),t._v(" required to get nginx to proxy HTTP and WebSocket requests to our Sails.js application. It assumes that nginx and your Sails app are running on the same machine, and Sails is accepting requests on port "),s("code",[t._v("1337")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("kittehblr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This will proxy all HTTP and WebSocket requests to our Sails application defined above")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com www"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Send all requests to our Sails Application")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Proxy headers required for WebSocket connections")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v("     off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Upgrade "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upgrade"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pass the client IP and requested Host (ie, kittehblr.com) to Sails as request headers")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   Host             "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("The "),s("code",[t._v("upstream")]),t._v(" block tells nginx where to find our application. For now we have just the one server ("),s("code",[t._v("127.0.0.1")]),t._v("), but in the future you could easily have nginx "),s("a",{attrs:{href:"https://dnsdetective.net/articles/networking/http-load-balancing-with-nginx",target:"_blank",rel:"noopener noreferrer"}},[t._v("load balance requests between multiple servers"),s("OutboundLink")],1),t._v(" to handle increased load. Just add another "),s("code",[t._v("server")]),t._v(" line and "),s("code",[t._v("sudo service nginx reload")]),t._v(" to tell nginx about the configuration change.")]),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.nginx.com/resources/wiki/start/topics/examples/server_blocks/",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("server")]),s("OutboundLink")],1),t._v(" block defines our public facing proxy settings. Namely that we want to serve traffic for "),s("code",[t._v("kittehblr.com")]),t._v(" and "),s("code",[t._v("www.kittehblr.com")]),t._v(" on port "),s("code",[t._v("80")]),t._v(' ("regular" HTTP port).')]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("location /")]),t._v(" block passes "),s("em",[s("strong",[t._v("all")])]),t._v(" requests to our Sails application.")]),t._v(" "),s("h2",{attrs:{id:"serving-static-files-with-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serving-static-files-with-nginx","aria-hidden":"true"}},[t._v("#")]),t._v(" Serving static files with nginx")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[ request ] --\x3e [ nginx ] --\x3e [ Sails.js App ]\n")])])]),s("p",[t._v("nginx is likely to be able to serve static assets (your CSS, images, frontend JavaScript, etc) more efficiently than your node application,")]),t._v(" "),s("h2",{attrs:{id:"file-caching"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-caching","aria-hidden":"true"}},[t._v("#")]),t._v(" File Caching")]),t._v(" "),s("h2",{attrs:{id:"configuring-ssl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-ssl","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuring SSL")]),t._v(" "),s("h2",{attrs:{id:"all-together-now"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#all-together-now","aria-hidden":"true"}},[t._v("#")]),t._v(" All together now")]),t._v(" "),s("div",{staticClass:"language-nginx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nginx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("kittehblr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1337")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We could add multiple servers here, if we had them")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10.0.0.2:1337;")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10.0.0.3:1337;")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("map")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sent_http_content_type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$expires_kittehblr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    default                    off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html                  epoch"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("css                   max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    application"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("javascript     max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("image"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("168")]),t._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com www"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("access_log")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("access"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("error_log")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("var"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("opt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("client_max_body_size")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("M"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("expires")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$expires_kittehblr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pass off API and socket requests to the app server")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("upstream")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("kittehblr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v("     off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_http_version")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Upgrade "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_upgrade")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Connection "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upgrade"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   Host             "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])],1)},[],!1,null,null,null);"function"==typeof n&&n(r);a.default=r.exports}}]);