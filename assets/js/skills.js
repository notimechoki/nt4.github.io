var skills = {
    ln: 92,
    fe: 78,
    be: 88,
    tat: 83,
  };
  
  $.each(skills, function(key, value) {
    var skillbar = $("." + key);
  
    skillbar.animate(
      {
        width: value + "%"
      },
      3000,
      function() {
        $(".speech-bubble").fadeIn();
      }
    );
  }); 