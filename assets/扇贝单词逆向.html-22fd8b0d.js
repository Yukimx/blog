const e=JSON.parse('{"key":"v-153ca2b2","path":"/zh/posts/%E7%88%AC%E8%99%AB/JS%E9%80%86%E5%90%91/%E6%89%87%E8%B4%9D%E5%8D%95%E8%AF%8D%E9%80%86%E5%90%91.html","title":"扇贝单词逆向","lang":"zh-CN","frontmatter":{"title":"扇贝单词逆向","date":"2023-06-12T20:23:11.000Z","category":["爬虫","JS逆向"],"tag":["python","js","go","html"],"description":"扇贝单词逆向 前言： 由于想要获取一些单词信息，记录自己的单词学习记录。 1、分析网站 请求头分析 \\"authority\\": \\"apiv3.shanbay.com\\", \\"accept\\": \\"application/json, text/plain, */*\\", \\"accept-language\\": \\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\\", \\"origin\\": \\"https://web.shanbay.com\\", \\"referer\\": \\"https://web.shanbay.com/\\", \\"sec-ch-ua\\": \\"\\\\\\"Not.A/Brand\\\\\\";v=\\\\\\"8\\\\\\", \\\\\\"Chromium\\\\\\";v=\\\\\\"114\\\\\\", \\\\\\"Google Chrome\\\\\\";v=\\\\\\"114\\\\\\"\\", \\"sec-ch-ua-mobile\\": \\"?0\\", \\"sec-ch-ua-platform\\": \\"\\\\\\"Windows\\\\\\"\\", \\"sec-fetch-dest\\": \\"empty\\", \\"sec-fetch-mode\\": \\"cors\\", \\"sec-fetch-site\\": \\"same-site\\", \\"user-agent\\": \\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\\", \\"x-csrftoken\\": \\"4a08ae479d17443e5e68ef71613ff1be\\"","head":[["meta",{"property":"og:url","content":"https://zhifeng.top/zh/posts/%E7%88%AC%E8%99%AB/JS%E9%80%86%E5%90%91/%E6%89%87%E8%B4%9D%E5%8D%95%E8%AF%8D%E9%80%86%E5%90%91.html"}],["meta",{"property":"og:site_name","content":"苏木的博客"}],["meta",{"property":"og:title","content":"扇贝单词逆向"}],["meta",{"property":"og:description","content":"扇贝单词逆向 前言： 由于想要获取一些单词信息，记录自己的单词学习记录。 1、分析网站 请求头分析 \\"authority\\": \\"apiv3.shanbay.com\\", \\"accept\\": \\"application/json, text/plain, */*\\", \\"accept-language\\": \\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\\", \\"origin\\": \\"https://web.shanbay.com\\", \\"referer\\": \\"https://web.shanbay.com/\\", \\"sec-ch-ua\\": \\"\\\\\\"Not.A/Brand\\\\\\";v=\\\\\\"8\\\\\\", \\\\\\"Chromium\\\\\\";v=\\\\\\"114\\\\\\", \\\\\\"Google Chrome\\\\\\";v=\\\\\\"114\\\\\\"\\", \\"sec-ch-ua-mobile\\": \\"?0\\", \\"sec-ch-ua-platform\\": \\"\\\\\\"Windows\\\\\\"\\", \\"sec-fetch-dest\\": \\"empty\\", \\"sec-fetch-mode\\": \\"cors\\", \\"sec-fetch-site\\": \\"same-site\\", \\"user-agent\\": \\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\\", \\"x-csrftoken\\": \\"4a08ae479d17443e5e68ef71613ff1be\\""}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Sumu"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:tag","content":"go"}],["meta",{"property":"article:tag","content":"html"}],["meta",{"property":"article:published_time","content":"2023-06-12T20:23:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"扇贝单词逆向\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-12T20:23:11.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Sumu\\",\\"url\\":\\"https://github.com/xvzhifeng\\",\\"email\\":\\"xvzhifeng@126.com\\"}]}"]]},"headers":[{"level":2,"title":"扇贝单词逆向","slug":"扇贝单词逆向","link":"#扇贝单词逆向","children":[{"level":3,"title":"1、分析网站","slug":"_1、分析网站","link":"#_1、分析网站","children":[]},{"level":3,"title":"2、解析返回结果data","slug":"_2、解析返回结果data","link":"#_2、解析返回结果data","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":6.41,"words":961},"filePathRelative":"zh/posts/爬虫/JS逆向/扇贝单词逆向.md","localizedDate":"2023年6月13日","excerpt":"<h2> 扇贝单词逆向</h2>\\n<p>前言：</p>\\n<p>由于想要获取一些单词信息，记录自己的单词学习记录。</p>\\n<h3> 1、分析网站</h3>\\n<p><strong>请求头分析</strong></p>\\n<div class=\\"language-cmd line-numbers-mode\\" data-ext=\\"cmd\\"><pre class=\\"language-cmd\\"><code>\\"authority\\": \\"apiv3.shanbay.com\\",\\n    \\"accept\\": \\"application/json, text/plain, */*\\",\\n    \\"accept-language\\": \\"zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7\\",\\n    \\"origin\\": \\"https://web.shanbay.com\\",\\n    \\"referer\\": \\"https://web.shanbay.com/\\",\\n    \\"sec-ch-ua\\": \\"\\\\\\"Not.A/Brand\\\\\\";v=\\\\\\"8\\\\\\", \\\\\\"Chromium\\\\\\";v=\\\\\\"114\\\\\\", \\\\\\"Google Chrome\\\\\\";v=\\\\\\"114\\\\\\"\\",\\n    \\"sec-ch-ua-mobile\\": \\"?0\\",\\n    \\"sec-ch-ua-platform\\": \\"\\\\\\"Windows\\\\\\"\\",\\n    \\"sec-fetch-dest\\": \\"empty\\",\\n    \\"sec-fetch-mode\\": \\"cors\\",\\n    \\"sec-fetch-site\\": \\"same-site\\",\\n    \\"user-agent\\": \\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\\",\\n    \\"x-csrftoken\\": \\"4a08ae479d17443e5e68ef71613ff1be\\"\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
