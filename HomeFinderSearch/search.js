$(document).ready(function(){
	
	var baseUrl = "http://services.homefinder.com";
	var listingSearch = "/listingServices/search";
	var apiKey = "&apikey=n6vyvm6ktkdh44w43zrqwpb7";
	var apiUrl = baseUrl + listingSearch;
	
	$('#searchButon').click(function(){
		var location = $('input[name=area]').val();
		apiUrl+=location;
		if($('input[name=areCatsAllowed]').val()='true'){
			apiUrl+="&areCatsAllowed=true";
		}
		if($'input[name=areDogsAllowed]').val()="true"){
			apiUrl+="areDogsAllowed=true";
		}
		
		apiUrl= apiUrl + apiKey;
		
		$.getJSON(apiUrl, function(jd) {
	        $('#test').html('<p> Name: ' + jd.name + '</p>');
	    });	
	});
	

})