// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CCaaSSdk } from "./types/CCaaSSDK";
import { ICTIInterface, ConversationInfo, ClickToDialCallbackFunction } from "./types/IOpenFrame";

class SNExampleCTIDriver implements ICTIInterface {
    ccaaSSDKInstance: CCaaSSdk;

    constructor(ccaaSSDKInstance: CCaaSSdk) {
        if (!ccaaSSDKInstance) {
            throw new Error('ccaaSSDKInstance cannot be null or undefined');
        }
        this.ccaaSSDKInstance = ccaaSSDKInstance;
    }

    public initialize(): Promise<boolean> {
        let isServiceNowPresent = typeof (window as any).openFrameAPI !== 'undefined'
        if (isServiceNowPresent === false) {
            const openCTIurlPath = `/scripts/openframe/latest/openFrameAPI.min.js`;
            const servicenoworgdomain: string = window.location.ancestorOrigins[0];
            const source = `${servicenoworgdomain}${openCTIurlPath}`;
            const sourceResult = SNExampleCTIDriver.loadScript(source);
            return sourceResult;
        }
        return Promise.resolve(true);
    }

    public setSoftPhonePanelWidth(width: number): void {
        (window as any).openFrameAPI.setWidth(width);
    }

    public setSoftPhonePanelHeight(height: number): void {
        (window as any).openFrameAPI.setHeight(height);
    }

    public setSoftPhonePanelVisibility(visible: boolean): void {
        if (visible) {
            (window as any).openFrameAPI.show();
        } else {
            (window as any).openFrameAPI.hide();
        }
    }

    public async conversationReady(conversationData: ConversationInfo): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {
            reject(new Error('Customer data for search is missing'));
        });
    }

    public endConversation(conversationId: string): void {
        throw new Error('Method not implemented.');
    }

    public onClickToDial(callbackFuntion: ClickToDialCallbackFunction): void {
        throw new Error('Method not implemented.');
    }

    private static loadScript(source: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.src = source;
            script.onload = function () {
                resolve(true);
            };
            script.onerror = function () {
                reject(new Error(`Error in loading ${source}`));
            };
            document.getElementsByTagName('head')[0].appendChild(script);
        });
    }
}

(window as any).CCaaS = (window as any).CCaaS || {};
if (!(window as any).CCaaS.CTIDriver) {
    (window as any).CCaaS.CTIDriver = SNExampleCTIDriver;
}

export default SNExampleCTIDriver;
