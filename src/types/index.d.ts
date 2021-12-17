import { BoatTweenData } from "./BoatTweenData";
import { BoatTweenObject } from "./BoatTweenObject";

export { BoatTweenData } from "./BoatTweenData";
export { BoatTweenObject } from "./BoatTweenObject";

export declare namespace BoatTween {
	/**
	 * @param object The instance that is having it's properties tweened
	 * @param data A dictionary of the various settings of the tween
	 */
	export function Create<T extends Instance>(
		this: typeof BoatTween,
		object: T,
		data: BoatTweenData<T>,
	): BoatTweenObject<T>;
}
