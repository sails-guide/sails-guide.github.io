(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{247:function(e,t,i){},278:function(e,t,i){"use strict";var n=i(247);i.n(n).a},287:function(e,t,i){"use strict";i.r(t);var n={name:"tree-item",props:{item:Object},data:function(){return{isOpen:!1}},computed:{isFolder:function(){return this.item.children&&this.item.children.length}},methods:{toggle:function(){this.onSelect(this.item),this.isFolder&&(this.isOpen=!this.isOpen)},onSelect:function(e){this.$emit("selected",e)}}},s=(i(278),i(5)),o=Object(s.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[i("div",{class:{bold:e.isFolder},on:{click:e.toggle}},[e.isFolder?i("span",[e._v("["+e._s(e.isOpen?"-":"+")+"]")]):e._e(),e._v("\n    "+e._s(e.item.name)+"\n  ")]),e._v(" "),e.isFolder?i("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}]},e._l(e.item.children,function(t,n){return i("tree-item",{key:n,staticClass:"item",attrs:{item:t},on:{"make-folder":function(t){return e.$emit("make-folder",t)},selected:e.onSelect}})}),1):e._e()])},[],!1,null,"0ece6dc7",null);t.default=o.exports}}]);