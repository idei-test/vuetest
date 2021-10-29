// ディレクティブ　指示
const app = Vue.createApp({
    data: () => ({
        message: "abcdef",
        message2: "<p style='color:red'>スクリプト</p>"
    })
    , methods: {
        clickHandler: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }

}).mount("#app");