function animation() {
    circles();

    setTimeout(() => {
        paths()
    }, 2000);
    setTimeout(() => {
        centercircle()
    }, 4000)
}

animation()



function circles() {
    var circle = document.querySelectorAll("circle");
    circle.forEach(element => {
        if (element.id != "path852") {
            var length = element.getTotalLength();
            //set CSS properties up
            element.style.strokeDasharray = length + ' ' + length;
            element.style.strokeDashoffset = length;
            element.getBoundingClientRect();
            //set transition up
            element.style.transition = 'stroke-dashoffset 2s ease-out';
            // animate
            element.style.strokeDashoffset = '0';
        }
    })
}
function centercircle() {
    var circle = document.querySelector("#path852");
    var length = circle.getTotalLength();
    //set CSS properties up
    circle.style.stroke = '#03181a';
    circle.style.opacity = "0"
    circle.getBoundingClientRect();
    //set transition up
    circle.style.transition = 'opacity 1s linear';
    // animate
    circle.style.opacity = '1';
}




function paths() {
    var path = document.querySelectorAll("path");
    path.forEach(element => {
        var length = element.getTotalLength();
        //set CSS properties up
        element.style.strokeDasharray = length + ' ' + length;
        element.style.strokeDashoffset = length;
        element.style.stroke = "#03181a"
        element.getBoundingClientRect();
        //set transition up
        element.style.transition = 'stroke-dashoffset 2s ease-out';
        // animate
        element.style.strokeDashoffset = '0';

    })
}
function gradientes() {
    var gradiente = document.querySelectorAll("radialGradient")
    gradiente.forEach(element => {
    })
}

gradientes()