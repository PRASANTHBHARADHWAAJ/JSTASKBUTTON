let sum=0;
const a=document.getElementById("sol");

document.getElementById("incr").addEventListener("click",function()
{

        sum =parseInt(a.value);
        sum+=1;

    if(sum < 10 && sum>0)
    {
    document.getElementById("sol").value=sum;
    }
})

document.getElementById("decr").addEventListener("click",function()
{
  
        sum =parseInt(a.value);
        sum-=1;

    if(sum >0 && sum<10 )
    {
    document.getElementById("sol").value=sum;
    }
})