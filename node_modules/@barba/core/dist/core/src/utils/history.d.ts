import { Trigger } from '../defs';
/**
 * @barba/core/utils/history
 * <br><br>
 * ## History manager.
 *
 * - Keep track of the navigation history
 *
 * @module core/utils/history
 * @preferred
 */
/***/
interface ICoords {
    x: number;
    y: number;
}
/**
 * History item.
 *
 * @property index
 * @property namespace
 * @property scroll
 * @property URL
 */
interface IHistoryItem {
    /** index */
    index: number;
    /** namespace */
    ns: string | undefined;
    /** Scroll position */
    scroll: ICoords;
    /** URL */
    url: string;
}
export declare class History {
    private _state;
    /**
     * Init with first state.
     */
    init(url: string, ns: string): void;
    /**
     * Add a new state.
     */
    add(url: string, ns: string, i?: number, push?: boolean): void;
    /**
     * Remove last state.
     */
    remove(): void;
    /**
     * Delete all states.
     */
    clear(): void;
    /**
     * Update current state.
     */
    update(data: any): void;
    /**
     * Remove last state then go back.
     */
    cancel(): void;
    /**
     * Get state by index.
     */
    get(index: number): IHistoryItem;
    getDirection(index: number): Trigger;
    /**
     * Get/set the current state.
     */
    current: IHistoryItem;
    /**
     * Get the previous state.
     */
    readonly previous: IHistoryItem | null;
    /**
     * Get the state size.
     */
    readonly size: number;
}
declare const history: History;
export { history };
