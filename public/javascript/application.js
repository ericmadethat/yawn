$(document).ready(function() {
	console.log("ready!");
	var cities;


	var findCities = function(response){
		cities = response.RESULTS;
		for (i=0; i < cities.length; i++){
			$(".cityname").append('<div class="locations">' + cities[i].name + '</div>');
		}
	}

	var showWeather = function(data) {
		console.log(data);
		var results = data.current_observation;
		$("#weather").html(results.weather).append('<img src="' + results.icon_url + '">');
		$("#temp").html(results.temp_c + '°C');

	}

	$('#searchbutton').on('click', function(event) {
		event.preventDefault();
		$(".locations").remove();
		var myquery = $('#searchbar').val();
		$.ajax({
			method: 'GET',
			url: 'http://autocomplete.wunderground.com/aq?query=' + myquery,
			dataType: "jsonp",
			jsonp: "cb",
			success: findCities
		});
	});

	$('.cityname').on('click', '.locations', function(event){
		console.log('clicked location');
		var name = $(this).text();
		console.log(this);
		$.ajax({
			url: 'http://api.wunderground.com/api/3539b8fc30aad6aa/conditions/q/' + name + '.json',
			type: 'GET',
			dataType: 'json',
			jsonp: 'cb',
			success: showWeather
		})
	});
});