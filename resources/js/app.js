// require("./bootstrap");
//バンドラ用モジュールを使用
import Vue from "vue/dist/vue.esm.js";

// ルーティングの定義をインポートする
import router from "./router";
// ルートコンポーネントをインポートする
import App from "./App.vue";

new Vue({
    el: "#app", // ルーティングの定義を読み込む
    router,
    components: { App }, // ルートコンポーネントの仕様を宣言する
    template: "<App />", // ルートコンポーネントを描画する
});
