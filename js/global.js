
const { createApp, defineAsyncComponent } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;


// routing
    const getHtml = (file_name) => () => 
        fetch(file_name + ".html")
            .then(res => res.text())
            .then(template => ({ template }));


    const routes = [
        { path: "/", component: getHtml("home") },
        { path: "/page-1", component: getHtml("page-1") },
        { path: "/page-2", component: getHtml("page-2") }
    ];

    // Create Router instance
    const router = createRouter({
        history: createWebHashHistory(),
        routes
    });
// \\\ routing





const app = createApp({
    data() {
        return { 
            custom_msg: "Welcome to Vue",
            isDivVisible: true,
            fruits: ["Apple", "Orange", "Mango", "Grape"],
            computed_msg: "This is dynamic message",
            watcher_msg: "Watcher message",
            watcher_msgs: {
                old_watcher_msg: "",
                new_watcher_msg: "",
            },
            users_res_data: {
                name: {
                    first: '',
                    last: '',
                },
                mail: '',
            },
            task_val: "",
            tasks: [],
            user_name_input: "",
            user_name_error: false,
            password_input: "",
            password_error: false,
        };
    },

    methods: {
        update_msg() {
            this.custom_msg = "Now come to learn"
        },
        async fetch_user(){
            const res = await fetch("https://randomuser.me/api/");
            const users_res = await res.json();
            this.users_res_data = users_res.results[0];
        },
        add_task(){
            if(this.task_val){
                this.tasks.push(this.task_val);
                this.task_val= "";
            }
        },
        remove_task(index){
            this.tasks.splice(index, 1);
        },
    },

    computed: {
        updated_computed_msg() {
            return this.computed_msg.toUpperCase();
        }
    },

    watch: {
        watcher_msg(newVal, oldVal) {
            this.watcher_msgs.old_watcher_msg = oldVal;
            this.watcher_msgs.new_watcher_msg = newVal;
        }
    },

    components:{
        "user-card": {
            props: ["name", "mail", "address"],
            template: `
                <div class="user-card">
                    <h3 class="mB5"> {{ name }} </h3>
                    <p class="mB5"> {{ mail }} </p>
                    <address> {{ address }} </address>
                </div>
            `
        }
    },

    setup() {
        const validate_form = () => {

        }
    }
})
    


// app mounting
    app.use(router);
    app.mount("#vue-app");
// \\\ app mounting


