$( document ).ready(function() {
    console.log( "init!" );

    $().alert('close');
    isThxMailSaveReturn();

    buildSaibaMais("influencia");
    buildSaibaMais("presenca");
    buildSaibaMais("sistemas");

    buildMailSave("menu");
    buildMailSave("splash");

    console.log( "ready!" );
});


// PAGE RELOAD ACTIONS

//thx.enum: primary secondary success danger warning info light dark
function isThxMailSaveReturn(){
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has('thx')){
    showSysMessage('Obrigado!', 'em breve entraremos em \
    contato ;)', searchParams.get('thx'), '#sysMsg');
  }
}



// NAVIGATION ACTIONS

function toggleLeitura(baseId){
    $("#leia-"+baseId ).toggle( "slow");
    $("#texto-"+baseId ).toggle( "slow");
    $("#recolha-"+baseId ).toggle( "slow");
    $.get( "http://bibino1.jelastic.saveincloud.net/go/to/CSGHome-"+baseId);
}


function showSysMessage(title, msg, type, divID){

    sysMessage = "";
    if (title.length > 1){
      sysMessage += "<strong>" +title+ "</strong> ";
    }
    if (title.length > 1){
      sysMessage += msg;
    }
    if (sysMessage.length > 1){
      $(divID).find( "p" ).first().empty().append(sysMessage);
    }

    $(divID).removeClass( "alert-primary alert-secondary alert-success \
    alert-danger alert-warning alert-info alert-light \
    alert-dark" ).addClass( "alert-"+type ).addClass( "show");
}

// PAGE COMMON INITIALIZTION

function buildMailSave(baseId){
    $( "#mailSave-" + baseId ).submit( function(event){
      event.preventDefault();
      contactMail = $(this).find('input[type="text"]').val();
      url = "http://bibino1.jelastic.saveincloud.net/go/contact/" + contactMail;
      $(location).attr('href',url);
      console.log( "save " + contactMail);
    });
}

function buildSaibaMais(baseId){
  $( "#leia-"+baseId+" , #recolha-"+baseId ).each( function(){
    $(this).click(function() {
      toggleLeitura(baseId);
    });
  });
}
