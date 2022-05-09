$('form').hide().fadeIn(5000)

//Requisição de envio ao clicar no botão
$("#submit").click(function (e) {
  e.preventDefault()
  let dia = $("#data").val(); 
  $('.titulo-img, .foto, .video, .descricao').remove()   
    $.ajax({
      url: `https://api.nasa.gov/planetary/apod?api_key=O9l1VZayQdubP1HrqwxUGRxe5Zx86Y2DVaTTFFGh&date=${dia}`,
      type: "GET",
      success: function (data) {
        $(`<h3 class="titulo-img">${data.title}</h3>`).appendTo('#conteudo-nasa')
        req(data)
        $(`<p class="descricao">${data.explanation}</p>`).appendTo('#conteudo-nasa')
        
      },
    });
  });

  //Função que pega os dados e escreve, e valida se é foto ou vídeo.
  function req(data) {
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
    $('.titulo-img,.foto, .video, .descricao').remove() 
      $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=O9l1VZayQdubP1HrqwxUGRxe5Zx86Y2DVaTTFFGh`,
        type: "GET",
        success: function (data) {
          $(`<h3 class="titulo-img">${data.title}</h3>`).appendTo('#conteudo-nasa')
          req(data)
          $(`<p class="descricao">${data.explanation}</p>`).appendTo('#conteudo-nasa')
        },
      });
    });

 
  //https://api.nasa.gov/planetary/apod?api_key=O9l1VZayQdubP1HrqwxUGRxe5Zx86Y2DVaTTFFGh