/**
 * TelstraSMSMessagingAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of OutboundPollResponse
 */
class OutboundPollResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.to = this.constructor.getValue(obj.to);
        this.receivedTimestamp = this.constructor.getValue(obj.receivedTimestamp);
        this.sentTimestamp = this.constructor.getValue(obj.sentTimestamp);
        this.status = this.constructor.getValue(obj.status);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'to', realName: 'to' },
            { name: 'receivedTimestamp', realName: 'receivedTimestamp' },
            { name: 'sentTimestamp', realName: 'sentTimestamp' },
            { name: 'status', realName: 'status' },
        ]);
    }
}

module.exports = OutboundPollResponse;
