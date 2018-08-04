function isPrime()
{
    var num = document.getElementById("num");
    var no=num.value;
    var flag = true; // initially no is prime
    for(var i = 2; i <= no/2; ++i) // loop is starting from 2 , since any no can be devided by 1. 
        {
            // condition for nonprime number
            if(no % i == 0)
            {
                flag = false;
                break;      //If the no get divided by any no then loop will break and jump out of the loop
            }
        }
        if (flag)
           document.getElementById("isprime").innerHTML="Number is Prime";
        else
        document.getElementById("isprime").innerHTML="Number is not Prime";
}