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
		var button = $('<button class="btn" data-tmp="' + index + '">Click me</button>').css('margin-left', '10px');
		$(element).append(button);
		if(index % 2 != 0) {
			$(button).css('margin-left', '43px');
		}
	});
});

// Dodajemy event handler do buttonów

$(function() {
	$('button').click(function() {
		alert($(this).attr("data-tmp"));
	});
});