document.getElementById('form-control').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=site:wing-guide.com ' + document.getElementById('test').value;
    return false;
}