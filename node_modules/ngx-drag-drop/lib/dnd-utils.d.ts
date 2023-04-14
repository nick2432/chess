import { DropEffect, EffectAllowed } from "./dnd-types";
export interface DragDropData {
    data?: any;
    type?: string;
}
export interface DndEvent extends DragEvent {
    _dndUsingHandle?: boolean;
    _dndDropzoneActive?: true;
}
export declare type DndDragImageOffsetFunction = (event: DragEvent, dragImage: Element) => {
    x: number;
    y: number;
};
export declare const DROP_EFFECTS: DropEffect[];
export declare const CUSTOM_MIME_TYPE = "application/x-dnd";
export declare const JSON_MIME_TYPE = "application/json";
export declare const MSIE_MIME_TYPE = "Text";
export declare function getWellKnownMimeType(event: DragEvent): string | null;
export declare function setDragData(event: DragEvent, data: DragDropData, effectAllowed: EffectAllowed): void;
export declare function getDropData(event: DragEvent, dragIsExternal: boolean): DragDropData;
export declare function filterEffects(effects: DropEffect[], allowed: EffectAllowed | DropEffect): DropEffect[];
export declare function getDirectChildElement(parentElement: Element, childElement: Element): Element | null;
export declare function shouldPositionPlaceholderBeforeElement(event: DragEvent, element: Element, horizontal: boolean): boolean;
export declare function calculateDragImageOffset(event: DragEvent, dragImage: Element): {
    x: number;
    y: number;
};
export declare function setDragImage(event: DragEvent, dragImage: Element, offsetFunction: DndDragImageOffsetFunction): void;
