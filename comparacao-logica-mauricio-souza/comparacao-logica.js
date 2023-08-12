console.log("=== COMPARAÇÃO LÓGICA ===")

const comparar = function () {   
 
    // ENTRADA
    const n1 = parseInt(document.getElementById("n1").value || 0);
    const n2 = parseInt(document.getElementById("n2").value || 0);
    
    // Busca no documento o item selecionado
    const itemSelected = 
        document.getElementById("operador").options.selectedIndex;
    
    // A partir do item selecionado, recupera o seu valor
    const operator = 
        document.getElementById("operador").options[itemSelected].value;

    // Valida ENTRADA
    console.log(n1, operator, n2)

    // PROCESSAMENTO
    let result;

    switch (operator) {
        case "maiorQ":
            result = (n1 > n2);
            break;
    
        case "menorQ":
            result = (n1 < n2);    
            break;
    
        case "maiorIgualQ":
            result = (n1 >= n2);
            break;
    
        case "menorIgualQ":
            result = (n1 <= n2);    
            break;

        case "diferente":
            result = (n1 != n2);    
            break;

        case "igualdade":
            result = (n1 == n2);    
            break;
    }

    // SAÍDA
    document.getElementById("result").value = result;

};
