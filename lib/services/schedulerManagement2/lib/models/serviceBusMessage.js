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
 * Initializes a new instance of the ServiceBusMessage class.
 * @constructor
 * @member {object} [authentication] Gets or sets the Service Bus
 * authentication.
 *
 * @member {string} [authentication.sasKey] Gets or sets the SAS key.
 *
 * @member {string} [authentication.sasKeyName] Gets or sets the SAS key name.
 *
 * @member {string} [authentication.type] Gets or sets the authentication type.
 * Possible values include: 'NotSpecified', 'SharedAccessKey'
 *
 * @member {object} [brokeredMessageProperties] Gets or sets the brokered
 * message properties.
 *
 * @member {string} [brokeredMessageProperties.contentType] Gets or sets the
 * content type.
 *
 * @member {string} [brokeredMessageProperties.correlationId] Gets or sets the
 * correlation ID.
 *
 * @member {boolean} [brokeredMessageProperties.forcePersistence] Gets or sets
 * the force persistence.
 *
 * @member {string} [brokeredMessageProperties.label] Gets or sets the label.
 *
 * @member {string} [brokeredMessageProperties.messageId] Gets or sets the
 * message ID.
 *
 * @member {string} [brokeredMessageProperties.partitionKey] Gets or sets the
 * partition key.
 *
 * @member {string} [brokeredMessageProperties.replyTo] Gets or sets the reply
 * to.
 *
 * @member {string} [brokeredMessageProperties.replyToSessionId] Gets or sets
 * the reply to session ID.
 *
 * @member {date} [brokeredMessageProperties.scheduledEnqueueTimeUtc] Gets or
 * sets the scheduled enqueue time UTC.
 *
 * @member {string} [brokeredMessageProperties.sessionId] Gets or sets the
 * session ID.
 *
 * @member {moment.duration} [brokeredMessageProperties.timeToLive] Gets or
 * sets the time to live.
 *
 * @member {string} [brokeredMessageProperties.to] Gets or sets the to.
 *
 * @member {string} [brokeredMessageProperties.viaPartitionKey] Gets or sets
 * the via partition key.
 *
 * @member {object} [customMessageProperties] Gets or sets the custom message
 * properties.
 *
 * @member {string} [message] Gets or sets the message.
 *
 * @member {string} [namespace] Gets or sets the namespace.
 *
 * @member {string} [transportType] Gets or sets the transport type. Possible
 * values include: 'NotSpecified', 'NetMessaging', 'AMQP'
 *
 */
class ServiceBusMessage {
  constructor() {
  }

  /**
   * Defines the metadata of ServiceBusMessage
   *
   * @returns {object} metadata of ServiceBusMessage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceBusMessage',
      type: {
        name: 'Composite',
        className: 'ServiceBusMessage',
        modelProperties: {
          authentication: {
            required: false,
            serializedName: 'authentication',
            type: {
              name: 'Composite',
              className: 'ServiceBusAuthentication'
            }
          },
          brokeredMessageProperties: {
            required: false,
            serializedName: 'brokeredMessageProperties',
            type: {
              name: 'Composite',
              className: 'ServiceBusBrokeredMessageProperties'
            }
          },
          customMessageProperties: {
            required: false,
            serializedName: 'customMessageProperties',
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
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          namespace: {
            required: false,
            serializedName: 'namespace',
            type: {
              name: 'String'
            }
          },
          transportType: {
            required: false,
            serializedName: 'transportType',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'NetMessaging', 'AMQP' ]
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceBusMessage;
