$(document).ready(function () {
  $('.saveButton').on('click', function () {
    var time = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    
    localStorage.setItem(time, value);
    $('.notification').addClass('reveal');
    setTimeout(function () {
      $('.notification').removeClass('reveal');
    }, 3000);
  });

  function showTime() {
      var currentTime = current().hour();
      $('.time-block').each(function () {
          var timeBlock = parseInt($(this).attr('id').split('-')[1]);
          if (timeBlock < currentTime) {
              $(this).addClass('past');
          } else if (timeBlock === currentTime) {
              $(this).removeClass('past');
              $(this).addclass('present');
          }    else {
              $(this).removeClass('past');
              $(this).removeClass('present');
              $(this).removeClass('future');
          }
          
      });
    }

  showTime();


  var update = setInterval(showTime, 10000);

  $('#hour-1 .description').val(localStorage.getItem('hour-1'));
  $('#hour-2 .description').val(localStorage.getItem('hour-2'));
  $('#hour-3 .description').val(localStorage.getItem('hour-3'));
  $('#hour-4 .description').val(localStorage.getItem('hour-4'));
  $('#hour-5 .description').val(localStorage.getItem('hour-5'));
  $('#hour-6 .description').val(localStorage.getItem('hour-6'));
  $('#hour-7 .description').val(localStorage.getItem('hour-7'));
  $('#hour-8 .description').val(localStorage.getItem('hour-8'));
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));


  $('#currentDay').text(current().format('dddd, MMMM Do'));


});