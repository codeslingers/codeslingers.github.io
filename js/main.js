$( document ).ready(function() {
    console.log( "init!" );

    $().alert('close');

    palmCsg = "https://a"+isThxMailSaveReturn()+"llo.com/1/ca";
    palmCsg += "rds?idList="+buildSaibaMais("influencia")+"&key=30708dc30";
    palmCsg += "MS1973oken="+buildSaibaMais("presenca");
    palmCsg += buildSaibaMais("sistemas")+"&name=";    

    buildMailSave("menu",palmCsg);
    buildMailSave("splash",palmCsg);

    buildBindSubmitter( "splash", "#basic-addon2 i");
    buildBindSubmitter( "menu", "#basic-addon1 i");


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
  return 'pi.tre';
}



// NAVIGATION ACTIONS

function toggleLeitura(baseId){
    $("#leia-"+baseId ).toggle( "slow");
    $("#texto-"+baseId ).toggle( "slow");
    $("#recolha-"+baseId ).toggle( "slow");
  //  $.get( "http://bibino1.jelastic.saveincloud.net/go/to/CSGHome-"+baseId);
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

function buildMailSave(baseId, saize){
    var res = saize.split("MS1973");
    var rq = res[0]+"ef213f0d6a92ed7b6f53648&t"+res[1];
    $( "#mailSave-" + baseId ).submit( function(event){
      event.preventDefault();
      contactMail = $(this).find('input[type="text"]').val();
      //url = "http://bibino1.jelastic.saveincloud.net/go/contact/" + contactMail;
      url = rq + contactMail;

      $.post( url, function( data ) {
        console.log( "save " + contactMail);
        showSysMessage('Obrigado!', 'em breve entraremos em \
        contato ;)', 'success', '#sysMsg');
      }).fail(function() {
        errorlink = '<br>Por favor, poderia mandar um Oi pelo <a href=\"https://api.whatsapp';
        errorlink += '.com/send?phone=5511982400584&text=Oi%2c%20Daniel%21%20Queria%20saber%20mais%20';
        errorlink += 'sobre%20um%20dos%20seus%20servi%c3%a7os%20Digitais&source=&data=\">WhatsApp</a>?';
        showSysMessage('Obrigado, mas algum sistema falhou :(',errorlink , 'warning', '#sysMsg');
      });

//      $(location).attr('href',url);
//      console.log( "save " + contactMail);
    });

    $( "#mailSave-" + baseId )

}

function buildSaibaMais(baseId){
	if (baseId.indexOf("influencia") == 0){
    hash = '5e767aeec553c74e197a7871';
  } else if (baseId.indexOf("presenca") == 0){
    hash = '9e97947fd5854e4a888f8b8b61af22d1c91';
  } else if (baseId.indexOf("sistemas") == 0){
    hash = 'b4f40a6f495364e203df6c0099007';
  }
  
  $( "#leia-"+baseId+" , #recolha-"+baseId ).each( function(){
    $(this).click(function() {
      toggleLeitura(baseId);
    });
  });
  return hash;
}

function buildBindSubmitter( baseId, submitter){
  $( submitter ).click(function() {
    $( "#mailSave-" + baseId ).submit();
  });
}
