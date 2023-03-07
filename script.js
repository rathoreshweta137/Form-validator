const form = document.getElementById('form')
const Username = document.getElementById('Username')
const Email = document.getElementById('Email')
const Password = document.getElementById('Password')
const password2 = document.getElementById('Password2')


//show input error message
function ShowError(input , message)
{
   const formControl = input.parentElement;
   formControl.className = 'form-control error';
   const small = formControl.querySelector('small');
   small.innerText = message;

}

// show success outline
function ShowSuccess(input)
{ 
    const formControl = input.parentElement;
   formControl.className = 'form-control success';

}

// test function
function test(input) {

    const re = /^.*(?=.{6,})(?=..*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/;
    if (re.test(input.value)) {
        ShowSuccess(input); 
    }else{ShowError(input , 'Not strong , try like : @kitE2');}
}

//check valid email
function isvalidemail(input)
{
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (re.test(String(Email).toLowerCase())) {
        ShowSuccess(input);
    }else{
        ShowError(input, 'Email is not valid');
    }
}

//check required fields
function checkRequired(inputArr)
{
    inputArr.forEach(function(input){
        if (input.value.trim()=== '') {
            ShowError(input, `${getfieldname(input) } is required`);
        }else{
            ShowSuccess(input);
        }
    })
}

// getfieldname
function getfieldname(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//check input length
function checkLength(input , min , max)
{
    if (input.value.length < min) {
        ShowError(input , `${getfieldname(input)} must contain at least ${min} characters`);
    }else if(input.value.length > max)
    {
        ShowError(input , `${getfieldname(input)} must be less than ${max} characters`);
    }
    else{
        ShowSuccess(input);
    }
}

// check password match
function passwordmatch(input1 , input2)
{
    if (input1.value != input2.value) {
        ShowError(input2 , 'password do not match')
    }
}

// test function




// event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

     checkRequired([Username,Email,Password,password2]);
     checkLength(Username , 3, 15);
     checkLength(Password , 6, 20);
     passwordmatch(Password , password2);
     isvalidemail(Email);
     test(Password);
     
     



// so messy due to lots of if statements

 /*   if(Username.value === ''){
         ShowError(Username , 'Username is required');
    }
    else{
        ShowSuccess(Username);
    }

    if(Email.value === ''){
        ShowError(Email , 'Email is required');
   }else if(!isvalidemail(Email.value)){ShowError(Email, 'Email is not valid')}
   else{
       ShowSuccess(Email);
   }

   if(Password.value === ''){
    ShowError(Password , 'Password is required');
}
    else{
   ShowSuccess(Password);
}

if(password2.value === ''){
    ShowError(password2 , 'Confirm password is required');
}
else{
   ShowSuccess(password2);
}*/

                                                        
});