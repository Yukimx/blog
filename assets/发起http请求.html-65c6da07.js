const t=JSON.parse('{"key":"v-392e3e4e","path":"/zh/front/01-javaScript/%E5%8F%91%E8%B5%B7http%E8%AF%B7%E6%B1%82.html","title":"发起http请求","lang":"zh-CN","frontmatter":{"title":"发起http请求","date":"2023-11-25T21:11:22.000Z","category":["front","01-javaScript"],"tag":["js","java","html"],"description":"JS使用AJAX发起Http请求 前言： ​\\t\\t在JS中没有发起Http请求的能力，所有我们需要引入代码片段让JS发起http请求，我们称这样的代码片段为——AJAX（Asynchronous JAvaScript by Xml ） ​\\tAJAX借助 JS 中的一个内置对象：XMLHttpRequest，可简写为xhr 1、使用到对象XMLHttpRequest &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;title&gt;Ajax 请求&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;script&gt; &lt;!-- js发送http请求 利用相应的代码片段--&gt; var xhr=new XMLHttpRequest(); &lt;!-- 初始化js中的内置对象XMLHttpRequest--&gt; xmlhttp.onreadystatechange=function() // 执行成功后的回调函数 { if (xmlhttp.readyState==4 &amp;&amp; xmlhttp.status==200) { document.getElementById(\\"myDiv\\").innerHTML=xmlhttp.responseText; } } xhr.open(\\"post\\",\\"/hhhhhhh\\");&lt;!-- 提供HTTP请求的 方法和url--&gt; xhr.send();&lt;!-- 发起真正的请求--&gt; &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://zhifeng.top/zh/front/01-javaScript/%E5%8F%91%E8%B5%B7http%E8%AF%B7%E6%B1%82.html"}],["meta",{"property":"og:site_name","content":"苏木的博客"}],["meta",{"property":"og:title","content":"发起http请求"}],["meta",{"property":"og:description","content":"JS使用AJAX发起Http请求 前言： ​\\t\\t在JS中没有发起Http请求的能力，所有我们需要引入代码片段让JS发起http请求，我们称这样的代码片段为——AJAX（Asynchronous JAvaScript by Xml ） ​\\tAJAX借助 JS 中的一个内置对象：XMLHttpRequest，可简写为xhr 1、使用到对象XMLHttpRequest &lt;!DOCTYPE html&gt; &lt;html lang=\\"en\\"&gt; &lt;head&gt; &lt;meta charset=\\"UTF-8\\"&gt; &lt;title&gt;Ajax 请求&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;script&gt; &lt;!-- js发送http请求 利用相应的代码片段--&gt; var xhr=new XMLHttpRequest(); &lt;!-- 初始化js中的内置对象XMLHttpRequest--&gt; xmlhttp.onreadystatechange=function() // 执行成功后的回调函数 { if (xmlhttp.readyState==4 &amp;&amp; xmlhttp.status==200) { document.getElementById(\\"myDiv\\").innerHTML=xmlhttp.responseText; } } xhr.open(\\"post\\",\\"/hhhhhhh\\");&lt;!-- 提供HTTP请求的 方法和url--&gt; xhr.send();&lt;!-- 发起真正的请求--&gt; &lt;/script&gt; &lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Sumu"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:published_time","content":"2023-11-25T21:11:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"发起http请求\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-25T21:11:22.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sumu\\",\\"url\\":\\"https://github.com/xvzhifeng\\",\\"email\\":\\"xvzhifeng@126.com\\"}]}"]]},"headers":[{"level":3,"title":"JS使用AJAX发起Http请求","slug":"js使用ajax发起http请求","link":"#js使用ajax发起http请求","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":1.33,"words":200},"filePathRelative":"zh/front/01-javaScript/发起http请求.md","localizedDate":"2023年11月26日","excerpt":"<h3> JS使用AJAX发起Http请求</h3>\\n<hr>\\n<p><strong>前言：</strong></p>\\n<p>​\\t\\t在JS中没有发起Http请求的能力，所有我们需要引入代码片段让JS发起http请求，我们称这样的代码片段为——<strong>AJAX</strong>（Asynchronous JAvaScript by Xml ）\\n​\\tAJAX借助 JS 中的一个内置对象：XMLHttpRequest，可简写为xhr</p>\\n<p>1、使用到对象XMLHttpRequest</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token constant\\">DOCTYPE</span> html<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span>html lang<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"en\\"</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span>head<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span>meta charset<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"UTF-8\\"</span><span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span>title<span class=\\"token operator\\">&gt;</span>Ajax 请求<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>title<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>head<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span>body<span class=\\"token operator\\">&gt;</span>\\n\\n<span class=\\"token operator\\">&lt;</span>script<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span> js发送http请求 利用相应的代码片段<span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token keyword\\">var</span> xhr<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">XMLHttpRequest</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span> <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span> 初始化js中的内置对象XMLHttpRequest<span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n    xmlhttp<span class=\\"token punctuation\\">.</span><span class=\\"token function-variable function\\">onreadystatechange</span><span class=\\"token operator\\">=</span><span class=\\"token keyword\\">function</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\">// 执行成功后的回调函数</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>xmlhttp<span class=\\"token punctuation\\">.</span>readyState<span class=\\"token operator\\">==</span><span class=\\"token number\\">4</span> <span class=\\"token operator\\">&amp;&amp;</span> xmlhttp<span class=\\"token punctuation\\">.</span>status<span class=\\"token operator\\">==</span><span class=\\"token number\\">200</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token punctuation\\">{</span>\\n        document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"myDiv\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>innerHTML<span class=\\"token operator\\">=</span>xmlhttp<span class=\\"token punctuation\\">.</span>responseText<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n    xhr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">open</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"post\\"</span><span class=\\"token punctuation\\">,</span><span class=\\"token string\\">\\"/hhhhhhh\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span> 提供<span class=\\"token constant\\">HTTP</span>请求的 方法和url<span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n    xhr<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">send</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span><span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">!</span><span class=\\"token operator\\">--</span> 发起真正的请求<span class=\\"token operator\\">--</span><span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>script<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>body<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>html<span class=\\"token operator\\">&gt;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
