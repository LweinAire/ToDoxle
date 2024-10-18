document.getElementById('task-name').addEventListener('input', function() {
    var inputField = this;
    var words = inputField.value.split(/\s+/).filter(function(word) {
        return word.length > 0;
    });

    if (words.length > 20) {
        var limitedWords = words.slice(0, 20);
        inputField.value = limitedWords.join(' ');
    }
});

document.getElementById('task-date').addEventListener('input', function() {
    var inputField = this;
    var inputValue = inputField.value;

    inputValue = inputValue.replace(/[^0-9\/]/g, '');

    if (inputValue.length > 2 && inputValue.indexOf('/') !== 2) {
        inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
    }

    if (inputValue.length > 5) {
        inputValue = inputValue.slice(0, 5);
    }

    inputField.value = inputValue;
});


  

  