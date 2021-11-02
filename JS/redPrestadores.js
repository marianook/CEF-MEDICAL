window.addEventListener('scroll', function() {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if (element.getBoundingClientRect().top < screenSize) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }

    }
});


/* control del navbar */
const body = document.querySelector("body");
const nav__bar = document.querySelector(".nav__bar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    nav__bar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    nav__bar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? nav__bar.classList.add("sticky") : nav__bar.classList.remove("sticky");
}

//FILTRO CATEGORIA

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}





//FILTRO BUSCADOR
$(document).ready(function() {

  //CONTADOR DE ITEMS
    /*var jobCount = $('#list .in').length;
    $('.list-count').text(jobCount + ' items');*/
      
    
    $("#search-text").keyup(function () {
       //$(this).addClass('hidden');
    
      var searchTerm = $("#search-text").val();
      var listItem = $('#list').children('div');
    
      
      var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
      
        //extends :contains to be case insensitive
    $.extend($.expr[':'], {
    'containsi': function(elem, i, match, array)
    {
      return (elem.textContent || elem.innerText || '').toLowerCase()
      .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
      
      
      $("#list div").not(":containsi('" + searchSplit + "')").each(function(e)   {
        $(this).addClass('hiding out').removeClass('in');
        setTimeout(function() {
            $('.out').addClass('hidden');
          }, 300);
      });
      
      $("#list div:containsi('" + searchSplit + "')").each(function(e) {
        $(this).removeClass('hidden out').addClass('in');
        setTimeout(function() {
            $('.in').removeClass('hiding');
          }, 1);
      });
      
      //Conteo de items
    /*
        var jobCount = $('#list .in').length;
      $('.list-count').text(jobCount + ' items');*/
      
      //shows empty state text when no jobs found
      if(jobCount == '0') {
        $('#list').addClass('empty');
      }
      else {
        $('#list').removeClass('empty');
      }
      
    });
  
    
                 
       /* 
       Autocompleta el searchbox con jQuery :)*/
       
       
   /*function searchList() {                
      //array of list items
      var listArray = [];
    
       $("#list div").each(function() {
      var listText = $(this).text().trim();
        listArray.push(listText);
      });
      
      $('#search-text').autocomplete({
          source: listArray
      });
      
      
    }
                                     
    searchList();*/
  
    
                      
  });


//FILTRO BUSCADOR LOCALIDAD
$(document).ready(function() {
    
    $("#search-text2").keyup(function () {
       //$(this).addClass('hidden');
    
      var searchTerm = $("#search-text2").val();
      var listItem = $('#list').children('div');
    
      
      var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
      
        //extends :contains to be case insensitive
    $.extend($.expr[':'], {
    'containsi': function(elem, i, match, array)
    {
      return (elem.textContent || elem.innerText || '').toLowerCase()
      .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
  });
      
      
      $("#list div").not(":containsi('" + searchSplit + "')").each(function(e)   {
        $(this).addClass('hiding out').removeClass('in');
        setTimeout(function() {
            $('.out').addClass('hidden');
          }, 300);
      });
      
      $("#list div:containsi('" + searchSplit + "')").each(function(e) {
        $(this).removeClass('hidden out').addClass('in');
        setTimeout(function() {
            $('.in').removeClass('hiding');
          }, 1);
      });
      
      //shows empty state text when no jobs found
      if(jobCount == '0') {
        $('#list').addClass('empty');
      }
      else {
        $('#list').removeClass('empty');
      }
      
    });
  
                      
});
















//SCROLL TO TOP
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function() { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});