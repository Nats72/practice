new Vue({
    el: '#app',
    data(){
        return{
            todos:[],
            text: ''
        };
    },
    methods:{
        inputText(e){
            this.text = e.target.value;
        },
        addTodo(){
            if(!this.text) return;  //textプロパティが空の場合、以降の処理をしない

            const text = this.text;  //textプロパティの値を、変数textに代入
            const id = Math.ceil(Math.random() * 1000);  //乱数を発生させ、idとして利用
            const todo = {  //todoオブジェクトを新規作成
                id,
                text,
                isDone:false
            };
            this.todos.push(todo);  //配列todosに追加
            this.resetText();  //追加後、テキストボックスの中身を空にするメソッド
        },
        resetText(){
            this.text = '';
        }
    }
});