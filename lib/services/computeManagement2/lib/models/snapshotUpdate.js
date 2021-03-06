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
 * @class
 * Initializes a new instance of the SnapshotUpdate class.
 * @constructor
 * Snapshot update resource.
 *
 * @member {string} [osType] the Operating System type. Possible values
 * include: 'Windows', 'Linux'
 *
 * @member {number} [diskSizeGB] If creationData.createOption is Empty, this
 * field is mandatory and it indicates the size of the VHD to create. If this
 * field is present for updates or creation with other options, it indicates a
 * resize. Resizes are only allowed if the disk is not attached to a running
 * VM, and can only increase the disk's size.
 *
 * @member {object} [encryptionSettings] Encryption settings for disk or
 * snapshot
 *
 * @member {boolean} [encryptionSettings.enabled] Set this flag to true and
 * provide DiskEncryptionKey and optional KeyEncryptionKey to enable
 * encryption. Set this flag to false and remove DiskEncryptionKey and
 * KeyEncryptionKey to disable encryption. If EncryptionSettings is null in the
 * request object, the existing settings remain unchanged.
 *
 * @member {object} [encryptionSettings.diskEncryptionKey] Key Vault Secret Url
 * and vault id of the disk encryption key
 *
 * @member {object} [encryptionSettings.diskEncryptionKey.sourceVault] Resource
 * id of the KeyVault containing the key or secret
 *
 * @member {string} [encryptionSettings.diskEncryptionKey.sourceVault.id]
 * Resource Id
 *
 * @member {string} [encryptionSettings.diskEncryptionKey.secretUrl] Url
 * pointing to a key or secret in KeyVault
 *
 * @member {object} [encryptionSettings.keyEncryptionKey] Key Vault Key Url and
 * vault id of the key encryption key
 *
 * @member {object} [encryptionSettings.keyEncryptionKey.sourceVault] Resource
 * id of the KeyVault containing the key or secret
 *
 * @member {string} [encryptionSettings.keyEncryptionKey.sourceVault.id]
 * Resource Id
 *
 * @member {string} [encryptionSettings.keyEncryptionKey.keyUrl] Url pointing
 * to a key or secret in KeyVault
 *
 */
class SnapshotUpdate extends models['ResourceUpdate'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SnapshotUpdate
   *
   * @returns {object} metadata of SnapshotUpdate
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SnapshotUpdate',
      type: {
        name: 'Composite',
        className: 'SnapshotUpdate',
        modelProperties: {
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          sku: {
            required: false,
            serializedName: 'sku',
            type: {
              name: 'Composite',
              className: 'DiskSku'
            }
          },
          osType: {
            required: false,
            serializedName: 'properties.osType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Windows', 'Linux' ]
            }
          },
          diskSizeGB: {
            required: false,
            serializedName: 'properties.diskSizeGB',
            type: {
              name: 'Number'
            }
          },
          encryptionSettings: {
            required: false,
            serializedName: 'properties.encryptionSettings',
            type: {
              name: 'Composite',
              className: 'EncryptionSettings'
            }
          }
        }
      }
    };
  }
}

module.exports = SnapshotUpdate;
