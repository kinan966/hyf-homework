/* ________________________ */

function GetFullname(firstname,surname,useFormalName,gender)
{
    if(firstname, surname, useFormalName === true)
    {
        return "Lord " + firstname + ' ' + surname;
    }
    
    else if(gender === "male")
    {
        return "Mr. " + firstname + ' ' + surname,
                "Mr. " + firstname + ' ' + surname ;
    }

    else if(gender === "female")
    {
        return "Ms. " + firstname + ' ' + surname,
                "Ms. " + firstname + ' ' + surname;
    }

    else
    {
        return firstname + ' ' + surname;
    }
}

const passanger_1 = GetFullname("Ayaanle", "Hassan",true);
const passanger_2 = GetFullname("Benjamin", "Hughes", false);
const passanger_3 = GetFullname("Moktar", "A.Hassan",false,"male");
const passanger_4 = GetFullname("Asha", "J.Mohamed",false,"female");
const passanger_5 = GetFullname("Halimo", "H.Abdullahi");


console.log (passanger_1);
console.log (passanger_2);
console.log (passanger_3);
console.log (passanger_4);
console.log (passanger_5);
//console.log (passanger_6);

