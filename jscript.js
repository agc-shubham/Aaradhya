var button = document.getElementById("Click");
var image = document.getElementsByTagName('img');


// window.onload = function () {
//     document.getElementById("my_audio").play();
// }

button.addEventListener("click", fun);
let i = 0
function fun() {
    // console.log("clicked");
    // console.log(image[0].src);
    // image[0].src = "52";
    if (i < 10) {
        i = i + 1;
    } else {
        i = i % 10;
    }
    image[0].src = `imgs/aaradhya${i}.jpg`
    console.log(image[0].src);

}