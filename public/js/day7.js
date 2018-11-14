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
		{ type: '開胃餐點', sub_title: '期間限定篩選佐資料轉換'},
		{ type: '風味沙拉', sub_title: '風味沙拉的內容內容'},
	],
	select: [
		{ type: '全部'},
		{ type: '開胃餐點' },
		{ type: '風味沙拉' },
		{ type: '不是餐點' }
	],
	input: {
		type: '全部',
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
		type_select() {
			if (this.input.type === '全部') {
				return this.menu
			} else {
				return this.menu.filter(item => {
					return item.type === this.input.type
				});
			}
		},
		type_input() {
			if (this.input.sub_title) {
				return this.type_select.filter(item => {
					let content = item.sub_title.toLowerCase();
					let keyword = this.input.sub_title.toLowerCase();
					return content.indexOf(keyword) !== -1
				});
			} else {
				return this.type_select
			}
		}
	},
	methods: {
		
		inputHandler() {
			this.input.sub_title = ''
		}
	}
});