const t=JSON.parse(`{"key":"v-0afc2f21","path":"/zh/posts/tools/git/git%E4%BB%A3%E7%A0%81%E7%BB%9F%E8%AE%A1.html","title":"git代码统计","lang":"zh-CN","frontmatter":{"title":"git代码统计","date":"2023-06-11T18:32:07.000Z","category":["tools","git"],"tag":["python","git","github"],"description":"命令行 查看git上的个人代码量： git log --author=\\"username\\" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf \\"added lines: %s, removed lines: %s, total lines: %s\\\\n\\", add, subs, loc }' -","head":[["meta",{"property":"og:url","content":"https://yukimx.top/zh/posts/tools/git/git%E4%BB%A3%E7%A0%81%E7%BB%9F%E8%AE%A1.html"}],["meta",{"property":"og:site_name","content":"Yuki的博客"}],["meta",{"property":"og:title","content":"git代码统计"}],["meta",{"property":"og:description","content":"命令行 查看git上的个人代码量： git log --author=\\"username\\" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf \\"added lines: %s, removed lines: %s, total lines: %s\\\\n\\", add, subs, loc }' -"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-11T17:39:34.000Z"}],["meta",{"property":"article:author","content":"Yuki"}],["meta",{"property":"article:tag","content":"python"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:tag","content":"github"}],["meta",{"property":"article:published_time","content":"2023-06-11T18:32:07.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-11T17:39:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"git代码统计\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-11T18:32:07.000Z\\",\\"dateModified\\":\\"2023-06-11T17:39:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Yuki\\",\\"url\\":\\"https://github.com/xvzhifeng\\",\\"email\\":\\"\\"}]}"]]},"headers":[{"level":2,"title":"命令行","slug":"命令行","link":"#命令行","children":[{"level":3,"title":"查看git上的个人代码量：","slug":"查看git上的个人代码量","link":"#查看git上的个人代码量","children":[]},{"level":3,"title":"统计每个人增删行数","slug":"统计每个人增删行数","link":"#统计每个人增删行数","children":[]},{"level":3,"title":"查看仓库提交者排名前 5","slug":"查看仓库提交者排名前-5","link":"#查看仓库提交者排名前-5","children":[]},{"level":3,"title":"贡献值统计","slug":"贡献值统计","link":"#贡献值统计","children":[]},{"level":3,"title":"提交数统计","slug":"提交数统计","link":"#提交数统计","children":[]},{"level":3,"title":"添加或修改的代码行数：","slug":"添加或修改的代码行数","link":"#添加或修改的代码行数","children":[]}]},{"level":2,"title":"使用gitstats","slug":"使用gitstats","link":"#使用gitstats","children":[{"level":3,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}]},{"level":2,"title":"使用cloc","slug":"使用cloc","link":"#使用cloc","children":[]}],"git":{"createdTime":1686480044000,"updatedTime":1686505174000,"contributors":[{"name":"xzf","email":"","commits":3}]},"readingTime":{"minutes":2.61,"words":392},"filePathRelative":"zh/posts/tools/git/git代码统计.md","localizedDate":"2023年6月12日","excerpt":"<h2> 命令行</h2>\\n<h3> 查看git上的个人代码量：</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> log <span class=\\"token parameter variable\\">--author</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"username\\"</span> <span class=\\"token parameter variable\\">--pretty</span><span class=\\"token operator\\">=</span>tformat: <span class=\\"token parameter variable\\">--numstat</span> <span class=\\"token operator\\">|</span> <span class=\\"token function\\">awk</span> <span class=\\"token string\\">'{ add += $1; subs += $2; loc += $1 - $2 } END { printf \\"added lines: %s, removed lines: %s, total lines: %s\\\\n\\", add, subs, loc }'</span> -\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
