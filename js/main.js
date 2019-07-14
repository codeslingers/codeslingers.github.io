$( document ).ready(function() {
    console.log( "ready!" );

    buildSaibaMais("influencia");
    buildSaibaMais("presenca");
    buildSaibaMais("sistemas");

    $( "form" ).submit(function( event ) {
      event.preventDefault();
      contactMail = $(this).find('input[type="text"]').val();
      console.log( "submit " + contactMail);
      $.get( "https://bibino1.jelastic.saveincloud.net/go/contact/"+contactMail, function() {
        console.log( "saved" );
      })
      .done(function() {
        console.log( "second success" );
      })
      .fail(function() {
        console.log( "error" );
      })
      .always(function() {
        console.log( "finished" );
      });
    });

});


function buildSaibaMais(baseId){
  $( "#leia-"+baseId+" , #recolha-"+baseId ).each( function(){
    $(this).click(function() {
      toggleLeitura(baseId);
    });
  });
}

function toggleLeitura(baseId){
    $("#leia-"+baseId ).toggle( "slow");
    $("#texto-"+baseId ).toggle( "slow");
    $("#recolha-"+baseId ).toggle( "slow");
    $.get( "http://bibino1.jelastic.saveincloud.net/go/to/CSGHome-"+baseId);
}
