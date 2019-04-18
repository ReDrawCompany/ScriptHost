(function(){
    localStorage.savedData = JSON.stringify((typeof localStorage.savedData == "string") ? JSON.parse(localStorage.savedData) : {});
    let boxes = document.querySelectorAll(".saveValue");
    let data = JSON.parse(localStorage.savedData);
    if (typeof data[location.pathname] === "undefined") {
        data[location.pathname] = {value: [], textContent: [], checked: []};
    }
    let dataOrig = data;
    data = data[location.pathname];
    console.log(boxes);

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].value = data.value[i];
        boxes[i].textContent = data.textContent[i];
        boxes[i].checked = data.checked[i];
    }

    setInterval(() => {
        for (let i = 0; i < boxes.length; i++) {
            data.value[i] = boxes[i].value;
            data.textContent[i] = boxes[i].textContent;
            data.checked[i] = boxes[i].checked;
        }
        localStorage.savedData = JSON.stringify((typeof localStorage.savedData == "string") ? dataOrig : {});
    }, 2000);
})();