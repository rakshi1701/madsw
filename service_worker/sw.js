self.addEventListener("install",(e)=>{
    console.log("installed");
})

self.addEventListener("activate",(e) =>
{
    console.log("Activated");
}) 

self.addEventListener("fetch",(e)=>{
    console.log("fetched");
})