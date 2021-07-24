declare type BoatTweenDataStyle =
    "Linear" | "Quad" | "Cubic" |
    "Quart" | "Quint" | "Sine" | 
    "Expo" | "Circ" | "Elastic" | 
    "Back" | "Bounce" | "Smooth" | 
    "Smoother" | "RidiculousWiggle" | "RevBack" | 
    "Spring" | "SoftSpring" | "Standard" | 
    "Sharp" | "Acceleration" | "Deceleration" | 
    "StandardProductive" | "EntranceProductive" | "ExitProductive" | 
    "StandardExpressive" | "EntranceExpressive" | "ExitExpressive" | 
    "FabricStandard" | "FabricAccelerate" | "FabricDecelerate" | 
    "UWPAccelerate" | "MozillaCurve"


declare type BoatTweenDataDirection =
    "In" | "Out" | "InOut" | "OutIn"

declare type BoatTweenTweenableTypes =
    number | boolean | CFrame |
    Color3 | UDim2 | UDim |
    Ray | NumberRange | NumberSequenceKeypoint |
    PhysicalProperties | NumberSequence | Region3 |
    Rect | Vector2 | Vector3

declare type BoatTweenDataStep =
    "RenderStepped" | "Stepped" | "Heartbeat"

declare interface BoatTweenData<T extends Instance> {
    /**
     * How long the tween should take to complete
     * @default 1
    */
    Time?: number

    /**
     * The style that the tween follows
     * 
     * (Note: Uses strings instead of Enum.EasingStyle to allow us to add styles that Roblox doesn't support)
     * @default Quad
    */
    EasingStyle?: BoatTweenDataStyle

    /**
     * The direction for the TweenStyle to adhere to 
     * @default In
    */
    EasingDirection?: BoatTweenDataDirection

    /** 
     * The amount of time before the tween begins playback after calling :Play() on the tween
     * 
     * (Note: doesn't affect :Resume() calls)
     * @default 0
    */
    DelayTime?: number

    /** 
     * How many times the tween should repeat with -1 being infinity 
     * 
     * (Note: will wait the DelayTime in between replaying)
     * @default 0
    */
    RepeatCount?: number

    /** 
     * Whether the tween should reverse itself after completion
     * 
     * (note: Waits the DelayTime before reversing)
     * @default false
    */
    Reverses?: boolean

    /** 
     * A dictionary where the keys are properties to tween and the values are the end goals of said properties
     * @default {}
    */
    Goal?: Partial<ExtractMembers<T, BoatTweenTweenableTypes>>

    /** 
     * The event of RunService for the tween to move on
     * @default Stepped
    */
    StepType?: BoatTweenDataStep
}