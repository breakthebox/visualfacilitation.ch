var videos = [
	{id: 1, date: 'Januar 2016', title: 'CV Brigitte Hulliger', url: 'https://www.youtube.com/embed/BPxvdJoHwoE?rel=0', tags: ['VideoScribe'], description: 'lorem ipsum dolor sit amet...'},
];

var i = 1;

var show = function(i) {
	$('#date').text(videos[i-1].date);
	$('#title').text(videos[i-1].title);
	$('#video').attr('src', videos[i-1].url);
	
	$('#description').html(videos[i-1].description);

	$('#tags').empty();
	$('#tags').append('Tags: ');
	for (idx = 0; idx < videos[i-1].tags.length; idx++) {
		var tag = videos[i-1].tags[idx];
		$('#tags').append('<li>' + tag + '</li>');
	}
}

show(1);