const e=JSON.parse('{"key":"v-140cbdd6","path":"/zh/spider/JS%E9%80%86%E5%90%91/webpack%E7%B3%BB%E5%88%97/04-webpack-practice02.html","title":"04-webpack-practice02","lang":"zh-CN","frontmatter":{"title":"04-webpack-practice02","date":"2023-11-29T02:08:36.000Z","category":["spider","JS逆向","webpack系列"],"tag":["js"],"description":"Webpack 练习专题 02 前言： 练习webpack 逆向 1、网站分析 网站：YUhSMGNITTZMeTluWjNwNVpuY3VabW91WjI5MkxtTnVMMmx1WkdWNEwyNWxkMHhwYzNRdlAzUjVjR1U5TVRNPQ== 通过刷新页面可以看到返回的data是加密参数，需要还原。 image-20231129013709427 观察header","head":[["meta",{"property":"og:url","content":"https://zhifeng.top/zh/spider/JS%E9%80%86%E5%90%91/webpack%E7%B3%BB%E5%88%97/04-webpack-practice02.html"}],["meta",{"property":"og:site_name","content":"苏木的博客"}],["meta",{"property":"og:title","content":"04-webpack-practice02"}],["meta",{"property":"og:description","content":"Webpack 练习专题 02 前言： 练习webpack 逆向 1、网站分析 网站：YUhSMGNITTZMeTluWjNwNVpuY3VabW91WjI5MkxtTnVMMmx1WkdWNEwyNWxkMHhwYzNRdlAzUjVjR1U5TVRNPQ== 通过刷新页面可以看到返回的data是加密参数，需要还原。 image-20231129013709427 观察header"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-28T18:11:30.000Z"}],["meta",{"property":"article:author","content":"Sumu"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:published_time","content":"2023-11-29T02:08:36.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-28T18:11:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"04-webpack-practice02\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-29T02:08:36.000Z\\",\\"dateModified\\":\\"2023-11-28T18:11:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sumu\\",\\"url\\":\\"https://github.com/xvzhifeng\\",\\"email\\":\\"xvzhifeng@126.com\\"}]}"]]},"headers":[{"level":2,"title":"1、网站分析","slug":"_1、网站分析","link":"#_1、网站分析","children":[]},{"level":2,"title":"2、加密位置定位","slug":"_2、加密位置定位","link":"#_2、加密位置定位","children":[{"level":3,"title":"2.1 header加密，搜索关键字","slug":"_2-1-header加密-搜索关键字","link":"#_2-1-header加密-搜索关键字","children":[]},{"level":3,"title":"2.2 response解密，搜索关键字JSON.parse","slug":"_2-2-response解密-搜索关键字json-parse","link":"#_2-2-response解密-搜索关键字json-parse","children":[]}]},{"level":2,"title":"3、逆向加密参数","slug":"_3、逆向加密参数","link":"#_3、逆向加密参数","children":[{"level":3,"title":"3.1 Portal-Sign还原","slug":"_3-1-portal-sign还原","link":"#_3-1-portal-sign还原","children":[]},{"level":3,"title":"3.2 data还原","slug":"_3-2-data还原","link":"#_3-2-data还原","children":[]}]}],"git":{"createdTime":1701195090000,"updatedTime":1701195090000,"contributors":[{"name":"xzf","email":"xvzhifeng@126.com","commits":1}]},"readingTime":{"minutes":7.91,"words":1187},"filePathRelative":"zh/spider/JS逆向/webpack系列/04-webpack-practice02.md","localizedDate":"2023年11月29日","excerpt":"<h1> Webpack 练习专题 02</h1>\\n<p>前言：</p>\\n<p>练习webpack 逆向</p>\\n<h2> 1、网站分析</h2>\\n<p>网站：<code>YUhSMGNITTZMeTluWjNwNVpuY3VabW91WjI5MkxtTnVMMmx1WkdWNEwyNWxkMHhwYzNRdlAzUjVjR1U5TVRNPQ==</code></p>\\n<p>通过刷新页面可以看到返回的data是加密参数，需要还原。</p>\\n<figure><figcaption>image-20231129013709427</figcaption></figure>\\n<p>观察header</p>","autoDesc":true}');export{e as data};
