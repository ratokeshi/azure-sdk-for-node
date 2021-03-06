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

const models = require('./index');

/**
 * An Ssl predefined policy
 *
 * @extends models['SubResource']
 */
class ApplicationGatewaySslPredefinedPolicy extends models['SubResource'] {
  /**
   * Create a ApplicationGatewaySslPredefinedPolicy.
   * @member {string} [name] Name of Ssl predefined policy.
   * @member {array} [cipherSuites] Ssl cipher suites to be enabled in the
   * specified order for application gateway.
   * @member {string} [minProtocolVersion] Minimum version of Ssl protocol to
   * be supported on application gateway. Possible values include: 'TLSv1_0',
   * 'TLSv1_1', 'TLSv1_2'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ApplicationGatewaySslPredefinedPolicy
   *
   * @returns {object} metadata of ApplicationGatewaySslPredefinedPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationGatewaySslPredefinedPolicy',
      type: {
        name: 'Composite',
        className: 'ApplicationGatewaySslPredefinedPolicy',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          cipherSuites: {
            required: false,
            serializedName: 'properties.cipherSuites',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          minProtocolVersion: {
            required: false,
            serializedName: 'properties.minProtocolVersion',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationGatewaySslPredefinedPolicy;
