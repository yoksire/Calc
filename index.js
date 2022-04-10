function trimNumber(string) {
    if ((string[string.length - 1] === '0') && (string[string.length - 2] === '0') && (string[string.length - 3] === '0') && (string[string.length - 4] === '0') && (string[string.length - 5] === '0') && (string[string.length - 6] === '0')) {
        string = string.slice(0, string.length - 7);
    } else if ((string[string.length - 1] === '0') && (string[string.length - 2] === '0') && (string[string.length - 3] === '0') && (string[string.length - 4] === '0') && (string[string.length - 5] === '0')) {
        string = string.slice(0, string.length - 5);
    } else if ((string[string.length - 1] === '0') && (string[string.length - 2] === '0') && (string[string.length - 3] === '0') && (string[string.length - 4] === '0')) {
        string = string.slice(0, string.length - 4);
    } else if ((string[string.length - 1] === '0') && (string[string.length - 2] === '0') && (string[string.length - 3] === '0')) {
        string = string.slice(0, string.length - 3);
    } else if ((string[string.length - 1] === '0') && (string[string.length - 2] === '0')) {
        string = string.slice(0, string.length - 2);
    } else if (string[string.length - 1] === '0') {
        string = string.slice(0, string.length - 1);
    }
    return string;
}



document.querySelectorAll(".btn").forEach((item, i) => {
  item.addEventListener('click',
    function() {
      var buttonId = item.textContent;
      item.classList.add("clicked");
      setTimeout(
        function() {
          item.classList.remove("clicked");
        }, 100
      );

      // console.log(buttonId);


      var currentSecondText = $('.second-number').text()
      var currentOperator = $('.operator').text()
      var currentFirstText = $('.first-number').text()


      var firstNumber = parseFloat(currentFirstText);
      var secondNumber = parseFloat(currentSecondText);

      if (currentFirstText === '0') {
        currentFirstText = '';
      }
      switch (buttonId.trim()) {
        case 'AC':
        case '↻':
          $('.first-number').text('0');
          $('.second-number').text('');
          $(".operator").text('');
          $('.output-container h1').text('');
          break;
        case 'CLC':
          if (currentSecondText !== '') {
            var newText = currentSecondText.slice(0, currentSecondText.length - 1);
            $('.second-number').text(newText);
          } else {
            if (currentOperator !== '') {
              $('.operator').text('');
            } else {
              if (currentFirstText !== '') {
                var newText = currentFirstText.slice(0, currentFirstText.length - 1);
                $('.first-number').text(newText);
              }
            }
          }
          break;
        case '%':
          if (currentSecondText === '') {
            $('.operator').text('%');
          } else {
            $('.first-number').text($('.output-container h1').text());
            $('.operator').text('%');
            $('.second-number').text('');
          }
          break;
        case '÷':
          if (currentSecondText === '') {
            $('.operator').text('÷');
          } else {
            $('.first-number').text($('.output-container h1').text());
            $('.operator').text('÷');
            $('.second-number').text('');
          }
          break;
        case '×':
          if (currentSecondText === '') {
            $('.operator').text('×');
          } else {
            $('.first-number').text($('.output-container h1').text());
            $('.operator').text('×');
            $('.second-number').text('');
          }
          break;
        case '-':
          if (currentSecondText === '') {
            $('.operator').text('-');
          } else {
            $('.first-number').text($('.output-container h1').text());
            $('.operator').text('-');
            $('.second-number').text('');
          }
          break;
        case '+':
          if (currentSecondText === '') {
            $('.operator').text('+');
          } else {
            $('.first-number').text($('.output-container h1').text());
            $('.operator').text('+');
            $('.second-number').text('');
          }
          break;
        case '.':
          if (currentOperator === '') {
            $('.first-number').text(currentFirstText + '.');
          } else {
            $('.second-number').text(currentSecondText + '.');
          }
          break;
        case '=':
          switch (currentOperator) {
            case '%':  // assume this is modulo
              // console.log("hi");
              $('.output-container h1').text(trimNumber((firstNumber % secondNumber).toFixed(6)));
              break;
            case '÷':
              $('.output-container h1').text(trimNumber((firstNumber / secondNumber).toFixed(6)));
              break;
            case '×':
              $('.output-container h1').text(trimNumber((firstNumber * secondNumber).toFixed(6)));
              break;
            case '-':
              $('.output-container h1').text(trimNumber((firstNumber - secondNumber).toFixed(6)));
              break;
            case '+':
              $('.output-container h1').text(trimNumber((firstNumber + secondNumber).toFixed(6)));
              break;
          }
          $('.first-number').text('0')
          $('.operator').text('')
          $('.second-number').text('')
          break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          if (currentOperator === '') {
            currentFirstText = currentFirstText + buttonId.trim()
            console.log(currentFirstText);
            $('.first-number').text(currentFirstText);
          } else {
            currentSecondText = currentSecondText + buttonId.trim()
            console.log(currentSecondText);
            $('.second-number').text(currentSecondText);
            // manipulate output here simultaneously
            switch (currentOperator) {
              case '%':  // assume this is modulo
                // console.log("hi");
                $('.output-container h1').text(trimNumber((parseFloat(currentFirstText) % parseFloat(currentSecondText)).toFixed(6)));
                break;
              case '÷':
                $('.output-container h1').text(trimNumber((parseFloat(currentFirstText) / parseFloat(currentSecondText)).toFixed(6)));
                break;
              case '×':
                $('.output-container h1').text(trimNumber((parseFloat(currentFirstText) * parseFloat(currentSecondText)).toFixed(6)));
                break;
              case '-':
                $('.output-container h1').text(trimNumber((parseFloat(currentFirstText) - parseFloat(currentSecondText)).toFixed(6)));
                break;
              case '+':
                $('.output-container h1').text(trimNumber((parseFloat(currentFirstText) + parseFloat(currentSecondText)).toFixed(6)));
                break;
            }
          }
          break;
        default:
          console.log("None");
          break;
      }
    });
});

$('.fa-regular').each(function() {
  $(this).click(function() {
    if ($(this).hasClass("fa-sun")) {
      $('.fa-regular').each(function() {
        if ($(this).hasClass("mode-active-dark")) {
          $(this).removeClass("mode-active-dark");
          $(this).addClass("mode-inactive-light");
        }
      })
      $(this).removeClass("mode-inactive-dark");
      $(this).addClass("mode-active-light");

      $('body').removeClass('body-c-mode-dark');
      $('.calculator').removeClass('calculator-bg-mode-dark');
      $('.mode-switch').removeClass('mode-switch-bg-mode-dark');
      $('.lower-container').removeClass('lower-container-bg-mode-dark');
      $('.btn').removeClass('btn-bg-mode-dark btn-c-mode-dark');

      $('body').addClass('body-c-mode-light');
      $('.calculator').addClass('calculator-bg-mode-light');
      $('.mode-switch').addClass('mode-switch-bg-mode-light');
      $('.lower-container').addClass('lower-container-bg-mode-light');
      $('.btn').addClass('btn-bg-mode-light btn-c-mode-light');

    } else {
      $('.fa-regular').each(function() {
        if ($(this).hasClass("mode-active-light")) {
          $(this).removeClass("mode-active-light");
          $(this).addClass("mode-inactive-dark");
        }
      })
      $(this).removeClass("mode-inactive-light");
      $(this).addClass("mode-active-dark");

      $('body').removeClass('body-c-mode-light');
      $('.calculator').removeClass('calculator-bg-mode-light');
      $('.mode-switch').removeClass('mode-switch-bg-mode-light');
      $('.lower-container').removeClass('lower-container-bg-mode-light');
      $('.btn').removeClass('btn-bg-mode-light btn-c-mode-light');

      $('body').addClass('body-c-mode-dark');
      $('.calculator').addClass('calculator-bg-mode-dark');
      $('.mode-switch').addClass('mode-switch-bg-mode-dark');
      $('.lower-container').addClass('lower-container-bg-mode-dark');
      $('.btn').addClass('btn-bg-mode-dark btn-c-mode-dark');
    }
  })
});

$('.btn-green').each(function() {
  $(this).hover(function() {
    $(this).removeClass('btn-green');
  }, function() {
    $(this).addClass('btn-green');
  })
});

$('.btn-orange').each(function() {
  $(this).hover(function() {
    $(this).removeClass('btn-orange');
  }, function() {
    $(this).addClass('btn-orange');
  })
});
