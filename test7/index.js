console.log(Vue.version);

// app は vue インスタンス
const app = Vue.createApp({
    // 監視プロパティより算出プロパティの方がスッキリしている
    data: () => ({
        firstName: '',
        lastName: '',
        // fullName: ''
    }),
    computed: {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    },
    methods: {},
    // watch: {
    //     firstName: function (val) {
    //         this.fullName = val + " " + this.lastName;
    //     },
    //     lastName: function (val) {
    //         this.fullName = this.firstName + " " + val;
    //     }
    // }
});


// コンポーネント作成　
app.component("", {});


app.mount("#app");