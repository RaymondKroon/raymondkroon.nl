---
title: Creating software for more fun
date: '2024-5-23'
tags:
  - svelte
  - rust
  - software
published: true
---

For years, we have been playing our version of [Oh Hell](https://en.wikipedia.org/wiki/Oh_hell) / [Boerenbridge](https://nl.wikipedia.org/wiki/Boerenbridge) with the family. 
The differences are:
- we bid all at the same time
- trump is not chosen, but cycles through the suits

Over time, we changed the rules a bit:
- 5 points bonus for getting the number of tricks right, because 10 was too much
- rounds with no trump
- instead of the same order of trump, we made it random

Score keeping was just pen and paper on a template made in Google sheets. It was mostly me who kept the scores, and it was ok, but it could be better.
We tried using Excel on a tablet, but that was not a good experience. So we stuck with pen and paper.

## Making an app
Over the time we also played with the idea of an app. But I have an Android and my brother an Iphone. Also, the idea of making any native app was no fun to me. 

Last year I reconsidered the idea. Making score keeping less work would make it more fun for me. I made a list of requirements:
- Works on a phone
- Web app, so it works on Android and iPhone
- No backend
- **I am writing it, so I can make it how I want it**

After some research I decided to use [Svelte](https://svelte.dev/). I had no experience with it, but it looked like an easy way to make score keeping app. And it was.
The first version was done in a few days. It uses local storage to save scores, and routing is done with (mis)using anchor tags.

## Making it better
The app was an instant success. We are still using it every time we play. Over the time I made some improvements and added some features:
- zoom in on the scores, so every can easily read them
- share the final result to whatsapp with a link. I actually uses WASM custom serializer written in Rust for this to make the link as small as possible.
- for a long time I just typed in the names, but I added a rematch button, and show a list of previous names
- the winner of a game wins money from the losers. I kept doing this by hand, but I recently added this to the app.

## More fun everywhere
- I had a lot of fun making the app
- Playing the game is more fun, because we can focus on the game and not on the score keeping
- The sharing function is fun, because whenever part of the family is not there, they can still see the results in the family group chat.

*You don't always have to make money with writing software. It also doesn't have to be useful for anyone else. It can just be about making game night more fun.
And you might learn a thing or two while creating it.*

You can have a look at the code on [GitHub](https://github.com/RaymondKroon/heen-en-terug-score-app) and the [app](https://raymond.k3n.nl/heen-en-terug-score-app/).