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
 * Initializes a new instance of the MabContainerExtendedInfo class.
 * @constructor
 * Additional information for the container.
 *
 * @member {date} [lastRefreshedAt] The time stamp when this container was
 * refreshed.
 *
 * @member {string} [backupItemType] The type of backup items associated with
 * this container. Possible values include: 'Invalid', 'VM', 'FileFolder',
 * 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'DPMUnknown'
 *
 * @member {array} [backupItems] The list of backup items associated with this
 * container.
 *
 * @member {string} [policyName] The backup policy associated with this
 * container.
 *
 * @member {string} [lastBackupStatus] The latest backup status of this
 * container.
 *
 */
class MabContainerExtendedInfo {
  constructor() {
  }

  /**
   * Defines the metadata of MabContainerExtendedInfo
   *
   * @returns {object} metadata of MabContainerExtendedInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MabContainerExtendedInfo',
      type: {
        name: 'Composite',
        className: 'MabContainerExtendedInfo',
        modelProperties: {
          lastRefreshedAt: {
            required: false,
            serializedName: 'lastRefreshedAt',
            type: {
              name: 'DateTime'
            }
          },
          backupItemType: {
            required: false,
            serializedName: 'backupItemType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Invalid', 'VM', 'FileFolder', 'AzureSqlDb', 'SQLDB', 'Exchange', 'Sharepoint', 'DPMUnknown' ]
            }
          },
          backupItems: {
            required: false,
            serializedName: 'backupItems',
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
          policyName: {
            required: false,
            serializedName: 'policyName',
            type: {
              name: 'String'
            }
          },
          lastBackupStatus: {
            required: false,
            serializedName: 'lastBackupStatus',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MabContainerExtendedInfo;