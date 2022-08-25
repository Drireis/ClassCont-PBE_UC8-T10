let listaAlunos = ["Adriano","Carlos","Gustavo","Cintia", "Gabriela"];
console.log("=======Classificação=======")
for (let index = 0; index < listaAlunos.length; index++) {
    if (index  == 0 ) {console.log(index +"- "+ (listaAlunos[index] + " Número zero"));
        
    } else if (index % 2 == 0) {
        console.log(index +"- "+ listaAlunos[index] + " Número par");
        
    }else {
        console.log(index +"- "+ listaAlunos[index] + " Número impar");

    } 
}
