console.log(Vue.version);

// app は vue インスタンス
const app = Vue.createApp({
    data: () => ({
        message: "hello vue.js !",
        km: 0,
        m: 0,
    }),
    computed: {},
    methods: {},
    watch: {
        // 監視するオブジェクト名を宣言
        // messageは監視プロパティにフックされる
        message: function (newV, oldV) {
            console.log("new: %s,  old: %s", newV, oldV)
        },
        km: function (value) {
            this.km = value;
            this.m = value * 1000;
        },
        m: function (value) {
            this.m = value;
            this.km = value / 1000;
        },
    }
});


// コンポーネント作成　
app.component("", {});

app.mount("#app");