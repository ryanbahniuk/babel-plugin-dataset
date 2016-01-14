var datasetUtilities = require('datasetUtilities');

var DatasetPlugin = function(pluginArguments) {
  var Plugin = pluginArguments.Plugin;
  var t = pluginArguments.types;
  return new Plugin("dataset", {
    visitor: {
      MemberExpression: function (node) {
        if (node.object.type === "MemberExpression" && node.object.property.name === "dataset") {
          node.object.property.name = 'getAttribute';
          var name = datasetUtilities.prefixDataset(datasetUtilities.dasherize(node.property.name));
          var arg = new t.Literal(name);
          var call = new t.CallExpression(node.object, [arg]);
          return call;
        }
      }
    }
  });
};

module.exports = DatasetPlugin;
