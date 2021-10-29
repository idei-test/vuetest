console.log(Vue.version);

// app は vue インスタンス
const app = Vue.createApp({
    data: () => ({
        isLarge: false,
        hasError: false,

        largeClass: 'large',
        dengerClass: 'text-denger'
    }),
});


// コンポーネント作成　
app.component("", {});


app.mount("#app");