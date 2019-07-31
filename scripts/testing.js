document.getElementById("card1").addEventListener("click", test)
document.getElementById("card2").addEventListener("click", test)
document.getElementById("card3").addEventListener("click", test)


function test(){
    $("#card1").toggleClass('test');
}