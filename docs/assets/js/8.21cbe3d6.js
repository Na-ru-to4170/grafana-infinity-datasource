(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",{attrs:{align:"center"}}),a("h1",{attrs:{align:"center"}},[e._v("Grafana Infinity Data source"),e._v(" "),a("h5",{attrs:{align:"center"}},[e._v("Do infinite things with Grafana")]),e._v(" "),a("p"),e._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),a("ul",[a("li",[e._v("Turn any website into grafana datasource")]),e._v(" "),a("li",[e._v("Inline CSV / JSON support")]),e._v(" "),a("li",[e._v("JSON / CSV / HTML urls as a data source")])]),e._v(" "),a("h3",{attrs:{id:"upcoming-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upcoming-features"}},[e._v("#")]),e._v(" Upcoming features")]),e._v(" "),a("ul",[a("li",[e._v("Selecting attributes of HTML elements instead of text of the html element")]),e._v(" "),a("li",[e._v("Filter the results. Example: Ignore-first-row, Ignore-nth-rows, Ignore-odd, Ignore-even etc.")]),e._v(" "),a("li",[e._v("Header-less CSV files support")]),e._v(" "),a("li",[e._v("Custom fields support. Example: Sum of two fields. Joining two fields etc.")])]),e._v(" "),a("h2",{attrs:{id:"json-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-url"}},[e._v("#")]),e._v(" JSON URL")]),e._v(" "),a("p",[e._v("In the below example, we are going to convert the JSON URL "),a("code",[e._v("https://jsonplaceholder.typicode.com/todos")]),e._v(" into a grafana datasource.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92381992-bf020d00-f103-11ea-936d-94f903faa5e6.png",alt:"image"}})]),e._v(" "),a("p",[e._v("The URL returns an array of objects. Each item in the array goes as a table row. Property of each object goes into column of the table. By default, the datasource will not consider any columns for display. You have to manually specify the column names and corresponding properties in the JSON object.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" As the URL returns an array of objects, root selector / row have to be blank. If the root of the document is an object and you want to select specific property of the object, you can specify the selector of the object as a root selector / row. Example given "),a("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/issues/1#issue-694996991",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"json-inline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-inline"}},[e._v("#")]),e._v(" JSON Inline")]),e._v(" "),a("p",[e._v("Instead of specifying URL, you can hardcoded JSON object. For example, you can specify the json as shown in the below example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[\n  { "country": "india", "population": 420 },\n  { "country": "india", "population": 440 },\n  { "country": "usa", "population": 200 },\n  { "country": "uk", "population": 150 },\n  { "country": "china", "population": 400 }\n]\n')])])]),a("p",[e._v("You need to also specify the column names manually for display purposes.")]),e._v(" "),a("h2",{attrs:{id:"csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv"}},[e._v("#")]),e._v(" CSV")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://yesoreyeram.github.io/grafana-infinity-datasource/wiki/csv.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),a("OutboundLink")],1),e._v(" have more details on how to use CSV feature and latest guide.")]),e._v(" "),a("h3",{attrs:{id:"csv-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-url"}},[e._v("#")]),e._v(" CSV URL")]),e._v(" "),a("p",[e._v("In the below example, we are going to convert the CSV URL "),a("code",[e._v("https://gist.githubusercontent.com/yesoreyeram/64a46b02f0bf87cb527d6270dd84ea47/raw/32ae9b1a4a0183dceb3596226b818c8f428193af/sample-with-quotes.csv")]),e._v(" into a grafana datasource.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92382040-d8a35480-f103-11ea-8ff8-48c7ca211062.png",alt:"image"}})]),e._v(" "),a("p",[e._v("This is same as your JSON configuration. Ignore the root / rows as each line of CSV will be your rows. Though your csv file have columns, specify them as columns manually. Columns will appear in the same order you specify.")]),e._v(" "),a("h3",{attrs:{id:"csv-inline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-inline"}},[e._v("#")]),e._v(" CSV Inline")]),e._v(" "),a("p",[e._v("Instead of specifying URL, you can hardcoded csv values. For example, you can specify the csv in the following format")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("country,population,capital\nindia,200,mumbai\nindia,100,chennai\nchina,500,beijing\nusa,200,washington\ncanada,100,ottawa\n")])])]),a("p",[e._v("CSV data should have columns as its first line and comma delimited. You need to also specify the column names manually for display purposes.")]),e._v(" "),a("p",[e._v("Below screenshot shows the example of csv inline datasource")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92571108-9e0ff800-f27a-11ea-9fe9-9f9dcbd7125a.png",alt:"image"}})]),e._v(" "),a("h2",{attrs:{id:"html-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html-url"}},[e._v("#")]),e._v(" HTML URL")]),e._v(" "),a("p",[e._v("In the below example, we are going to convert the HTML URL "),a("code",[e._v("https://grafana.com/about/team/")]),e._v(" into grafana datasource.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92382094-f4a6f600-f103-11ea-8035-e1bbd9157629.png",alt:"image"}})]),e._v(" "),a("p",[e._v("Once you open the page in browser, right click and inspect the element (first element of the array you want to display). Then copy the selector as your root / rows element.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://user-images.githubusercontent.com/153843/92396876-ac94cd00-f11d-11ea-850d-f1754f980fc7.png",alt:"image"}})]),e._v(" "),a("p",[e._v("Then you can select, individual properties of the row as columns of the table as shown in the example image. You can select any element with in the row context.")]),e._v(" "),a("p",[e._v("Example :")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("h4")]),e._v(" --\x3e h4 element will be selected")]),e._v(" "),a("li",[a("code",[e._v(".team__title")]),e._v(" --\x3e Element with the class "),a("code",[e._v("team__title")]),e._v(" will be selected")]),e._v(" "),a("li",[a("code",[e._v("td:nth-child(4)")]),e._v(" --\x3e 4th td element within the row context will be selected. This will be useful when you element doesn't have any id or duplicate class names.")])]),e._v(" "),a("h2",{attrs:{id:"cors-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cors-setup"}},[e._v("#")]),e._v(" CORS setup")]),e._v(" "),a("p",[e._v("Some URLs you might not access directly due to CORS restriction set by the websites. At that time you may need to use proxy servers or hosted services as mentioned "),a("a",{attrs:{href:"https://stackoverflow.com/a/32167044/1576253",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". Example: Use "),a("strong",[e._v("https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/wiki/FIFA_World_Cup")]),e._v(" to connect with wikipedia.")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("p",[e._v("There are multiple ways to install this plugin into your grafana instance")]),e._v(" "),a("h3",{attrs:{id:"download-and-extract-zip-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-and-extract-zip-file"}},[e._v("#")]),e._v(" Download and extract zip file")]),e._v(" "),a("p",[e._v("Download the zip file from "),a("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("github"),a("OutboundLink")],1),e._v(" and extract into your grafana plugin folder. Then restart Grafana.")]),e._v(" "),a("h3",{attrs:{id:"using-grafana-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-grafana-cli"}},[e._v("#")]),e._v(" Using grafana-cli")]),e._v(" "),a("p",[e._v("If you are using grafana-cli, execute the following command to install the plugin")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("grafana-cli --pluginUrl https://github.com/yesoreyeram/grafana-infinity-datasource/archive/master.zip plugins install yesoreyeram-infinity-datasource\n")])])]),a("h3",{attrs:{id:"using-helm-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-helm-chart"}},[e._v("#")]),e._v(" Using helm chart")]),e._v(" "),a("p",[e._v("If you use helm chart to provision grafana, use the following config to install the plugin")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("plugins:\n  - https://github.com/yesoreyeram/grafana-infinity-datasource/archive/master.zip;yesoreyeram-infinity-datasource\n")])])]),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),a("p",[e._v("Once the plugin installed, you need to create an instance of the datasource. To create an instance follow the steps")]),e._v(" "),a("ul",[a("li",[e._v("Go to "),a("code",[e._v("http://localhost:3000/datasources")]),e._v(" and select "),a("em",[e._v("Add data source")])]),e._v(" "),a("li",[e._v("Search for "),a("strong",[e._v("Infinity")]),e._v(" plugin")]),e._v(" "),a("li",[e._v("Give some name. Any name. Sure; Your kitten names are allowed.")]),e._v(" "),a("li",[e._v("Save (and test)")])]),e._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[e._v("#")]),e._v(" License")]),e._v(" "),a("p",[e._v("Grafana Infinity datasource is licensed under the "),a("a",{attrs:{href:"https://github.com/yesoreyeram/grafana-infinity-datasource/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache 2.0 License"),a("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=n.exports}}]);