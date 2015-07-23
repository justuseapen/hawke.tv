$(document).ready(function() {
	var quotes = $(".descriptor");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(1033)
      .delay(1033)
      .fadeOut(1033, showNextQuote);
  }

  showNextQuote();
})