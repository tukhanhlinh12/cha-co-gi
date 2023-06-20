function numberOneTriangle(number) {
    var triangle = document.getElementById("triangle");
    triangle.innerHTML = "";

    for (var i = 1; i <= number; i++) {
        var row = document.createElement("div");

        for (var j = 1; j <= i; j++) {
            var dot = document.createElement("span");
            row.appendChild(dot);
        }

        triangle.appendChild(row);
    }
}
numberOneTriangle(10); 
