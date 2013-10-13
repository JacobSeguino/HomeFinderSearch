$(document).ready(function(){
	
	var baseUrl = "http://services.homefinder.com";
	var listingSearch = "/listingServices/search";
	var apiKey = "apikey=n6vyvm6ktkdh44w43zrqwpb7";
	
	$('#searchButon').click(function(){
		var location = $('input[name=area]').val();
		var apiUrl= baseUrl + listingSearch + location;
		$('#test').append('<div class="test">'+apiUrl+'</div>');
	});
})



	

// var json = JSON.parse(response);
// console.log(json);