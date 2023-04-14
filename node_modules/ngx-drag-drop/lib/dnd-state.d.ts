import { DropEffect, EffectAllowed } from "./dnd-types";
export interface DndState {
    isDragging: boolean;
    dropEffect?: DropEffect;
    effectAllowed?: EffectAllowed;
    type?: string;
}
export declare function startDrag(event: DragEvent, effectAllowed: EffectAllowed, type: string | undefined): void;
export declare function endDrag(): void;
export declare function setDropEffect(event: DragEvent, dropEffect: DropEffect): void;
export declare function getDropEffect(event: DragEvent, effectAllowed?: EffectAllowed | DropEffect): DropEffect;
export declare function getDndType(event: DragEvent): string | undefined;
export declare function isExternalDrag(): boolean;
export declare const dndState: Readonly<DndState>;
