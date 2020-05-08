// A $( document ).ready() block.
$( document ).ready(function() {
    //alert('test');
  
  $(document).on('#t-size', 'change', chkSize);
  
  function chkSize(){
    alert('test');
  }
  
  var t_size = $('#t-size').val();
});
