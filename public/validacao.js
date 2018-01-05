

$(document).ready( function(){

    $('#btn-apply').click(function(){
        if($('#name').val()=== ''){
        	 
            $('#feedback-name').text("Não pode estar vazio."); 
            $('#feedback-name').show(); 
            
        }
         else if($('#email').val()=== ''){
        	 
            $('#feedback-email').text("Não pode estar vazio."); 
            $('#feedback-email').show(); 
            
        } else{
            alert('Seu cadastro está sendo processado...');
        }
        
        $.ajax({
          method: 'POST',
          url: 'http://avanade.gama.academy/api/process_applications',
          dataType: 'json',
          headers: { EMAIL: 'andre.camargo500@gmail.com' },  
          contentType: 'application/json',
          data: JSON.stringify({ process_application: { name: $('#name').val(), email: $('#email').val() } }),
          success: function(json) {
                 console.log(json); 
                 alert('Cadastro realizado com sucesso!!');
            
          },
          error: function(jqXHR, textStatus, errorThrown) {

            alert('apply-error');
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
          }

        });
    });
    
    $('#name').focus(function(){
        $('#feedback-name').hide();
        
    })
    $('#email').focus(function(){
        $('#feedback-email').hide();
        
    })
    
});



	