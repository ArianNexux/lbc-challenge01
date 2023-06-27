function isABalancedString(par) {
    if (par[0].includes(")", "]", "}")) {
        return false
    }
    par = par.split("")

    for (let i = 0; i < par.length; i++) {
        let findCloseChar = par[i] == "(" ? ")" : par[i] == "[" ? "]" : par[i] == "{" ? "}" : ""
        if (findCloseChar != "") {
            for (let j = i; j < par.length; j++) {
                if (i != j)
                    if (par[j] == findCloseChar) {
                        par[i] = 1
                        par[j] = 1
                        break;
                    }
            }
        }
    }

    return par.every(function (e) { return e == 1 });

}

console.log(isABalancedString("(((())))("))