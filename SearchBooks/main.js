$( document ).ready(function() {

  var card = "card flex-md-row mb-1 shadow-sm ",
      cardBody="card-body flex-column align-items-start",
      col_4= "col-md-4",
      h5="mb-0",
      bodytext="card-text mb-auto";
  // var bookImg = 'card-img';

function getBooksList(data){

  $.each(data.items, function(i, book){
     
    var date  = new Date(book.volumeInfo.publishedDate),
        books = book.volumeInfo,
        title = books.title,
        img = books.imageLinks.smallThumbnail,
        description = books.description,
        authors = books.authors,
        publishedDate = date.getDate()+'.' +date.getMonth()+'.'+date.getFullYear();

    var bookItem = '<div class = "'+col_4+'">';
        bookItem += '<div class = "'+card+'">';
        bookItem += '<div id = "' + i + '" class = "info ' +cardBody+'">';
        bookItem +='<img  src=" ' + img + '">';
        bookItem +='<h5 class = "'+h5+'"> " ' + title +'" </h5>';
        bookItem += '<p class = "'+bodytext+'"> Автор: ' + authors + '</p>';
        bookItem += '<p class = "'+bodytext+'"> Год выпуска: ' + publishedDate + 'гг.</p>';
        bookItem += '<button id = "' + i + '" class= "btn btn-primary">Заказать</button>';
        bookItem +='</div>';  
                   
        $('#booksInfo').append(bookItem);
    
       
  })
      $('#booksInfo').on('click', '.btn', function(){
  
         var eq = $(this).attr('id');
            var description ='<img class="img" src=" '+ data.items[eq].volumeInfo.imageLinks.smallThumbnail + '"> ';
            description +='<p class = "authors"> Автор: ' + data.items[eq].volumeInfo.authors + '</p>';
            description +='<p class = " title"> Название: ' + data.items[eq].volumeInfo.title + '</p>';
            description +='<p> Описание: ' + data.items[eq].volumeInfo.description + '</p>';
            $('div.popup').attr("id", eq);

            $('div[id="'+eq+'"].info').prepend($('.popup').prepend(description).show());
            $('.bgpopup').show();
            $('.bgpopup').click(function(){
            $('div.popup > img').remove();
            $('div.popup > p').remove();
            $('.popup').hide();
            $('.bgpopup').hide();

              });
             
          
      });

};



function hendler(){
  var eq = $('div.popup').attr('id'),
      name = $('#name').val(),
      email = $('#email').val(),
      phone = $('#phone').val(),
      img = $('img.img').attr('src');
      title = $('p.title').text(),
      authors = $('p.authors').text();

  var order = '<div  class = "order card mb-4 shadow-sm">';
      order += '<h6 class="border-bottom border-gray pb-2 mb-0"> Вы хотите приобрести:</h6>';
      order += '<img class="rounded" src=" ' + img + '"> ';
      order += '<p>  ' + title +' </p>';
      order += '<p>  ' + authors +' </p>';
      order += '<p> Ваши данные:</p>';
      order += '<p> Имя:'+ name +'</p>';
      order += '<p> e-mail:'+ email +'</p>';
      order += '<p> Телефон:'+ phone +'</p>';
      order += '</div>';

      $('#forSearch').append(order);
      $('div.popup > img').remove();
      $('div.popup > p').remove();
      $('.popup').hide();
      $('.bgpopup').hide();

                   }



$('#form').submit(function(){
  $('#booksInfo').empty();
      var search = $('#search').val();
    $.getJSON( "https://www.googleapis.com/books/v1/volumes?q=" + search, getBooksList);
      

 $("#buy").validate({
    rules:{
      name:{
      required: true,
      minlength: 2
      },
    phone:{
     pattern: '\\+380\\d{2}\\d{7}'
      }
       },
    submitHandler: hendler
     });

           });          


});


