console.log(Vue.version);

// app は vue インスタンス
const app = Vue.createApp({
    data: () => ({
        colors: [
            { name: 'red' },
            { name: 'green' },
            { name: 'blue' },
        ]
    }),
    computed: {},
    methods: {
        onClick: function () {
            this.colors[1].name = "white";
        }
    },
    watch: {
        // colors内の配列の変更を検知できない
        colors: {
            handler: function () {
                console.log("update!");
            },
            // deepオプション 監視対象内のネストした要素にも監視の目を張る
            deep: true
        }
    }
});


// コンポーネント作成　
app.component("", {});


app.mount("#app");