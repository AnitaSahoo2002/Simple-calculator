let inp=document.getElementById("display");
        let str="";
        const buttons=document.querySelectorAll(".btn");
       Array.from(buttons).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            if(e.target.innerHTML==="="){
                try{
             str=eval(str);
             inp.value=str;
            }
            catch(error){
                inp.value=error;
            }
            }
            else if(e.target.innerHTML==="AC"){
                str="";
                inp.value=str;
                console.log(str);
            }
            else{
                str=str+e.target.innerHTML;
                inp.value=str;
                console.log(str);
            }
        })

        })
       