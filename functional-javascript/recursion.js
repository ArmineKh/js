function getDependencies(mod, result) {
  result = result || [];
  let dependencies = mod && mod.dependencies || [];
  Object.keys(dependencies).forEach(function(dep){
  let key = dep + '@' + mod.dependencies[dep].version;
  if(result.indexOf(key) === -1){
    result.push(key);
  }
  getDependencies(mod.dependencies[dep], result)
})
return result.sort();
    }

    module.exports = getDependencies
