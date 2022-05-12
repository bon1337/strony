function Wzorzec()
{
    var form=document.getElementById("formularz");
    wzory={
        'imienazw':/^[A-Za-z]{2,}\s+[A-Za-z]{2,}$/,
        'email':/^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/
    }

    for(var pole in wzory)
    {
        if(formularz[pole])
        {
            if(!wzory[pole].test(formularz[pole].value))
            {
                alert("Pole"+pole+"ma nieprawidlowa wartosc");
                return false;
            }
        }
    }
    alert("Wszystkie pola wpełniono poprawnie");
    return true;
}
