function RNA(dna){
    let rna =""
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] == "G"){
            rna += "C"
        }else if (dna[i] == "C"){
            rna += "G"
        }else if (dna[i] == "T"){
            rna += "A"
        }else if (dna[i] == "A"){
            rna += "U"
        }
    }
    return rna
}
function DNA(rna){
    let dna =""
    for (let i = 0; i < rna.length; i++) {
        if (rna[i] == "C"){
            dna += "G"
        }else if (rna[i] == "G"){
            dna += "C"
        }else if (rna[i] == "A"){
            dna += "T"
        }else if (rna[i] == "U"){
            dna += "A"
        }
    }
    return rna
}