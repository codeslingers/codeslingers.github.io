$( document ).ready(function() {
    console.log( "ready!" );

    buildSaibaMais("influencia");
    buildSaibaMais("presenca");
    buildSaibaMais("sistemas");

    $( "form" ).submit(function( event ) {
      event.preventDefault();
      contactMail = $(this).find('input[type="text"]').val();
	  $( "#contactMail").attr("value",contactMail);
 	  $( "#mailSave").submit();
      console.log( "submit " + $( "#contactMail").val());

//      request = $.ajax({
//        method: "GET",
//        url: "http://bibino1.jelastic.saveincloud.net/go/contact/"+contactMail,
//        crossDomain : "true",
//        dataType: "jsonp text"
//      });

//      request.done(function() {
//        console.log( "success" );
//      });

//      request.fail(function() {
//        console.log( "error");
//      });

//      request.always(function() {
//        console.log( "finished" );
//      });
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
