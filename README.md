
# 如何运行应用


1. 解压后直接找到根目录下的index.html文件，使用浏览器开打它
2. 运行过程中需要访问Google服务器，中国大陆的用户需要科学上网才能正常显示页面
3. 页面左上角有三明治菜单，默认为折叠状态，页面默认显示菜单第一项的订阅内容，点击不同菜单项可加载相应的订阅
4. 如需添加其它订阅可以修改js目录中app.js的相关配置
```js
var allFeeds = [
{
	name: 'Udacity Blog',
	url: 'http://blog.udacity.com/feed'
	}, {
		name: 'CSS Tricks',
		url: 'http://feeds.feedburner.com/CssTricks'
	}, {
		name: 'HTML5 Rocks',
		url: 'http://feeds.feedburner.com/html5rocks'
	}, {
		name: 'Linear Digressions',
		url: 'http://feeds.feedburner.com/udacity-linear-digressions'
	},
	/*{
		name: '此处填写你自己添加订阅的名称',
		url: '此处填写你自己添加订阅的链接地址'
	}*/
];
```
5. 如果不想看到测试信息，请将index.html中的以下内容注释
```js
<!-- <script src="jasmine/spec/feedreader.js"></script> -->
```
6. 祝你使用快乐！