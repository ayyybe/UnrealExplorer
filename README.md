# UnrealExplorer
Inspect & manipulate shipped Unreal Engine 4/5 games without any debug symbols.

Traditionally UE4 utilities are written in C++ and injected into the game/program for internal memory access. This approach lacks portability however, as there are often drastic changes in internal engine structs and implementations, even between minor versions. On top of this, UE is open source so many developers fork their own version to use, rendering their builds incompatible with a tool built only for a specific, official build of UE4. The usual workaround is to create header files defining all relevant engine structs and their offsets for each individual game/engine version, and recompile the entire project when you need to switch between games/versions.

This project takes a different approach; the core library externally reads memory of other programs, and uses a custom reflection engine to interpret this data based on supplied configuration info. This is obviously much slower than injecting C++ modules into programs and working with memory directly, but this system allows for much greater flexibility, and can be used to develop game/version-agnostic tools. You could even forego the requirement of user-supplied configurations with a detection system to identify and/or generate the proper configuration, for a true plug-and-play experience.

The core C\# library is fully functional and ready to use, but the interactive app is still in early development, and I haven't had much time recently to work on it.

## WTF is _____?

- `UnrealExplorer.App`: Electron/React app UI for UX.AppServer (very incomplete)
- `UnrealExplorer.AppServer`: Internal backend server for UX.App. Handles memory watching and utilizes core services. Exposes the "app bridge" to communicate with UX.App. (mostly complete)
- `UnrealExplorer.Common`: Collection of common data used across projects (i.e. Protobuf schemas for the app bridge)
- `UnrealExplorer.Core`: The core library. Provides memory utils, reflection engine, etc. (main components complete)
- `UnrealExplorer.Tests`: Unit tests; currently only for UX.Core (incomplete)
- `TestApp`: An unorganized sample app mainly used for quick testing of the core/backend during development, since the actual app is still very primitive.
- `TestAppCpp`: An unorganized sample `C++` target program. Just stores some test values in memory.

Admittedly this project could benefit from better documentation...

## But why?
Honestly this project is significantly more effort than its worth for my own use cases, but I enjoy working on it and it could actually be useful to others once it reaches a polished state.

This project is intended to facilitate the research & development of game internals for speedrunning and/or modding. Unity is by comparison easy to mod/develop for and has much more support than Unreal Engine because it's built on the .NET platform. As of right now though, your best option for tinkering with Unreal Engine games is subscribing to some sketchy dude's Patreon for access to their private server-sided tool meant for game cheat development.

## Notes on cheating
This tool let's you tinker with some shipped UE4 games.

The fact is, most development of tools that work with UE internals is done for cheating on online games. In fact, game hacking forums and communities probably have some of the most useful resources for learning about reverse engineering games.

*However*, online games typically incorporate many obfuscation and detection measures that prevent this project from working out-of-the-box without significant effort.

This project doesn't make it any easier to develop cheats for online games, and I do not intend to introduce any features that facilitate this.

Anyone that is capable of adapting this project towards this is more than capable of achieving their goals without it. If anything, modifying this project to support encrypted games and avoid detection would probably be more of a PITA than modifying or using other existing projects more geared towards game hacking.
