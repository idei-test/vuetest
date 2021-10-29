console.log(Vue.version);

// webAPIを利用して監視プロパティを使う
// qiita api v2
const app = Vue.createApp({

    data: () => ({
        // api結果
        items: null,
        // ユーザ入力
        keyword: '',
        // 表示内容
        message: ''
    }),

    watch: {
        // キーワードを監視
        keyword: function (newKeyword, oldKeyword) {
            console.log(newKeyword);
            this.message = 'タイピング終了後に検索を行います';

            this.debouncedGetAnswer();
        }
    },

    mounted: function () {
        // 時間内は処理をしない
        // lodash.jsから提供されている過度な通信を防ぐ関数
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 3000);
    },

    methods: {
        getAnswer: function () {
            // 入力がないなら処理終了
            if (this.keyword === '') {
                this.items = null;
                return;
            }

            // 入力後に、ユーザに読み込みが始まったことを伝える
            this.message = "検索中";

            // dataをvmから取り出せるようにする
            // thisだとthen()の内部からオブジェクトを参照できない
            const vm = this;

            // 1ページ　２０項目　入力したキーワード
            const params = { page: 1, per_page: 20, query: this.keyword }
            // axiosでapiへhttp通信　パラメータを送る
            axios.get('https://qiita.com/api/v2/items', { params })
                // レスポンス
                .then(function (response) {
                    console.log("成功");
                    console.log(response);
                    vm.items = response.data;
                })
                .catch(function (e) {
                    vm.message = "失敗" + e;
                })
                .finally(function () {
                    vm.message = "";
                });
        }
    },
});


// コンポーネント作成　
app.component("", {});


app.mount("#app");