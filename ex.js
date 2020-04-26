$('#contact-form').submit(function(e){
  var name = document.getElementById('text');
  var email = document.getElementById('emial');
  var message = document.getElementById('message');
  
  if (!name.value || !email.value || !message.value) {
    alertify.error('Please check your entries')
  } else {
    $.ajax({
      url: "http://formspree.io/bi22k@mtholyoke.edu",
      method:"POST",
      data: $(this).serialize(),
      dataType: "json"
    });
    e.preventDefault()
    $(this).get(0).reset()
    altertify.success('Message sent')
  }
})
