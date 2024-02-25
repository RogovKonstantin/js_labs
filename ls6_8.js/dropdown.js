function addItem() {
   
    var textInput = document.getElementById('newItemText');
    var valueInput = document.getElementById('newItemValue');

    var select = document.getElementById('menu');
    var option = document.createElement('option');

    option.text = textInput.value + " " + valueInput.value;
    option.value = valueInput.value;

    for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].text == option.text) {
            alert("Duplicate"); 
            return;
        }
    }
    select.add(option);
}