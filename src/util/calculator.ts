export function Calculo (impostId:string, fiscalValue:number, stateFiscal:string){
    let impost = 0;
    if (impostId == '1234' || impostId == '6789' && stateFiscal == 'RJ'){
        impost = fiscalValue * 0.01
    }else if(impostId == '1234' || impostId == '6789' && stateFiscal == 'SP'){
        impost = fiscalValue * 0.02
    }else if(impostId == '1234' || impostId == '6789' && stateFiscal == 'MG'){
        impost = fiscalValue * 0.03
    }
}