$( document ).ready(function() {
    console.log( "ready!" );

    $('#add').click(function() {
      var numberOne = $('#numberOne').val();
      var numberTwo = $('#numberTwo').val();

      var sum = parseFloat(numberOne) + parseFloat(numberTwo);

      $('#answer').html(sum);
    });

    $('#subs').click(function() {
      var numberOne = $('#numberOne').val();
      var numberTwo = $('#numberTwo').val();

      var subs = parseFloat(numberOne) - parseFloat(numberTwo);

      $('#answer').html(subs);
    });

    $('#mult').click(function() {
      var numberOne = $('#numberOne').val();
      var numberTwo = $('#numberTwo').val();

      var mult = parseFloat(numberOne) * parseFloat(numberTwo);

      $('#answer').html(mult);
    });

    $('#divide').click(function() {
      var numberOne = $('#numberOne').val();
      var numberTwo = $('#numberTwo').val();

      var divide = parseFloat(numberOne) / parseFloat(numberTwo);

      $('#answer').html(divide);
    });

    $('#square').click(function() {
      var numberOne = $('#numberOne').val();
      var numberTwo = $('#numberTwo').val();

      var square = [Math.pow(parseFloat(numberOne), 2), Math.pow(parseFloat(numberTwo), 2)];

      $('#answer').html("The square of " + numberOne + " is " + square[0] + ". The square of " + numberTwo + " is " + square[1]);
    });

});
