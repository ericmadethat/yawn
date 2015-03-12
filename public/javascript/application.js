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
			success: function(data) {
				$('.locations').remove();
				$.each(data, function(i, results){
					console.log(results);
					$.each(results, function(i, object){
					console.log(object);
					console.log(object.name);
					$(".cityname").append('<div class="locations">' + object.name + '</div>');
					
					$('.locations').on('click', function(event2){
						$.ajax({
							url: 'http://api.wunderground.com/api/3539b8fc30aad6aa/conditions/' + object.l + '.json',
							method: 'GET',
							dataType: 'jsonp',
							success: function(parsed_json) {
								console.log(parsed_json);
								console.log(parsed_json.current_observation['feelslike_c']);
								var temp = parsed_json.current_observation['feelslike_c'];
								$("#temp").text(temp);
							}

						});	
					});
				});
				});
			}
		});
	});



				// var i;
				// for (i in data.RESULTS) {
				// 	console.log(data.RESULTS[i]);
				// 	$('body').append('<div id="locations">' + data.RESULTS[i].name + '</div>');	
				// };

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
