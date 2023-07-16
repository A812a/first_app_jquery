

let x = $('#linksBox').innerWidth()
let textInner = $('.control p')
console.log(textInner);
$('#control').click(function(){
    
    if($('.containerBox').css('left') == '0px'){
        $('.containerBox').animate({left:-x},1000)
        $('#control p').html('open')
    } else {
        $('.containerBox').animate({left:'0px'},1000)
        $('#control p').html('close')
    }
})

$('#icon').click(function(){
    $('.containerBox').animate({left:-x},1000)
})
$(document).ready(function(){
    $('.singer p:first').css('display','block')
    $('.singer h2').click(function(){
    
        $(this).next().slideToggle(500)  
        $('.singer p').not( $(this).next() ).slideUp(500);
        
    })
})

let textArea = document.querySelector('.message')
let counter = document.querySelector('.span')
let maxlength = counter.getAttribute('max-length')

textArea.oninput = function(){

    counter.innerHTML = maxlength - this.value.length
    if(counter.innerHTML == 0 ){
        counter.classList.add('color')
    }else{
        counter.classList.remove('color')
    }
   
}


setInterval(function invoce() {

    var now = new Date()

    var days = now.getDay();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    
document.getElementById("days").innerHTML = days + "  D";
document.getElementById("hours").innerHTML = hours + "  H";
document.getElementById("minutes").innerHTML = minutes + "  M";
document.getElementById("seconds").innerHTML = seconds + "  S";

},1000)
   

