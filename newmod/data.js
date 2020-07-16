

$(document).ready(function()  {


 $('#submit').click((event)=> {

    //stop submit the form, we will post it manually.
    event.preventDefault();
    doAjax();

});



});

function doAjax() {

    var fname = $('#first').val();
    console.log("1st name"+ fname)
    var lname = $('#last').val();
    console.log("lst name"+ lname);

    window.sessionStorage.setItem('firstname', fname);
    window.sessionStorage.setItem('lastname', lname);

    console.log(sessionStorage.getItem('firstname'))
    console.log(sessionStorage.getItem('lastname'))


    if(fname != '' && lname !=''){
    //if($('input:required') != ''){

    window.location.href= 'newmod/dataresult.html';
    }

    else {
        alert("please input your field");
    }
}

