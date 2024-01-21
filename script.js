var isValid = true;

function setError(input_elem,msg){
    var input_container = input_elem.closest(".input_container");
    input_container.classList.add("error");
    error_msg_elem = input_container.querySelector('.error_msg');

    error_msg_elem.innerText = msg;
}

function removeError(input_elem){
    var input_container = input_elem.closest(".input_container");
    input_container.classList.remove("error");
    error_msg_elem = input_container.querySelector('.error_msg');
    error_msg_elem.innerText = "";
}

function validate_isEmpty(elem){
    if(elem.value==""){
        setError(elem,"This field is required")
        isValid = false;
        return false;
    }
    return true;
}

function validate_day(elem){

    if(!validate_isEmpty(elem)) return false;
    var day = parseInt(elem.value);
    if(day<1 || day>31){
        setError(elem,"Must be a valid day");
        isValid = false;
        return false;
    }
    return true;
}

function validate_month(elem){

    if(!validate_isEmpty(elem)) return false;
    var month = parseInt(elem.value);
    if(month<1 || month>12){
        setError(elem,"Must be a valid month");
        isValid = false;
        return false;
    }
    return true;
}

function validate_year(elem){

    if(!validate_isEmpty(elem)) return false;
    var year = parseInt(elem.value);
    if(year<1){
        setError(elem,"Must be a valid year");
        isValid = false;
        return false;
    }
    return true;
}

function validate_old_date(day,month,year){
    // check if date is older than today or equal
    var dobdate = new Date(`${year.value}-${parseInt(month.value)}-${day.value}`);

    var currdate = new Date();
    currdate = new Date(`${currdate.getFullYear()}-${currdate.getMonth()+1}-${currdate.getDate()}`);
    // console.log(dobdate);
    // console.log(currdate);
    if(dobdate.getTime()>currdate.getTime()){
        isValid = false;
        setError(day,"must be in past");
        setError(month,"must be in past");
        setError(year,"must be in past");
        return false;
    }
    return true;
}

function validate_valid_date(day,month,year){
    // console.log(parseInt(day.value));
    // console.log(num_of_day_in_month(parseInt(year.value),parseInt(month.value)));
    if(parseInt(day.value)>num_of_day_in_month(parseInt(year.value),parseInt(month.value)))
    {
        isValid = false;
        setError(day,"Invalid date");
        setError(month,"Invalid date");
        setError(year,"Invalid date");
        return false;
    }
    return true;
}

function validate(form){
    removeError(form.day);
    removeError(form.month);
    removeError(form.year);

    isValid = true;
    validate_day(form.day);
    validate_month(form.month);
    validate_year(form.year);
    validate_valid_date(form.day,form.month,form.year);
    validate_old_date(form.day,form.month,form.year);
    return true;
}

function calculate_age(ev,form){
    ev.preventDefault();

    // reset back to default;
    age_y.innerText =  '--'; 
    age_m.innerText =  '--'; 
    age_d.innerText =  '--'; 

    validate(form)
    if(!isValid) return;

    // calculate age
    var day = parseInt(form.day.value);
    var month = parseInt(form.month.value);
    var year = parseInt(form.year.value);
    
    // get current date
    var date = new Date();

    var currYear = date.getUTCFullYear(); 
    var currMonth = (date.getUTCMonth()+1);     // date.getUTCMonth() gives month in 0 to 11
    var currDay = date.getDate(); 

    var ageYear = currYear - year;
    var ageMonth = currMonth - month; 
    var ageDay = currDay - day;

    // console.log(ageDay);

    if(ageDay<0){   // if negative
        ageMonth-=1;
        ageDay = ageDay+num_of_day_in_month(year+ageYear-1,month); // add birthday month(last year's)
    }
    if(ageMonth<0){   // if negative
        ageYear-=1;
        ageMonth += 12; // add an year
    }

    age_y.innerText =  ageYear.toString(); 
    age_m.innerText =  ageMonth.toString(); 
    age_d.innerText =  ageDay.toString(); 

}


function is_leap(year){
    // every year that is divisible by 4 is a leap year except for the year divisible by 100
    // 
    if ((year%4==0 && year%100!=0) || (year%4==0 && year%400==0)){
        // if year is divisible with 4 and is non centurial year
        // if year is divisible with 4 and is centurial year and is divisible by 400
        return true;
    }
    return false;
}

function num_of_day_in_month(year,month){
    // month num like 1 for jan , 2 for feb

    switch(month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
            break;
        
        case 2:
            // check if leap
            if(is_leap(year)){
                return 29;
            }
            else{
                return 28;
            }

    }

}