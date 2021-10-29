// ディレクティブ　指示
const app = Vue.createApp({
    data: () => ({
        ms: "hello"
    })
    // 算出プロパティ
    , computed: {
        // 要素名がコンポーネント名になる
        reversedMessage: function () {
            return this.ms.split('').reverse().join('');
        }
    }
    // ハンドラ
    , methods: {
        reversedMessageMethod: function () {
            return this.ms.split('').reverse().join('');
        }
    }

}).mount("#app");

const app2 = Vue.createApp({
    data: () => ({
        basePrice: 100
    }),
    computed: {
        // プロパティ　はsetter,getterを使用できる
        taxIncludedPrice: {
            get: function () {
                return this.basePrice * 1.1;
            },
            // setterは引数をとれる　引数はgetterの戻り値
            set: function (value) {
                this.basePrice = value / 1.1;
            }
        },
        computedNumber: function () {
            console.log("computed 実行")
            return Math.random();
        }
    },
    methods: {
        methodsNumber: function () {
            console.log("method 実行")
            return Math.random();
        }
    }
}).mount("#app2")