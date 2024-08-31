
$(document).ready(function(){
// zero
    $('#zero').on('click', function(){
        let message='0';
        let html=message
        $('#output .remove').append(html)

    });
// one
    $('#one').on('click', function(){
        let message='1';
        let html=message
        $('#output .remove').append(html)

    });
 // two   
    $('#two').on('click', function(){
        let message='2';
        let html=message
        $('#output .remove').append(html)

    });
// three
    $('#three').on('click', function(){
        let message='3';
        let html=message
        $('#output .remove').append(html)
    });
// four
    $('#four').on('click', function(){
        let message='4';
        let html=message
        $('#output .remove').append(html)

    });
// five
    $('#five').on('click', function(){
        let message='5';
        let html=message
        $('#output .remove').append(html)

    });
// six
    $('#six').on('click', function(){
        let message='6';
        let html=message
        $('#output .remove').append(html)

    });
// seven
    $('#seven').on('click', function(){
        let message='7';
        let html=message
        $('#output .remove').append(html)

    });
// eight
    $('#eight').on('click', function(){
        let message='8';
        let html=message
        $('#output .remove').append(html)

    });
// nine
    $('#nine').on('click', function(){
        let message='9';
        let html=message
        $('#output .remove').append(html)

    });
// dot
    $('#dot').on('click', function(){
        let message='.';
        let html=message
        $('#output .remove').append(html)

    });

// addition
    $('#add').on('click', function(x,y){
        let message='+';
        let html=message;
        $('#output .remove').append(html)
        let fanswer=$('#output .remove').val()
        console.log(fanswer)
        alert(fanswer)
    
        

    });

    


  



});