var elements = document.getElementsByClassName('help');
for(var i=0; i<elements.length; i++) { 
  elements[i].style.display='none';
}

document.getElementById('formDetails').style.display='none';

function validateForm(){
    var email    = document.registrationForm.email.value;
    var password = document.registrationForm.password.value;
    var address  = document.registrationForm.address.value;
    var city     = document.registrationForm.city.value;
    var zip      = document.registrationForm.zip.value;
    var state    = document.registrationForm.state.value;
    var gender   = document.registrationForm.inlineRadioOptions.value;
    
    var check_email  = check_pwd = check_addr = check_city = check_state = check_zip = check_gender = true;

    if(!email){
        display('email-help');
        check_email = false;
    }else{
        hide('email-help');
        check_email = true;
    }
    if(!(password.length>=7 && password.length<=12)){
        display('password-help');
        check_pwd = false;
    }else{
        hide('password-help');
        check_pwd = true;
    }
    if(!address){
        display('address-help');
        check_addr = false;
    }else{
        hide('address-help');
        check_addr = true;
    }
    if(!city){
        display('city-help');
        check_city = false;
    }else{
        hide('city-help');
        check_city = true;
    }
    if(state=='default'){
        display('state-help');
        check_state = false;
    }else{
        hide('state-help');
        check_state = true;
    }
    if(!zip){
        display('zip-help');
        check_zip = false;
    }else{
        hide('zip-help');
        check_zip = true;
    }
    if(!gender){
        display('gender-help');
        check_gender = false;
    }else{
        hide('gender-help');
        check_gender = true;
    }
  
    if(check_email && check_pwd && check_addr && check_city && check_state && check_zip && check_gender){
        var temp = '';
        temp = '<tr>';
        temp +='<td>'+email+'</td>';
        temp +='<td>'+password+'</td>';
        temp +='<td>'+address+'</td>';
        temp +='<td>'+city+'</td>';
        temp +='<td>'+state+'</td>';
        temp +='<td>'+zip+'</td>';
        temp +='<td>'+gender+'</td>';
        temp +='</tr>';
        document.getElementById('table-body').innerHTML = temp;
        document.getElementById('formDetails').style.display='block';
    }
}

function resetForm(){
    document.registrationForm.reset();
    document.getElementById('formDetails').style.display='none';
}

function isNumber(event){
    event = (event) ? event : window.event;
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function display(id){
    document.getElementById(id).style.display='block';
}

function hide(id){
    document.getElementById(id).style.display='none';
}