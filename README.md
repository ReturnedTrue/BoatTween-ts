# BoatTween-ts
Roblox-ts typings for [BoatTween](https://devforum.roblox.com/t/boattween-module/540277), a module made by boatbomber

# Installation
```
$ npm i --save-dev @rbxts/boat-tween
```

# Usage
```ts
import BoatTween from "@rbxts/boat-tween"

let part = new Instance("Part")
part.Anchored = true
part.CanCollide = false
part.CFrame = new CFrame(0, 5, 0)
part.Parent = game.GetService("Workspace")

let tween = BoatTween.Create(part, {
    Time: 5,
    DelayTime: 0.5,

    EasingStyle: "Smooth",
    EasingDirection: "In",

    RepeatCount: -1,
    Reverses: true,

    StepType: "Stepped",

    Goal: {
        CFrame: new CFrame(0, 10, 0)
    }
})

tween.Play()
```

# Exported types
```ts
BoatTween.TweenData<T extends Instance> // Options passed to BoatTween.Create
BoatTween.TweenObject<T extends Instance> // Object returned from BoatTween.Create
```
