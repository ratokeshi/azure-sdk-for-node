/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the GenerateUpgradedDefinitionParameters class.
 * @constructor
 * The parameters to generate upgraded definition.
 *
 * @member {string} [targetSchemaVersion] The target schema version.
 *
 */
class GenerateUpgradedDefinitionParameters {
  constructor() {
  }

  /**
   * Defines the metadata of GenerateUpgradedDefinitionParameters
   *
   * @returns {object} metadata of GenerateUpgradedDefinitionParameters
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GenerateUpgradedDefinitionParameters',
      type: {
        name: 'Composite',
        className: 'GenerateUpgradedDefinitionParameters',
        modelProperties: {
          targetSchemaVersion: {
            required: false,
            serializedName: 'targetSchemaVersion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GenerateUpgradedDefinitionParameters;