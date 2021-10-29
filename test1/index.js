console.log(Vue.version);

// app は vue インスタンス
const app = Vue.createApp({
    // テンプレートview作成

    // データバインディング　＝　データと描画を同期させる仕組み
    data: () => ({
        message: "hello",
        count: 0,
        user: {
            name_: "出射",
            age: 27,
            weight: 62,
        },
        colors: ["red", "green", "blue"],

        toggle: true,

        now: '',
    }),
    methods: {
        // ここではアロー関数は使えない
        onClick_idi: function () {
            this.now = new Date().toLocaleString();
        }
    }


});

// 名前付き再利用可能なインスタンス
// コンポーネント作成　コンポーネント名,{内容}
app.component("hello-component", {
    template: "<p>HELLO~</p>",
})


// htmlの指定要素にマウント　vueを適応させる
app.mount("#app");