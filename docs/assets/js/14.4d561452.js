(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{360:function(a,t,s){"use strict";s.r(t);var n=s(42),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[a._v("#")]),a._v(" Installation")]),a._v(" "),s("p",[a._v("There are multiple ways to install this plugin into your grafana instance")]),a._v(" "),s("h3",{attrs:{id:"download-and-extract-zip-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download-and-extract-zip-file"}},[a._v("#")]),a._v(" Download and extract zip file")]),a._v(" "),s("p",[a._v("Download the latest zip file from "),s("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("github"),s("OutboundLink")],1),a._v(" and extract into your grafana plugin folder. Then restart Grafana.")]),a._v(" "),s("h3",{attrs:{id:"using-grafana-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-grafana-cli"}},[a._v("#")]),a._v(" Using grafana-cli")]),a._v(" "),s("p",[a._v("If you are using grafana-cli, execute the following command to install the plugin")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("grafana-cli plugins "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" yesoreyeram-infinity-datasource\n")])])]),s("p",[a._v("or")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("grafana-cli --pluginUrl "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ZIP_FILE_URL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" plugins "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" yesoreyeram-infinity-datasource\n")])])]),s("p",[a._v("Example:")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("grafana-cli --pluginUrl https://github.com/yesoreyeram/grafana-infinity-datasource/releases/download/v0.6.0-alpha2/yesoreyeram-infinity-datasource-0.6.0.zip plugins "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" yesoreyeram-infinity-datasource\n")])])]),s("h3",{attrs:{id:"using-helm-chart"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-helm-chart"}},[a._v("#")]),a._v(" Using helm chart")]),a._v(" "),s("p",[a._v("If you use helm chart to provision grafana, use the following config to install the plugin")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" <ZIP_FILE_URL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v(";yesoreyeram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("infinity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("datasource\n")])])]),s("p",[a._v("Example:")]),a._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//github.com/yesoreyeram/grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("infinity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("datasource/releases/download/v0.6.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("alpha2/yesoreyeram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("infinity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("datasource"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("0.6.0.zip;yesoreyeram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("infinity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("datasource\n")])])]),s("h2",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[a._v("#")]),a._v(" Configuration")]),a._v(" "),s("p",[a._v("Once the plugin installed, you need to create an instance of the datasource. To create an instance follow the steps")]),a._v(" "),s("ul",[s("li",[a._v("Go to "),s("code",[a._v("http://localhost:3000/datasources")]),a._v(" and select "),s("em",[a._v("Add data source")])]),a._v(" "),s("li",[a._v("Search for "),s("strong",[a._v("Infinity")]),a._v(" plugin")]),a._v(" "),s("li",[a._v("Give some name. Any name. Sure; Your kitten names are allowed.")]),a._v(" "),s("li",[a._v("Select mode as "),s("code",[a._v("Basic")])]),a._v(" "),s("li",[a._v("Save.")])]),a._v(" "),s("p",[a._v("If you ever need an URL to be authenticated or proxy through grafana server, you need to use "),s("code",[a._v("Advanced")]),a._v(" mode.  With advanced mode consider the following.")]),a._v(" "),s("ul",[s("li",[a._v("Only one domain allowed. (If you need to access multiple domains, use multiple instances of the datasource)")]),a._v(" "),s("li",[a._v("Specify the domain name as the URL in the datasource settings. This can also contain common url path. Example: "),s("code",[a._v("https://api.github.com/graphql")])]),a._v(" "),s("li",[a._v("While querying, use the remaining part of the the URL. For example, using "),s("code",[a._v("/my-endpoint")]),a._v(" will yield the final url as "),s("code",[a._v("https://api.github.com/graphql/my-endpoint")])])]),a._v(" "),s("h2",{attrs:{id:"provisioning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provisioning"}},[a._v("#")]),a._v(" Provisioning")]),a._v(" "),s("p",[a._v("If you want to "),s("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/administration/provisioning/#provisioning-grafana",target:"_blank",rel:"noopener noreferrer"}},[a._v("provision"),s("OutboundLink")],1),a._v(" your datasources via grafana provisioning feature, use the following settings")]),a._v(" "),s("h3",{attrs:{id:"basic-provisioning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-provisioning"}},[a._v("#")]),a._v(" Basic Provisioning")]),a._v(" "),s("p",[a._v("If you need to provision via file, use the following settings for the basic use cases.")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <<YOUR DATASOURCE INSTANCE NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yesoreyeram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("infinity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("datasource\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("access")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" proxy\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("isDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("jsonData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("datasource_mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"basic"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("readOnly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])]),s("h3",{attrs:{id:"advanced-provisioning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-provisioning"}},[a._v("#")]),a._v(" Advanced Provisioning")]),a._v(" "),s("p",[a._v("If you need an advanced version of the datasource, use the following format.")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <<YOUR DATASOURCE INSTANCE NAME. Example "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Github"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" yesoreyeram"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("infinity"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("datasource\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("access")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" proxy\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("isDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("false")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <<YOUR URL. Example "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//api.github.com/graphql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("basicAuth")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("basicAuthUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <<YOUR USER NAME. Example "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" mygithubid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("jsonData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("datasource_mode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"advanced"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("secureJsonData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n       "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("basicAuthPassword")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" <<YOUR PASSWORD. Example "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" MY_Github_PAT_Token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("readOnly")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);