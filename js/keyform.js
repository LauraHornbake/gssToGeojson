/**
 * @author Laura J. Hornbake
 * @license MIT
 * 
 */

// Form submission handler
$("#keyForm").submit(function(event) {

	// Prevent default form submit
	event.preventDefault();

	// Get key value from input element on the page:
	var $form = $(this), term = $form.find("input[name='key']").val();

	//  Use value to call API;
	$('body').append('<script src="http://spreadsheets.google.com/feeds/list/' + encodeURIComponent(term) + '/1/public/values?alt=json-in-script&amp;callback=importGSS"></s' + 'cript>')
});

