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
 * Initializes a new instance of the EdifactAcknowledgementSettings class.
 * @constructor
 * The Edifact agreement acknowledgement settings.
 *
 * @member {boolean} needTechnicalAcknowledgement The value indicating whether
 * technical acknowledgement is needed.
 *
 * @member {boolean} batchTechnicalAcknowledgements The value indicating
 * whether to batch the technical acknowledgements.
 *
 * @member {boolean} needFunctionalAcknowledgement The value indicating whether
 * functional acknowledgement is needed.
 *
 * @member {boolean} batchFunctionalAcknowledgements The value indicating
 * whether to batch functional acknowledgements.
 *
 * @member {boolean} needLoopForValidMessages The value indicating whether a
 * loop is needed for valid messages.
 *
 * @member {boolean} sendSynchronousAcknowledgement The value indicating
 * whether to send synchronous acknowledgement.
 *
 * @member {string} [acknowledgementControlNumberPrefix] The acknowledgement
 * control number prefix.
 *
 * @member {string} [acknowledgementControlNumberSuffix] The acknowledgement
 * control number suffix.
 *
 * @member {number} acknowledgementControlNumberLowerBound The acknowledgement
 * control number lower bound.
 *
 * @member {number} acknowledgementControlNumberUpperBound The acknowledgement
 * control number upper bound.
 *
 * @member {boolean} rolloverAcknowledgementControlNumber The value indicating
 * whether to rollover acknowledgement control number.
 *
 */
class EdifactAcknowledgementSettings {
  constructor() {
  }

  /**
   * Defines the metadata of EdifactAcknowledgementSettings
   *
   * @returns {object} metadata of EdifactAcknowledgementSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EdifactAcknowledgementSettings',
      type: {
        name: 'Composite',
        className: 'EdifactAcknowledgementSettings',
        modelProperties: {
          needTechnicalAcknowledgement: {
            required: true,
            serializedName: 'needTechnicalAcknowledgement',
            type: {
              name: 'Boolean'
            }
          },
          batchTechnicalAcknowledgements: {
            required: true,
            serializedName: 'batchTechnicalAcknowledgements',
            type: {
              name: 'Boolean'
            }
          },
          needFunctionalAcknowledgement: {
            required: true,
            serializedName: 'needFunctionalAcknowledgement',
            type: {
              name: 'Boolean'
            }
          },
          batchFunctionalAcknowledgements: {
            required: true,
            serializedName: 'batchFunctionalAcknowledgements',
            type: {
              name: 'Boolean'
            }
          },
          needLoopForValidMessages: {
            required: true,
            serializedName: 'needLoopForValidMessages',
            type: {
              name: 'Boolean'
            }
          },
          sendSynchronousAcknowledgement: {
            required: true,
            serializedName: 'sendSynchronousAcknowledgement',
            type: {
              name: 'Boolean'
            }
          },
          acknowledgementControlNumberPrefix: {
            required: false,
            serializedName: 'acknowledgementControlNumberPrefix',
            type: {
              name: 'String'
            }
          },
          acknowledgementControlNumberSuffix: {
            required: false,
            serializedName: 'acknowledgementControlNumberSuffix',
            type: {
              name: 'String'
            }
          },
          acknowledgementControlNumberLowerBound: {
            required: true,
            serializedName: 'acknowledgementControlNumberLowerBound',
            type: {
              name: 'Number'
            }
          },
          acknowledgementControlNumberUpperBound: {
            required: true,
            serializedName: 'acknowledgementControlNumberUpperBound',
            type: {
              name: 'Number'
            }
          },
          rolloverAcknowledgementControlNumber: {
            required: true,
            serializedName: 'rolloverAcknowledgementControlNumber',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = EdifactAcknowledgementSettings;
