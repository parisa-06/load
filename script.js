// function pageLoading() {
//     if (document.getElementById) {
//         document.getElementById('loading').style.visibility = 'hidden';
//     } else {
//         if (document.layers) {
//             document.loading.visibility = 'hidden';
//         } else {
//             document.all.loading.style.visibility = 'hidden';
//         }
//     }
// }
// $("#loading").css({
//     'width': ($("#" + idTag).width() + 'px')
// });
// $("#demo").css('top', $("#test2").height() + "px");

var defult = 0;
function myfunction() {
    console.log("is defult: ", defult)    
    var test = $('#vlidat').val()
    console.log(test)
    var p = $("#" + test);
    console.log("is p", p.length)
    
    if(p.length){

      if(defult==1){
        $("div").remove("#f");
        console.log(defult);
      }  
    var position = p.position();
    console.log("is position",position.top);

    var widths = p.width();
    console.log(widths);

    var heights = p.height();
    console.log(heights);

// $('#parent').append('<div>hello</div>');  

   var d= $("#"+test).append('<div id="f">hello</div>'); 
   console.log("is id : " ,d.id)
   console.log("is d : ",d)
   
    $('#f').css({
        position: 'absolute',
        top: 0,
        left: 0,
        width: widths,
        height: heights,
       
        
    });
    $('#f') .css( "background-color", "red" );
    defult = 1;
}
else {alert("Enter the correct ID")}

}