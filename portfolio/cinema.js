var videos = [];

$.ajax({
	dataType: 'json',
	url: 'videos.json'
})
.done(function(data) {
	videos = data;
	show();
	
})
.fail(function() {
	console.log('an error occured parsing the videos.');
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
	if (id <= videos.length) {
		return videos[id-1];
	} else {
		return videos[0];
	}
}

function show() {

	var video;
	if (window.location.hash) {
		video = getById(window.location.hash.substr(1));
	} else {
		video = this.videos[0];
	}

	$('#date').text(video.date);
	$('#title').text(video.title);
	$('#video').attr('src', video.url);
	
	$('#description').html(video.description);

	$('#tags').empty();
	$('#tags').append('Tags: ');
	for (idx = 0; idx < video.tags.length; idx++) {
		var tag = video.tags[idx];
		$('#tags').append('<li>' + tag + '</li>');
	}

	if (!window.location.hash) {
		window.location = '#' + video.id;	
	}
}

var next = function() {
	var idx;
	
	idx = window.location.hash.substr(1);
	if (idx < videos.length) {
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
		window.location = '#' + this.videos.length;
	}
	
	show();
};