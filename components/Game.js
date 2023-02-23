AFRAME.registerComponent("game",{
    schema:{
        elemento:{type:"string", default:"#ring1"}
    },
    update:function(){
       this.colicionador(this.data.elemento)
    },
    colicionador:function(elemento){
        const element=document.querySelector(elemento)
        element.addEventListener("collide",(e)=>{
            if(elemento.includes("#ring")){
               console.log("colicione con anillo")
            }
            else if(elemento.includes("#hurdle")){
               console.log("colicionde con un ave")
            }
        })
    }
})
