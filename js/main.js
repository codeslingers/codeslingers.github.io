$( document ).ready(function() {
    console.log( "ready!" );

    buildSaibaMais("influencia");
    buildSaibaMais("presenca");
    buildSaibaMais("sistemas");

    $( "form" ).submit(function( event ) {
      event.preventDefault();
      contactMail = $(this).find('input[type="text"]').val();
      console.log( "submit " + contactMail);

      request = $.ajax({
        method: "GET",
        url: "http://bibino1.jelastic.saveincloud.net/go/contact/"+contactMail",
        crossDomain : "true"
      });

      request.done(function(msg) {
        console.log( "second success" +msg );
      });

      request.fail(function(msg) {
        console.log( "error" +msg);
      });

      request.always(function(msg) {
        console.log( "finished" +msg);
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
