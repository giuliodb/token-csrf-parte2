$(document).ready(function() {

   // al click
   $(document).on("click",".bottone",function(event) {

    // blocco la submit
    event.preventDefault();
	
    // recupero la action url da chiamare
   	var form = $(this).closest('form');
    var urlToCall = form.attr('action');

	// recupero i valori dei campi da postare
	var name = document.getElementById('param1').value;
	var surname = document.getElementById('param2').value;
	var id = 4;

	// preparo i campi da postare via ajax
	var form_data = new FormData();
	form_data.append('name',name);
	form_data.append('surname',surname);
	form_data.append('id',id);
	
    // effettuo la chiamata post
	$.ajax({
	  url: urlToCall,
	  type: "POST",
	  data: form_data,
	  processData: false,
	  contentType: false,
	  async: true,
          cache: false,  
          success: function(data)
          {
            alert(data)
          },
          error: function(xhr, ajaxOptions, thrownError){			
            alert("si è verificato un problema tecnico")
          }				
	});	
   });
});
