let userName = prompt("Who's there", '');
if (userName == 'Admin') {
    alert('Welcome');

} else  if (userName == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}
let pass = prompt('Passwword', '');
if (pass == 'TheMaster'){
    alert('Welcome');
} else  if (pass == null) {
    alert('Canceled');
} else {
    alert('Wrong password');
}