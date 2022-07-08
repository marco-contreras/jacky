var store = localStorage.getItem('storage');
var vistos = [];

if (store === null) {
    localStorage.setItem('storage', JSON.stringify(vistos));
} else {
    vistos = JSON.parse(store);

    vistos.forEach((value) => {
        var e = document.getElementById("in" + value.toString());

        if (e !== null) {
            e.checked = true;
        }
    });
}

var updateViews = (e) => {
    if (vistos.includes(e.toString())) {
        vistos = vistos.filter(function (value, index, arr) {
            return value !== e.toString();
        });
        document.getElementById("in" + e.toString()).checked = false;
        console.log(vistos);
    } else {
        vistos.push(e.toString());
        document.getElementById("in" + e.toString()).checked = true;
        console.log(vistos);
    }
    localStorage.setItem('storage', JSON.stringify(vistos));
}