var sketches = [];

$.ajax({
	dataType: 'json',
	url: 'sketches.json'
}). done(function(data) {
	sketches = data;
	show();
}).fail(function() {
	console.log('an error occured parsing the sketches.');
});


$(".tab-content").on("swipeleft",function(event){
	console.log('swipeleft');
	next();
});

$('.tab-content').on('swiperight', function(event) {
	console.log('swiperight');
	prev();
});

function getById(id) {
	if (id <= sketches.length) {
		return sketches[id-1];
	} else {
		return sketches[0];
	}
}

var show = function() {
	var sketch;
	if (window.location.hash) {
		sketch = getById(window.location.hash.substr(1));
	} else {
		sketch = this.sketches[0];
	}

	$('#date').text(sketch.date);
	$('#title').text(sketch.title);
	$('#subtitle').text(sketch.subtitle);
	$('#imglink').attr('href', sketch.src);
	$('#img').attr('src', sketch.src);
	$('#description').html(sketch.description);
	$('#tags').empty();
	$('#tags').append('Tags: ');
	for (idx = 0; idx < sketch.tags.length; idx++) {
		var tag = sketch.tags[idx];
		$('#tags').append('<li>' + tag + '</li>');
	}

	if (!window.location.hash) {
		window.location = '#' + sketch.id;	
	}
	
};


var next = function() {
	var idx;
	
	idx = window.location.hash.substr(1);
	if (idx < sketches.length) {
		window.location = '#' + (++idx);

	} else {
		window.location = '#' + 1;
	}
	
	show();
};

var prev = function() {
	var idx;
	
	idx = window.location.hash.substr(1);
	if (idx > 1) {
		window.location = '#' + (--idx);

	} else {
		window.location = '#' + this.sketches.length;
	}
	
	show();
};