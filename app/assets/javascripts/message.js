$(function(){

  function buildHTML(message){
    if ( message.image ) {
      var html = `<div class="message">
                    <div class="main-message__group">
                      <div class="main-message__name">
                        ${message.user_name}
                        <div class="main-message__name-update">
                          ${message.created_at}
                        </div>
                      </div>
                      <div class="main-message__comment">
                        ${message.content}
                        <img src=${message.image}>
                      </div>
                    </div>
                  </div>`
      return html;
    } else {
      var html = `<div class="message">
                    <div class="main-message__group">
                      <div class="main-message__name">
                        ${message.user_name}
                        <div class="main-message__name-update">
                          ${message.created_at}
                        </div>
                      </div>
                      <div class="main-message__comment">
                        <p class="main-message__comment-content">
                          ${message.content}
                        </p>
                      </div>
                    </div>
                  </div>`
        return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-messages').append(html);
      $('form')[0].reset();
      $('.main-messages').animate({ scrollTop: $('.main-messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('メッセージエラー')
    });
    return false;
  })
});