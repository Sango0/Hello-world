var app = document.getElementById('notificationBar');
var typewriter = new Typewriter(app, {
    loop: true,
    cursor: "",
});
typewriter.typeString('Web Designer')
    .pauseFor(500)
    .deleteAll()
    .typeString('Front-end Developer')
    .pauseFor(500)
    .deleteAll()
    .typeString('Grafisch Designer')
    .pauseFor(500)
    .start();