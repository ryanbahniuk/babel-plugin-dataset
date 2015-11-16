'use strict';

var assert = require('assert');
var datasetUtilities = require('../src/datasetUtilities');

describe('datasetUtilities', function() {
  describe('#prefixDataset', function() {
    it('should prefix the given string with data-', function() {
      assert.strictEqual(datasetUtilities.prefixDataset('given-string'), 'data-given-string');
    });
  });

  describe('#dasherize', function() {
    it('should separate and lowercase a camelCase string that starts with a lowercase letter', function() {
      assert.strictEqual(datasetUtilities.dasherize('camelCase'), 'camel-case');
      assert.strictEqual(datasetUtilities.dasherize('camelCaseThing'), 'camel-case-thing');
    });

    it('should separate and lowercase a camelCase string that starts with an uppercase letter', function() {
      assert.strictEqual(datasetUtilities.dasherize('CamelCase'), 'camel-case');
      assert.strictEqual(datasetUtilities.dasherize('CamelCaseThing'), 'camel-case-thing');
    });

    it('should leave characters not A-Z unchanged', function() {
      assert.strictEqual(datasetUtilities.dasherize('c4m3lC4s3'), 'c4m3l-c4s3');
    });

    it('should leave dashes unchanged when followed by an uppercase letter', function() {
      assert.strictEqual(datasetUtilities.dasherize('camelCase-WithDash'), 'camel-case--with-dash');
    });

    it('should throw if a lowercase letter follows a dash', function() {
      assert.throws(function() {
        datasetUtilities.dasherize('camelCase-withDash');
      });
    });
  });
});