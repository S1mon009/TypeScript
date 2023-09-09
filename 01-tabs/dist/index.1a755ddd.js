const buttons = document.querySelectorAll("button");
const tabs = document.querySelectorAll(".tab-data");
let activeTab = 0;
function changeActiveTab(id) {
    buttons.forEach((button, index)=>{
        if (id === activeTab) return;
        else if (index == id) {
            button.classList.add("active");
            tabs[index].classList.remove("d-none");
        } else {
            button.classList.remove("active");
            tabs[index].classList.add("d-none");
        }
    });
    activeTab = id;
}
buttons.forEach((button, index)=>{
    button.addEventListener("click", changeActiveTab.bind(null, index));
});

//# sourceMappingURL=index.1a755ddd.js.map
