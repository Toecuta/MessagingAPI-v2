/**
 * TelstraSMSMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const Message = require('../lib/Models/Message');
const MessageSentResponse = require('../lib/Models/MessageSentResponse');
const SendSMSRequest = require('../lib/Models/SendSMSRequest');
const InboundPollResponse = require('../lib/Models/InboundPollResponse');
const OutboundPollResponse = require('../lib/Models/OutboundPollResponse');
const OAuthToken = require('../lib/Models/OAuthToken');
const ErrorErrorException = require('../lib/Exceptions/ErrorErrorException');
const OAuthProviderException = require('../lib/Exceptions/OAuthProviderException');

const classMap = {
    Message,
    MessageSentResponse,
    SendSMSRequest,
    InboundPollResponse,
    OutboundPollResponse,
    OAuthToken,
    ErrorErrorException,
    OAuthProviderException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
