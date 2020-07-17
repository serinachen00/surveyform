

$(document).ready(function()  {


 $('#submit').click((event)=> {

    //stop submit the form, we will post it manually.
    //event.preventDefault();
    doAjax();

});



});



function doAjax() {

    //var output = document.getElementById('userinput');

    var fname = $('#first').val();
    var lname = $('#last').val();
    var dobb = $('#dobb').val();
    var  hftt= $('#hftt').val();
    var hii = $('#hii').val();
    var eduu = $('#inputState').val();
    var phh = $('#phone').val();
    var emill = $('#email').val();
    var add11 = $('#address1').val();
    var add22 = $('#address2').val();
    var cityy = $('#city').val();
    var statee = $('#state').val();
    var zipp = $('#zipcode').val();

    window.sessionStorage.setItem('firstname', fname);
    window.sessionStorage.setItem('lastname', lname);
    window.sessionStorage.setItem('dob', dobb);
    window.sessionStorage.setItem('hft', hftt);
    window.sessionStorage.setItem('hi', hii);
    window.sessionStorage.setItem('edu', eduu);
    window.sessionStorage.setItem('ph', phh);
    window.sessionStorage.setItem('emil', emill);
    window.sessionStorage.setItem('add1', add11);
    window.sessionStorage.setItem('add2', add22);
    window.sessionStorage.setItem('city', cityy);
    window.sessionStorage.setItem('state', statee);
    window.sessionStorage.setItem('zip', zipp);



    if(fname != '' && lname !='' && dobb != '' && phh != '' && emill != '' && add11 != '' && cityy!= '' && statee != '' & zipp != ''){

    //if($('input:required') != ''){
     window.location.href= 'newmod/dataresult.html';

      // display();

    }

    /*else {
        alert("please input your field");
    }*/

   // output.innerHTML = htmlstring;
   /* $('#userinput').html('First Name: '+ sessionStorage.getItem('firstname'));
    $('#userinput').html('Last Name: '+ sessionStorage.getItem('lastname') ); */


}

/*function display() {

    console.log("lst name"+ lname);
    document.getElementById('userinput').innerHTML = 'yikesssss' ;

}*/
