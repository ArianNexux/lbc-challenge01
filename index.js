function isABalancedString(par) {
    if (par[0].includes(")", "]", "}")) {
        return false
    }
    par = par.split("")
    let parFiltered = par.filter(function (e) {
        return ["(", ")", "[", "]", "{", "}"].includes(e)
    });

    for (let i = 0; i < parFiltered.length; i++) {
        let findCloseChar = parFiltered[i] == "(" ? ")" : parFiltered[i] == "[" ? "]" : parFiltered[i] == "{" ? "}" : ""
        if (findCloseChar != "") {
            for (let j = i; j < parFiltered.length; j++) {
                if (i != j)
                    if (parFiltered[j] == findCloseChar) {
                        parFiltered[i] = 1
                        parFiltered[j] = 1
                        break;
                    }
            }
        }
    }

    return parFiltered.every(function (e) { return e == 1 });
}

module.exports.isABalancedString = isABalancedString