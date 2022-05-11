$('form').hide().fadeIn(2000)

//Requisição de envio ao clicar no botão
$("#submit").click(function (e) {
  e.preventDefault()
  let dia = $("#data").val();    
    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=O9l1VZayQdubP1HrqwxUGRxe5Zx86Y2DVaTTFFGh&date=${dia}`,
      type: "GET",
      success: function (data) {
        $('.titulo-img, .foto, .video, .descricao').remove()
        $(`<h3 class="titulo-img">${data.title}</h3>`).appendTo('#conteudo-nasa')
        teste(data)
        $(`<p class="descricao">${data.explanation}</p>`).appendTo('#conteudo-nasa')
        
      },
    });
  });

  //Função que pega os dados e escreve, e valida se é foto ou vídeo.
  function teste(data) {
    $('.titulo-img').text(data.title);
    $('.descricao').text(data.explanation)
    if(data.media_type == 'image') {
    $(`<img class="foto">`).appendTo('#conteudo-nasa')
    $('.foto').attr("src", data.url)
  } else if (data.media_type == 'video') {
    $(`<iframe src=${data.url} height="500px" width="720px" class="video"></iframe>`).appendTo('#conteudo-nasa');
  }
  
  }


  //Requisição da data de hoje
  $("#today").click(function (e) {
    e.preventDefault()   
      $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=O9l1VZayQdubP1HrqwxUGRxe5Zx86Y2DVaTTFFGh`,
        type: "GET",
        success: function (data) {
          $('.titulo-img,.foto, .video, .descricao').remove()
          $('#data').val(data.date)
          $(`<h3 class="titulo-img">${data.title}</h3>`).appendTo('#conteudo-nasa')
          teste(data)
          $(`<p class="descricao">${data.explanation}</p>`).appendTo('#conteudo-nasa')
        },
      });
    });

 
  //https://api.nasa.gov/planetary/apod?api_key=O9l1VZayQdubP1HrqwxUGRxe5Zx86Y2DVaTTFFGh