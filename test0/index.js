console.log(Vue.version);

// app は vue インスタンス
const app = Vue.createApp({
    data: () => ({
    }),
    computed: {},
    methods: {}
});


// コンポーネント作成　
app.component("", {});


app.mount("#app");