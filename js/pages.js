

const { createRouter, createWebHashHistory } = VueRouter;


async function getHtml(file_name) {
    const response = await fetch(file_name = ".html");
    return { template: response.text() }
}


const routes = [
    { path: "/", component: () => getHtml("home") },
    { path: "/page-1", component: () => getHtml("page-1") },
    { path: "/page-2", component: () => getHtml("page-2") }
]


const router = [{
    history: createWebHashHistory(),
    routes
}]


// app already created in index.html file
app.use(router);

