const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-854abee3.js","js":["start-854abee3.js","chunks/vendor-178cccbb.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/authors\/([^/]+?)\/?$/,
				params: (m) => ({ authorId: m[1]}),
				path: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,4],
				b: [1]
			}
		]
	}
});
