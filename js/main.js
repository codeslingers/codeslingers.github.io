$( document ).ready(function() {
    console.log( "init!" );

    buildSaibaMais("influencia");
    buildSaibaMais("presenca");
    buildSaibaMais("sistemas");

    buildMailSave("menu");
    buildMailSave("splash");

    console.log( "ready!" );
});


function buildSaibaMais(baseId){
  $( "#leia-"+baseId+" , #recolha-"+baseId ).each( function(){
    $(this).click(function() {
      toggleLeitura(baseId);
    });
  });
}

function buildMailSave(baseId){
    $( "#mailSave-" + baseId ).submit( function(event){
      event.preventDefault();
      contactMail = $(this).find('input[type="text"]').val();
      url = "http://bibino1.jelastic.saveincloud.net/go/contact/" + contactMail;
      $(location).attr('href',url);
      console.log( "save " + contactMail);
    });
}

function toggleLeitura(baseId){
    $("#leia-"+baseId ).toggle( "slow");
    $("#texto-"+baseId ).toggle( "slow");
    $("#recolha-"+baseId ).toggle( "slow");
    $.get( "http://bibino1.jelastic.saveincloud.net/go/to/CSGHome-"+baseId);
}
