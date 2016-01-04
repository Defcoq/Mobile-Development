// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        //bind buttons from the form to js methods
        var btnCalc = document.querySelector('#btnCalc');
        btnCalc.addEventListener('click', onCalculate);

        var btnCalc = document.querySelector('#btnSave');
        btnCalc.addEventListener('click', onSave);

        var btnCalc = document.querySelector('#btnClear');
        btnCalc.addEventListener('click', onClear);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
    $('#navbar').load("navbar.html");
    $('#footer').load("footer.html");

    function onCalculate() {
        var paceDisplay = $('#paceDisplay');
        paceDisplay.hide();

        //get values from input fields
        var time = $('#time').val();
        var dist = $('#distance').val();

        var pace = (time / dist);

        if (!isNaN(parseFloat(pace)) && isFinite(pace)) {
            //update UI
            $('#pace').text(pace.toFixed(2));
            paceDisplay.fadeIn();
        }
    };

    function onSave() {
        var pace = $('#pace').text();
        if (!isNaN(parseFloat(pace)) && isFinite(pace)) {
            //get values from input fields
            var time = $('#time').val();
            var dist = $('#distance').val();

            //build string to add to <li>
            var date = (new Date()).toDateString();

            var list = $("#logData");
            list.prepend('<li>' + date + ' - D: ' + dist +
              ', T: ' + time + ', P: ' + pace + '</li>');
            $('#logDisplay').fadeIn();
        }
    };

    function onClear() {
        $("#logData").empty();
        $('#logDisplay').fadeOut();
    };

} )();