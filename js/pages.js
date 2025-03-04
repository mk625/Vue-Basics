

const getHtml = (file_name) => defineAsyncComponent(() => 
    fetch(file_name + ".html").then(res => res.text()).then(template => ({ template }))
);


const routes = [
    { path: "/", component: getHtml("home") },
    { path: "/page-1", component: getHtml("page-1") },
    { path: "/page-2", component: getHtml("page-2") }
];



