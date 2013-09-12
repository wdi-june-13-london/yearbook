window.onload = function() {
  var scrollbarPosition = $("#navbar").position().top;

  $(document).on("scroll", function() {

    var windowPosition = $(document).scrollTop();
        
    if (windowPosition >= scrollbarPosition) {
      $("#navbar").addClass("sticky");
    }
    else{
      $("#navbar").removeClass("sticky");
    }

  });

  // var stickyNavTop = $('#tech').position().top;

  // var stickyNav = function(){

  //   var scrollTop = $("body").scrollTop();

  //   console.log(scrollTop, stickyNavTop)

  //   if (scrollTop > stickyNavTop) {
  //       $('.nav').addClass('sticky');
  //   } else {
  //       $('.nav').removeClass('sticky');
  //   }

  // };

  // stickyNav();

  // $(window).scroll(function() {
  //     stickyNav();
  // });




  function close_all_but(div_id) {
    _.each(profile_divs, function(element){
      if (div_id != element) {
        $(element).slideUp("slow");
      } else {
        $(element).slideDown("slow");
      }
    });
  }

  function close(div_id) {
    $(div_id).slideUp("slow");
  }

  var profile_divs=new Array("#andrea-profile","#adam-profile","#ankoor-profile", "#anna-profile","#britney-profile","#cj-profile","#emile-profile","#jamese-profile","#jamesp-profile","#jarkyn-profile","#julien-profile","#luke-profile","#salman-profile","#stewart-profile","#will-profile");

  $('#adam-portrait').mouseenter(function() {
    close_all_but('#adam-profile');
  });
  // $('#adam-profile').mouseleave(function() {
  //   close('#adam-profile');
  // });

  $('#andrea-portrait').mouseenter(function() {
    close_all_but('#andrea-profile');
  });
  // $('#andrea-profile').mouseleave(function() {
  //   close('#andrea-profile');
  // });

  $('#ankoor-portrait').mouseenter(function() {
    close_all_but('#ankoor-profile');
  });
  // $('#ankoor-profile').mouseleave(function() {
  //   close('#ankoor-profile');
  // });

  $('#anna-portrait').mouseenter(function() {
    close_all_but('#anna-profile');
  });
  // $('#anna-profile').mouseleave(function() {
  //   close('#anna-profile');
  // });

  $('#britney-portrait').mouseenter(function() {
    close_all_but('#britney-profile');
  });
  // $('#britney-profile').mouseleave(function() {
  //   close('#britney-profile');
  // });

  $('#cj-portrait').mouseenter(function() {
    close_all_but('#cj-profile');
  });
  // $('#cj-profile').mouseleave(function() {
  //   close('#cj-profile');
  // });

  $('#emile-portrait').mouseenter(function() {
    close_all_but('#emile-profile');
  });
  // $('#emile-profile').mouseleave(function() {
  //   close('#emile-profile');
  // });

  $('#jamese-portrait').mouseenter(function() {
    close_all_but('#jamese-profile');
  });
  // $('#jamese-profile').mouseleave(function() {
  //   close('#jamese-profile');
  // });

  $('#jamesp-portrait').mouseenter(function() {
    close_all_but('#jamesp-profile');
  });
  // $('#jamesp-profile').mouseleave(function() {
  //   close('#jamesp-profile');
  // });

  $('#jarkyn-portrait').mouseenter(function() {
    close_all_but('#jarkyn-profile');
  });
  // $('#jarkyn-profile').mouseleave(function() {
  //   close('#jarkyn-profile');
  // });

  $('#julien-portrait').mouseenter(function() {
    close_all_but('#julien-profile');
  });
  // $('#julien-profile').mouseleave(function() {
  //   close('#julien-profile');
  // });

  $('#luke-portrait').mouseenter(function() {
    close_all_but('#luke-profile');
  });
  // $('#luke-profile').mouseleave(function() {
  //   close('#luke-profile');
  // });

  $('#salman-portrait').mouseenter(function() {
    close_all_but('#salman-profile');
  });
  // $('#salman-profile').mouseleave(function() {
  //   close('#salman-profile');
  // });

  $('#stewart-portrait').mouseenter(function() {
    close_all_but('#stewart-profile');
  });
  // $('#stewart-profile').mouseleave(function() {
  //   close('#stewart-profile');
  // });

  $('#will-portrait').mouseenter(function() {
    close_all_but('#will-profile');
  });
  // $('#will-profile').mouseleave(function() {
  //   close('#will-profile');
  // });

};
