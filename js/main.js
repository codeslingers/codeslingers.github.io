$( document ).ready(function() {
    console.log( "ready!" );

    buildSaibaMais("influencia");
    buildSaibaMais("presenca");
    buildSaibaMais("sistemas");

    $( "form" ).submit(function( event ) {
      event.preventDefault();
      contactMail = $(this).find('input[type="text"]').val();
      console.log( "submit " + contactMail);

	  $("#mailSave-menu").load("http://bibino1.jelastic.saveincloud.net/go/contact/"+contactMail, function(responseTxt, statusTxt, xhr){
		if(statusTxt == "success")
		  console.log( "success" );
		if(statusTxt == "error")
		  console.log("Error: " + xhr.status + ": " + xhr.statusText);
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
