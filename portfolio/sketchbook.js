// add custom sketches
var sketches = [
{id: 1, date: 'Januar 2016', title: "CV Brigitte", subtitle: 'Mein Lebenslauf als Sketch und VideoScribe', tags: ['53-Pencil', 'Inkpad', 'iPad Pro'], src: '/img/sketchbook/CV.svg', description: '<p>Die Visualisierung meines Lebenslaufs ist mein erstes grosses Projekt einer Visualisierung. Ausgangslage dafür war die Idee, ein VideoScribe zu erstellen. Dafür braucht es zuerst eine Geschichte zu erzählen. Was ist da geeignetet als mein Lebenslauf?</p><p>Ich hatte zu Beginn bereits im Kopf, wie das Schlussbild des «CV» aussehen sollte und musste mir also überlegen, welche Stationen meines Lebens ich wie Visualisieren will und wieviel Platz sie einnehmen dürfen. Die Groben Skizzen dafür habe ich auf Papier erstellt.</p><p>Nachdem ich alles skizziert hatte, hab ich angefangen, alles auf meinem iPad Pro mit dem <a href="https://www.fiftythree.com/pencil" target="_blank">53-Pencil</a> zu zeichnen. </p><p>Dieses Bild zeigt ein Zwischenprodukt meiner Arbeit. Aus der fertigen Zeichnung hab ich anschliessend mit Hilfe von <a href="http://www.videoscribe.co/anywhere" target="_blank">VideoScribe Anywhere</a> ein VideoScribe erstellt. Das Video kann <a href="https://www.youtube.com/watch?v=BPxvdJoHwoE">hier</a> geschaut werden.</p>'},
{id: 2, date: 'Juli 2016', title: "Pitch Poster", subtitle: 'Elevator Pitch Poster von Break the Box', tags: ['53-Pencil', 'Inkpad', 'iPad Pro'], src: '/img/sketchbook/pitch.svg', description: '<p>Die Visualisierung meines Lebenslaufs ist mein erstes grosses Projekt einer Visualisierung. Ausgangslage dafür war die Idee, ein VideoScribe zu erstellen. Dafür braucht es zuerst eine Geschichte zu erzählen. Was ist da geeignetet als mein Lebenslauf?</p><p>Ich hatte zu Beginn bereits im Kopf, wie das Schlussbild des «CV» aussehen sollte und musste mir also überlegen, welche Stationen meines Lebens ich wie Visualisieren will und wieviel Platz sie einnehmen dürfen. Die Groben Skizzen dafür habe ich auf Papier erstellt.</p><p>Nachdem ich alles skizziert hatte, hab ich angefangen, alles auf meinem iPad Pro mit dem <a href="https://www.fiftythree.com/pencil" target="_blank">53-Pencil</a> zu zeichnen. </p><p>Dieses Bild zeigt ein Zwischenprodukt meiner Arbeit. Aus der fertigen Zeichnung hab ich anschliessend mit Hilfe von <a href="http://www.videoscribe.co/anywhere" target="_blank">VideoScribe Anywhere</a> ein VideoScribe erstellt. Das Video kann <a href="https://www.youtube.com/watch?v=BPxvdJoHwoE">hier</a> geschaut werden.</p>'},
{id: 3, date: 'Januar 2016', title: "CV Brigitte", subtitle: 'Mein Lebenslauf als Sketch und VideoScribe', tags: ['53-Pencil', 'Inkpad', 'iPad Pro'], src: '/img/sketchbook/CV.svg', description: '<p>Die Visualisierung meines Lebenslaufs ist mein erstes grosses Projekt einer Visualisierung. Ausgangslage dafür war die Idee, ein VideoScribe zu erstellen. Dafür braucht es zuerst eine Geschichte zu erzählen. Was ist da geeignetet als mein Lebenslauf?</p><p>Ich hatte zu Beginn bereits im Kopf, wie das Schlussbild des «CV» aussehen sollte und musste mir also überlegen, welche Stationen meines Lebens ich wie Visualisieren will und wieviel Platz sie einnehmen dürfen. Die Groben Skizzen dafür habe ich auf Papier erstellt.</p><p>Nachdem ich alles skizziert hatte, hab ich angefangen, alles auf meinem iPad Pro mit dem <a href="https://www.fiftythree.com/pencil" target="_blank">53-Pencil</a> zu zeichnen. </p><p>Dieses Bild zeigt ein Zwischenprodukt meiner Arbeit. Aus der fertigen Zeichnung hab ich anschliessend mit Hilfe von <a href="http://www.videoscribe.co/anywhere" target="_blank">VideoScribe Anywhere</a> ein VideoScribe erstellt. Das Video kann <a href="https://www.youtube.com/watch?v=BPxvdJoHwoE">hier</a> geschaut werden.</p>'},
];

var i = 1;

var show = function(i) {
	$('#date').text(sketches[i-1].date);
	$('#title').text(sketches[i-1].title);
	$('#subtitle').text(sketches[i-1].subtitle);
	$('#imglink').attr('href', sketches[i-1].src);
	$('#img').attr('src', sketches[i-1].src);
	$('#description').html(sketches[i-1].description);
	$('#tags').empty();
	$('#tags').append('Tags: ');
	for (idx = 0; idx < sketches[i-1].tags.length; idx++) {
		var tag = sketches[i-1].tags[idx];
		$('#tags').append('<li>' + tag + '</li>');
	}
};

$("#sketchbook").on("swipeleft",function(event){
	console.log('swipeleft');
	next();
});

$('#sketchbook').on('swiperight', function(event) {
	console.log('swiperight');
	prev();
});

var next = function() {
	if (i < sketches.length-1) {
		i++;
	} else {
		i = 1;
	}
	show(i);
};

var prev = function() {
	if (i > 1) {
		i--;
	} else {
		i = sketches.length;
	}
	show(i);
}


show(i);