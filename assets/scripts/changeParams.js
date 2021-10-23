const changeParams = () => {
    let newColor = '#';
    const options = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const fonts = ['Times New Roman', 'Florence, cursive', 'Verdana', 'Courier New', 'Georgia', 'Palatino', 'Comic Sans', 'Impact'];
    while(newColor.length < 7) {
        const char = Math.floor(Math.random() * options.length);
        newColor += options[char];
    }
    var elem = document.getElementById('logo');
    elem.style.color = newColor;
    var fontNum = Math.floor(Math.random() * fonts.length);
    elem.style.fontFamily = fonts[fontNum];
}