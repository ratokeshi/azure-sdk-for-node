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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the RuleManagementEventDataSource class.
 * @constructor
 * A rule management event data source. The discriminator fields is always
 * RuleManagementEventDataSource in this case.
 *
 * @member {string} [eventName] the event name.
 * 
 * @member {string} [eventSource] the event source.
 * 
 * @member {string} [level] the level.
 * 
 * @member {string} [operationName] The name of the operation that should be
 * checked for. If no name is provided, any operation will match.
 * 
 * @member {string} [resourceGroupName] the resource group name.
 * 
 * @member {string} [resourceProviderName] the resource provider name.
 * 
 * @member {string} [status] The status of the operation that should be checked
 * for. If no status is provided, any status will match.
 * 
 * @member {string} [subStatus] the substatus.
 * 
 * @member {object} [claims] the claims.
 * 
 * @member {string} [claims.emailAddress] the email address.
 * 
 */
function RuleManagementEventDataSource() {
  RuleManagementEventDataSource['super_'].call(this);
}

util.inherits(RuleManagementEventDataSource, models['RuleDataSource']);

/**
 * Defines the metadata of RuleManagementEventDataSource
 *
 * @returns {object} metadata of RuleManagementEventDataSource
 *
 */
RuleManagementEventDataSource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'Microsoft.Azure.Management.Insights.Models.RuleManagementEventDataSource',
    type: {
      name: 'Composite',
      className: 'RuleManagementEventDataSource',
      modelProperties: {
        resourceUri: {
          required: false,
          serializedName: 'resourceUri',
          type: {
            name: 'String'
          }
        },
        odatatype: {
          required: true,
          serializedName: 'odata\\.type',
          type: {
            name: 'String'
          }
        },
        eventName: {
          required: false,
          serializedName: 'eventName',
          type: {
            name: 'String'
          }
        },
        eventSource: {
          required: false,
          serializedName: 'eventSource',
          type: {
            name: 'String'
          }
        },
        level: {
          required: false,
          serializedName: 'level',
          type: {
            name: 'String'
          }
        },
        operationName: {
          required: false,
          serializedName: 'operationName',
          type: {
            name: 'String'
          }
        },
        resourceGroupName: {
          required: false,
          serializedName: 'resourceGroupName',
          type: {
            name: 'String'
          }
        },
        resourceProviderName: {
          required: false,
          serializedName: 'resourceProviderName',
          type: {
            name: 'String'
          }
        },
        status: {
          required: false,
          serializedName: 'status',
          type: {
            name: 'String'
          }
        },
        subStatus: {
          required: false,
          serializedName: 'subStatus',
          type: {
            name: 'String'
          }
        },
        claims: {
          required: false,
          serializedName: 'claims',
          type: {
            name: 'Composite',
            className: 'RuleManagementEventClaimsDataSource'
          }
        }
      }
    }
  };
};

module.exports = RuleManagementEventDataSource;
