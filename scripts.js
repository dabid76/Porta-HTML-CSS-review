$(document).ready( readyNow );

function readyNow (){
    console.log( 'hello from jquery');
    $( '#pizzaPrices' ).remove();

    $('ul').children().addClass( 'bold' );

    $( '#pizzeriaName' ).text()

    let val = $( '#pizzeriaName' ).text();
    console.log( 'this is val:', val);

    $( '#pizzeriaName' ).text( `Davi's Place` );

    $( '#orderBtn' ).on('click', function(){
        handleClick();
    })
    $( 'header' ).on('click', '#secretBtn', function(){
        secretFunction();
    })
}

function handleClick(){
    console.log('button click');
    $('#orderBtn').toggleClass('updateOrderBtn');
    $('header').append(`<button id="secretBtn">secret button</button>`)
}

function secretFunction(){
    // alert('shhhhhhhh hhh sh');
    $( '#secretBtn').remove();
    console.log( 'remove button');
    
}

