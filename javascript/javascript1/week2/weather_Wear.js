
function Temperature (tempToDay)
{
    if((tempToDay < -30) || (tempToDay > 51))
    {
        return "It is to hot/cold, we can not life in this temperature !!";
    }
    else if((tempToDay < -20) || (tempToDay < 0))
    {
        return " A large velor vest and boots";
    }
    else if((tempToDay < 0) || (tempToDay < 20))
    {
        return "Pant and a shirt + a small vest";
    }
    else if((tempToDay < 20) || (tempToDay < 35))
    {
        return "Short and a t-shirt with sandals";
    }
    else if((tempToDay < 35) || (tempToDay < 50))
    {
        return " It's very hot, you have to be dress lightly ";
    }  
}

console.log(Temperature(79));

