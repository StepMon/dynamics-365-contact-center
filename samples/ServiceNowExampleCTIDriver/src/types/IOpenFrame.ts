export interface ICTIInterface {
    initialize(): Promise<boolean>;
    setSoftPhonePanelWidth(width: number): void;
    setSoftPhonePanelHeight(height: number): void;
    setSoftPhonePanelVisibility(visible: boolean): void;
    conversationReady(conversationData: ConversationInfo): Promise<void>;
    endConversation(conversationId: string): void;
    onClickToDial(callbackFuntion: ClickToDialCallbackFunction): void;
}

export interface ConversationInfo {
    // Définissez les propriétés nécessaires
}

export type ClickToDialCallbackFunction = (phoneNumber: string) => void;
