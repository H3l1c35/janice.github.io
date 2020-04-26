$('#contact-form').submit(function(e){
  var name = document.getElementById('inputName');
  var email = document.getElementById('inputEmial');
  var message = document.getElementById('inputMessage');
  
  if (!name.value || !email.value || !message.value) {
    alertify.error('Please check your entries')
  } else {
    $.ajax({
      url: "http://2259056874@qq.com",
      method:"POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault()
    $(this).get(0).reset()
    altertify.success('Message sent')
  }
})
