$('.alert-button').click(function () {
    var userInput = $('#input1').val();
    $('#input1').val('');
    $('.user-text').text(userInput);
});
