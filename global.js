$.ajaxSetup({
  beforeSend: function(jqXHR, settings) {
    // Check if the request is a POST request
    if (settings.type === 'POST') {
        // prelevo il csrf
        const csrf=document.querySelector('meta[name="_csrf"]').getAttribute('content');

        // if settings.data is a string, add the new parameter csrf to the data
		if (typeof settings.data === 'string') {
			settings.data += '&csrf='+csrf;
		} 
		// If settings.data is an object, extend it with the new parameter csrf
		else {
			settings.data.append('csrf', csrf);
		}
    }
  }
});