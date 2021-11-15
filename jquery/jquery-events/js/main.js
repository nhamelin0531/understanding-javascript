$('document').ready(function() {
    // $('button#btn-1').click(function() {
    //     $('.para-1').toggle()
    // })

    // $('button#btn-2').click(function() {
    //     $('.para-1').show()
    // })

    // $('#btn-1').on('click', function() {
    //     alert('button clicked')
    // })

    // $('#btn-1').dblclick(function() {
    //     $('.para-1').toggle()
    // })

    // $('#btn-1').hover(function() {      //.on hover isn't real
    //     $('.para-1').toggle()
    // })
    
    // $('#btn-1').mousemove(function() {     
    //     $('.para-1').toggle()
    // })

    // $('button#btn-1').click(function(e) {
    //     // alert(e.target.id)
    //     // alert(e.target.innerHTML)
    //     // alert(e.target.outerHTML)
    //     // alert(e.target.className)
    // })   
    
    
    // $(document).mousemove(function(e) {     
    //     $('#coords').html('Coords: Y: ' + e.clientY + 'X: ' + e.clientX)
    // })

    $('input').focus(function() {
        // alert('focus')
        $('input#name').css('background', 'pink')
    })


})
