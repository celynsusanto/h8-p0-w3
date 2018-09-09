function balikString(text) {
    var textbaru = ""
    for (var row = text[0].length - 1; row >= 0; row--) {
        textbaru = textbaru + text[0][row]
    } return textbaru
}
console.log(balikString(['Hello World']))
