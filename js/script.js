// Wybieramy wszystkie 'spany' i te parzyste kolorujemy na czerwono

$(function() {
	var span = $('span');
	span.each(function(index, element){
		if(index % 2 == 0) {
			$(element).css('color', 'red'); // Lub $('span:odd').css('color', 'red');
		};
	});
});

// Dodajemy do każdego z paragrafów przycisk z atrybutem 'data-tmp' równym indeksowi przycisku

$(function() {
	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(element).append(button);
		console.log(button);
	});
});

// Dodajemy event handler do buttonów

$(function() {
	$('button').click(function() {
		alert($(this).attr("data-tmp"));
	});
});