
function prime(a)
{
    for(let i = 0; i <= a; i++)
    {
        if(a%i == 0)
        {
            count++
        }
    }
    if(count == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let no = 25;
console.log(no);