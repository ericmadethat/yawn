$(document).ready(function() {
	console.log("ready!");
	var urlWeather = 'http://autocomplete.wunderground.com/aq?cb=callback&query=';
	var myquery;
//callback=getlocation



	$('#searchbutton').on('click', function(event) {
		event.preventDefault();
		var myquery = $('#searchbar').val();
		$.ajax({
			url: 'http://autocomplete.wunderground.com/aq',
			method: 'GET',
			dataType: "jsonp",
			jsonp: "cb",
			data: {
				format: "json",
				query: myquery
			},
			success: function (data) {
				var i;
				for (i in data.RESULTS) {
					console.log(data.RESULTS[i]);
					$('#cityname').append('<p>' + data.RESULTS[i].name + '</p>');	

				};
			}
		});
	});



	// $('#searchbutton').on('click', function(event) {
	// 	event.preventDefault();
	// 	var query = $('#searchbar').val();
	// 	$.ajax({
	// 		url: urlWeather + query,
	// 		method: 'GET',
	// 		dataType: "jsonp",
	// 		success: getLocation
	// 	});
	// 	function getLocation(json){
	// 		console.log(json);
	// 		$.each(json.results, function(i, location) {
	// 			$('#cityname').append('<p>' + location.name + '</p>');	
	// 		});
	// 	};
	// });



	// $('#searchbutton').on('click', function(event) {
	// 	event.preventDefault();
	// 	query = $('#searchbar').val();
	// 	$.getJSON(url + query + '&cb=callbackfunc', function(json) {
	// 			$.each(json.results, function(i, location) {
	// 				$('#cityname').append('<p>' + location.name + '</p>');
	// 			});
	// 	});
	// });
});
