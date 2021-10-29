

const app = Vue.createApp({
    data: () => ({
        newItem: "a",
        // 中身はitem
        todos: [],
    }),
    // methods　はイベントハンドラ
    methods: {
        addItem: function () {
            console.log("ok");

            // 空文字なら処理終了
            if (this.newItem === "") return;

            // dataの todos配列にnewItem内容を追加する
            // newItemをオブジェクトとして持つtodo変数宣言
            let todo = {
                // 内容
                item: this.newItem,
                // チェック
                isDone: false,
            };
            // オブジェクトを追加するためオブジェクト配列
            this.todos.push(todo);
            // 追加後に入力欄をクリア
            this.newItem = "";
        },
        deleteItem: function (index) {
            console.log("削除" + index);
            // 削除する位置,削除する項目量
            this.todos.splice(index, 1)
        }
    }
});

app.mount("#app");