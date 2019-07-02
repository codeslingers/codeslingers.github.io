$( document ).ready(function() {
    console.log( "ready!" );

    $( "#leia-presenca , #recolha-presenca" ).each( function(){
      $(this).click(function() {
        toggleLeitura("presenca");
      });
    });



});

function toggleLeitura(baseId){
    $("#leia-"+baseId ).toggle( "slow");
    $("#texto-"+baseId ).toggle( "slow");
    $("#recolha-"+baseId ).toggle( "slow");
}
