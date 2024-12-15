const API="http://localhost:3000"
// async function addTodo() {
//     try{
//         const fname=document.getElementById("fname").value;
//         const lname=document.getElementById("lname").value;
//         const num=document.getElementById("num").value;
//         const res=await fetch(API+"/addnum",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({fname,lname,num})
//         })
//         if(res.status==201){
//             const {msg}=await res.json();
//             // console.log(data);
//             alert(msg)
           
//             getTodos();
//         }else{
//             alert("not added")
//         }
//     }catch(error){
//         console.log(error);
        
//     }
// }

async function getTodos(){
    try{
        const res=await fetch(API+"/gettodos")
        if(res.status==200){
            const data=await res.json()
            str=``
            data.map((dt)=>{
                str+=`
               <tr>
                            <td>${dt.fname}</td>
                            <td>${dt.lname}</td>
                            <td>${dt.num}</td>
                            <td>
                                <button class="btn btn-edit">Edit</button>
                                <button class="btn btn-delete">Delete</button>
                            </td>
                        </tr>

                `
            })
            document.getElementById("list").innerHTML=str
        }
        else{
            alert("data not get")
        }
    }catch(error){
        console.log(error);
        
    }
}
getTodos()


async function isCompleted(_id,isCompleted) {
    console.log(isCompleted);
        const res=await fetch(API+`/iscompleted/${_id}`,
            {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({isCompleted})
            }
        )
        console.log(res);
        if(res.status==201){
            getTodos()
        }
        
}

async function deleteTodo(_id){
    console.log(_id);
    const res=await fetch(API+`/deletetodo/${_id}`,
        {
            method:"DELETE",
            headers:{"Content-Type":"application/json"}
        }
    )
    if(res.status==200){
        // alert("Task deleted successfully");
        getTodos();
    }
}