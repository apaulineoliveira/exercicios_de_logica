const IDADE = 15;
const TEM_CARTEIRINHA = true;
const PESSOA_ADULTA = IDADE >= 18 && IDADE <= 60;

    if(PESSOA_ADULTA && TEM_CARTEIRINHA === false) {
        console.log("Inteira");
    } else {
        console.log("Meia");
    }

//Solucionando o exercício usando o pipe "||" - Solving the exercise using the pipe

// const IDADE = 15;
// const TEM_CARTEIRINHA = false; 
// const PESSOA_ADULTA = IDADE >= 18 && IDADE <= 60;
//    if (idade < 18 || idade > 60 || (PESSOA_ADULTA && TEM_CARTEIRINHA))
//          console.log("Meia") {  //
//    } else { 
//      console.log("Inteira")
//    }
