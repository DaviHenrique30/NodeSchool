function getDependencies(tree, result) {
    result = result || []
    var deps;
    if (tree && tree.hasOwnProperty('dependencies')) {
        var deepen = tree['dependencies']
        for (var key in deepen) {
            getDependencies(deepen[key], result)
            deps = key + '@' + deepen[key]['version']
            if (result.indexOf(deps) === -1) {
                result.push(deps)

            }
        }
    }
    return result.sort()
}

module.exports = getDependencies
