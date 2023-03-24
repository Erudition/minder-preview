var storagefilename = "Minder/personal-data.json";

try {
    // For node only. Breaks tasker

    var Elm = require('./elm-headless.js').Elm;
    var tk = require('./tasker-fillers.js').tk;


    var fs = require('fs');
    tk.readFile = (file) => fs.readFileSync("/tmp/"+file, 'utf8').toString();
    tk.writeFile = function(file, data, append) {
        if (append) {fs.appendFileSync("/tmp/"+file, data)}
        else {fs.writeFileSync("/tmp/"+file, data)}
    };

    var taskerUrl = "http://docket.com/?" + process.argv[2];
    let fallbackUrl = "http://docket.com/?start=Project"; // If in node
    var taskerUrl = (taskerUrl == null || taskerUrl == "") ? fallbackUrl : taskerUrl;


    var inTasker = false;
    // Enable above for node

} catch (e) {
    var taskerUrl = tk.local("elmurl"); // If in Tasker

    var inTasker = true;
}





//{ flags: ["http://docket.com/?start=nothing", tk.readFile("")] });




try {
    var storageContents = tk.readFile(storagefilename);
} catch (e) {
    tk.writeFile(storagefilename, "", true);
    var storageContents = tk.readFile(storagefilename);
}


var app = Elm.Headless.init(
    { flags: [taskerUrl, storageContents] });


if (!inTasker) {tk.flash("running in node! 4 url: " + taskerUrl + " Elm: " + Elm );}


// SUBSCRIPTIONS --------------------------------------------------------

// SET STORAGE
app.ports.setStorage.subscribe(function(data) {
    tk.writeFile(storagefilename,data,false);
});


// FLASH OR TOAST
app.ports.flash.subscribe(function(data) {
    tk.flash(data)
});


// TASKER VARIABLE OUT
app.ports.variableOut.subscribe(function(data) {
      if (data[0].toLowerCase() == data[0]) {
        tk.setLocal(data[0], data[1]);
        console.log("\tSet local var %" + data[0] + " to \t" + data[1]);
    }
      else {
        tk.setGlobal(data[0], data[1]);
        console.log("\tSet Global var %" + data[0] + " to \t" + data[1]);
    }

});

// TASKER STOP EXECUTING
app.ports.exit.subscribe(function() {
    console.log("\nExit triggered now. Delayed 10ms");
    // Must be in this exact form for some reason:
    setTimeout(() => tk.exit(), 10);
});
