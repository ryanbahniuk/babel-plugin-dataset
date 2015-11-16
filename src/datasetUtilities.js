'use-strict';

function illegalDatasetAccessor(givenString) {
  return !!givenString.match(/-[a-z]/g);
}

var DatasetUtilities = {
  prefixDataset: function(givenString) {
    return 'data-' + givenString;
  },

  dasherize: function(givenString) {
    if (illegalDatasetAccessor(givenString)) {
      throw 'Illegal Dataset Accessor: A lowercase letter a-z cannot follow a dash.';
    }

    return givenString.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
};

module.exports = DatasetUtilities;
