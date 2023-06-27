$(document).ready(function() {
  $('#lista-tarefas').on('click', 'li', function() {
    $(this).toggleClass('tarefa-concluida');
  });
});
$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    const nomeDaNovaTarefa = $('#nome-tarefa').val(); 
    const novoItem = $('<li></li>').text(nomeDaNovaTarefa); 
    $('#lista-tarefas').append(novoItem); 
    $('#nome-tarefa').val(''); 
  });
});
