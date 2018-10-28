let data = {
	sub_title: 'Vue.js 手牽手，一起客光全家統',
	logo: './img/logo.png',
	red: './img/red-fork.gif',
	yellow: './img/yello-fork.gif',
	index: 0,
	menu: [
		{ type: '開胃餐點', sub_title: '使用者輸入焗列表呈現'},
		{ type: '開胃餐點', sub_title: '古早味事件燉畫面綁定'},
		{ type: '開胃餐點', sub_title: '使用者輸入焗列表呈現2'},
		{ type: '不是餐點', sub_title: '使用者輸入焗列表呈現3'},
	],
	select: [
		{ type: '開胃餐點' },
		{ type: '風味沙拉' },
		{ type: '不是餐點' }
	],
	input: {
		type: '開胃餐點',
		sub_title: ''
	}
}

let vm = new Vue({
	el: '#app',
	data: data,
	computed: {
		today() {
			return this.menu[this.index]
		},
		menu_total(){
			return this.menu.length
		}
	},
	methods: {
		change_index(change) {
			this.index = (this.index + change + this.menu_total) % this.menu_total

			// if (this.index >= this.menu.length) {
			// 	this.index = 0
			// }
		},
		inputHandler() {
			if (this.input.sub_title) {
				this.menu.push({
					type: this.input.type,
					sub_title: this.input.sub_title
				});
			}
			this.input.sub_title = ''
		}
	}
});