const API="http://localhost:3000"
async function addTodo() {
    try{
        const fname=document.getElementById("fname").value;
        const lname=document.getElementById("lname").value;
        const num=document.getElementById("num").value;
        const res=await fetch(API+"/addnum",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({fname,lname,num})
        })
        if(res.status==201){
            const {msg}=await res.json();
            // console.log(data);
            alert(msg)
           
            getTodos();
        }else{
            alert("not added")
        }
    }catch(error){
        console.log(error);
        
    }
}