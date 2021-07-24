declare class BoatTweenObject<T extends Instance> {
    /** 
     * The object being tweened
    */
    Instance: T

    /**
     * An Enum.PlaybackState representing the Tween's current state
    */
    PlaybackState: Enum.PlaybackState

    /** 
     * Fired when a Tween ends from the :Stop() function
    */
    Stopped: RBXScriptSignal

    /** 
     * Fired when a Tween ends due to :Play() being completed
    */
    Completed: RBXScriptSignal

    /**
     * Fired when a Tween is played through the :Resume() function
    */
    Resumed: RBXScriptSignal

    /**
     * Plays the tween, starting from the beginning
    */
    Play(this: this): void

    /**
     * Stops the tween, freezing it in its current state
    */
    Stop(this: this): void

    /** 
     * Plays the tween, starting from current position and time
    */
    Resume(this: this): void

    /** 
     * Clears connections, stops playback, destroys objects
    */
    Destroy(this: this): void
}