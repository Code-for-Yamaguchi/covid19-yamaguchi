(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{318:function(t,e,n){var content=n(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2cb42184",content,!0,{sourceMap:!1})},319:function(t,e,n){var content=n(326);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("97e7ab7c",content,!0,{sourceMap:!1})},320:function(t,e,n){var content=n(332);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("e882ae98",content,!0,{sourceMap:!1})},322:function(t,e,n){"use strict";var r=n(318);n.n(r).a},323:function(t,e,n){(e=n(15)(!1)).push([t.i,".header[data-v-55eabffa]{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle[data-v-55eabffa]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle[data-v-55eabffa]{font-size:2rem}}",""]),t.exports=e},324:function(t,e,n){"use strict";var r=n(1).a.extend({props:{icon:{type:String}}}),o=(n(322),n(5)),l=n(41),c=n.n(l),d=n(311),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.icon?e("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.icon)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"55eabffa",null);e.a=component.exports;c()(component,{VIcon:d.a})},325:function(t,e,n){"use strict";var r=n(319);n.n(r).a},326:function(t,e,n){(e=n(15)(!1)).push([t.i,".ExternalLink{text-decoration:none}.ExternalLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},329:function(t,e,n){"use strict";n(105);var r=n(1).a.extend({props:{url:{type:String,default:""},iconSize:{type:Number,default:15}}}),o=(n(325),n(5)),l=n(41),c=n.n(l),d=n(311),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"ExternalLink",attrs:{href:this.url,target:"_blank",rel:"noopener noreferrer"}},[this._t("default"),this._v(" "),e("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:this.iconSize/10+"rem","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[this._v("\n    mdi-open-in-new\n  ")])],2)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:d.a})},331:function(t,e,n){"use strict";var r=n(320);n.n(r).a},332:function(t,e,n){(e=n(15)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:bold}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:bold}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:bold}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>*:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard strong,.StaticCard em{border-bottom:2px solid #00a63c}.StaticCard em{font-style:normal}.StaticCard a{font-size:1.4rem;color:#006ca8 !important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}",""]),t.exports=e},334:function(t,e,n){"use strict";var r=n(1).a.extend(),o=(n(331),n(5)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},560:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(334),l=n(324),c=n(329),d=r.a.extend({components:{PageHeader:l.a,StaticCard:o.a,ExternalLink:c.a},head:function(){return{title:this.$t("お子様をお持ちの皆様へ")}}}),f=n(5),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Parent"},[n("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("臨時休校中の新型コロナウイルス感染症対応についてのお願い"))+"\n  ")]),t._v(" "),n("static-card",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[n("h3",[n("external-link",{attrs:{url:"https://www.kyoiku.metro.tokyo.lg.jp/school/content/learning_support.html","icon-size":24}},[t._v(t._s(t.$t("学びの支援サイト"))+"\n      ")])],1),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("臨時休業期間における子供たちの学びを支援する様々なウェブサイトを紹介しています。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("学習の基本的な内容を身に付けられる「東京・ベーシック・ドリル」や動画教材等があります。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("感染予防・健康管理")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("手洗い、咳エチケット等により、感染予防に努めてください。"))),n("br"),t._v(" "),n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cmsdata/1/4/2/142f5b06182fae366ce6e7bb2bf3d871.pdf","icon-size":16}},[t._v(t._s(t.$t("【参考】「基本は手洗い。」リーフレット (PDF : 696KB)"))+"\n        ")]),t._v(" "),n("br"),t._v(" "),n("external-link",{attrs:{url:"https://tokyodouga.jp/lViN9C_BS-0.html","icon-size":16}},[t._v(t._s(t.$t("【参考】感染症予防のための正しい手洗い方法（動画）"))+"\n        ")])],1),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("感染症を疑う場合の対応")))]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("各保健所にご相談ください")))]),t._v(" "),n("li",[t._v(t._s(t.$t("「新型コロナウイルスに関連する各種相談窓口について」（山口県広報広聴課）")))]),t._v(" "),n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cms/a11000/sodan/koronasoudan.html","icon-size":16}},[t._v(t._s(t.$t("https://www.pref.yamaguchi.lg.jp/cms/a11000/sodan/koronasoudan.html"))+"\n      ")])],1)]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("子育て中の保護者及び子どものための相談窓口について(県こども家庭課)")))]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("保護者向けチラシ (PDF : 159KB)")))]),t._v(" "),n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cmsdata/3/4/a/34a29b5bba282b813897d8b27f6b8f05.pdf","icon-size":16}},[t._v(t._s(t.$t("https://www.pref.yamaguchi.lg.jp/cmsdata/3/4/a/34a29b5bba282b813897d8b27f6b8f05.pdf"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("子ども向けチラシ (PDF : 124KB)")))]),t._v(" "),n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cmsdata/b/5/2/b526f18d3ec6407f6398db4216c4a668.pdf","icon-size":16}},[t._v(t._s(t.$t("https://www.pref.yamaguchi.lg.jp/cmsdata/b/5/2/b526f18d3ec6407f6398db4216c4a668.pdf"))+"\n      ")])],1)]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("その他")))]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("県立学校の臨時休業の状況について")))]),t._v(" "),n("external-link",{attrs:{url:"https://www.pref.yamaguchi.lg.jp/cms/a50100/korona/korona2020.html","icon-size":16}},[t._v(t._s(t.$t("https://www.pref.yamaguchi.lg.jp/cms/a50100/korona/korona2020.html"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("詳細は、各学校からのお知らせ等をご確認ください。")))])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);