function soma(arr){
 let aux = 0
 for(let i = 2; i < arr.length; i++){
 aux = aux + parseInt(arr[i])
  }
 console.log(aux)
}

soma(process.argv)
 
