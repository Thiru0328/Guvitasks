


async function response(){
    var a=await fetch(`https://api-thirukkural.vercel.app/api?num=24`)
    var b= await a.json();
 console.log(b);

}
response().catch(error=>{
    console.log(error);
});