let currentIndex = 0;

function showSlide(index) {
    const slider = $('.slider');
    const slideCount = $('.slider img').length;
    if (index < 0) index = slideCount - 1;
    if (index >= slideCount) index = 0;
    currentIndex = index;
    const offset = -index * 100;
    slider.css('transform', `translateX(${offset}%)`);
  }

  $('#portfolio-container').on('click', '.open-gallery', function() {
        const images = $(this).data('images').split(',');

        $('.slider').empty();

        images.forEach(src => {
            $('.slider').append(`<img src="${src.trim()}" alt="image">`);
        });

        currentIndex = 0;
        showSlide(currentIndex);

        $('#modal').fadeIn();
    });

    $('.close').click(function () {
        $('#modal').fadeOut();
    });

    $('.prev').click(function() {
        showSlide(currentIndex - 1);
    });

    $('.next').click(function() {
        showSlide(currentIndex + 1);
    });

    $(window).click(function(e) {
        if ($(e.target).is('#modal')) {
            $('#modal').fadeOut();
        }
    });
