const button=document.querySelectorAll('.block button');
const body=document.querySelector('body');

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
console.log(e.target)
if( e.target.id==='green')
{
    body.style.backgroundColor=e.target.id;

}  
if(e.target.id==='yellow')
    {
        body.style.backgroundColor=e.target.id;
    
    } 


    if(e.targe.idt==='grey')
        {
            body.style.backgroundColor=e.target.id;
        
        } 

        if(e.target.id==='blue')
            {
                body.style.backgroundColor=e.target.id;
            
            } 


            if(e.target.id==='black')
                {
                    body.style.backgroundColor=e.target.id;
                
                } 


                if(e.target.id==='pink')
                    {
                        body.style.backgroundColor=e.target.id;
                    
                    } 




})
    });

