function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const fs = require('fs');

function listFiles(dir, callback) {
    fs.readdir(dir, function(err, files) {
        if (err) return callback(err);
        callback(null, files);
    });
}

listFiles('images/', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
        const img = document.createElement('img');
        const gallery = document.querySelector('.gallery')
        
        img.src = 'images/'+file;
        
        gallery.appendChild(img);
        console.log(file);
    });
});
