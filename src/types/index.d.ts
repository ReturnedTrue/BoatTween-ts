/// <reference path="BoatTweenData.d.ts" />
/// <reference path="BoatTweenObject.d.ts" />

declare namespace BoatTween {
    /**
     * @param object The instance that is having it's properties tweened
     * @param data A dictionary of the various settings of the tween
    */
    export function Create<T extends Instance>(this: typeof BoatTween, object: T, data: BoatTweenData<T>): BoatTweenObject<T>

    export type TweenData<T extends Instance> = BoatTweenData<T>
    export type TweenObject<T extends Instance> = BoatTweenObject<T>
}

export = BoatTween