"use strict";(self.webpackChunkdocs_docusaurus=self.webpackChunkdocs_docusaurus||[]).push([[725],{69574:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"weapons-improvements","metadata":{"permalink":"/de/blog/weapons-improvements","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2021-10-06-weapons-improvements.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2021-10-06-weapons-improvements.md","title":"Weapons Improvements","description":"One of our main focus for nanos world is having fun, and we believe that the small details are the big support for the experience to be complete. In the past weeks, we\'ve been working on improving and adding small features to common actions such as firing, picking up objects and even how you perceive them happening. Here\'s the highlights!","date":"2021-10-06T00:00:00.000Z","formattedDate":"6. Oktober 2021","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":2.07,"truncated":false,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"nextItem":{"title":"Sandbox Improvements","permalink":"/de/blog/sandbox-improvements"}},"content":"One of our main focus for nanos world is having fun, and we believe that the small details are the big support for the experience to be complete. In the past weeks, we\'ve been working on improving and adding small features to common actions such as firing, picking up objects and even how you perceive them happening. Here\'s the highlights!\\n\\n\\n## New Weapon Animations\\n\\nSince the beginning, our weapons were stiff when shooting giving an impression of rigidity and lack of fluidity. With the simple improvement of adding firing animations to that, look how it looks better:\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/weapons-improvements/m1911.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/weapons-improvements/makarov.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n## New effects for Bullet Shells\\n\\nBesides new animations, we added a subtle detail: **Bullet Shells Drop SFX**. And not that simple! The sound is precisely played in the location and moment the shells hit the ground or any surface, listen:\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/weapons-improvements/bullet-shell-drop.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\nCheck out a complete before and after comparison of some of the weapons, you can notice all the improvements in detail! <iframe width=\\"620\\" height=\\"347\\" src=\\"https://www.youtube-nocookie.com/embed/ln4AUntcyLM\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\" allowfullscreen mark=\\"crwd-mark\\"></iframe>\\n\\n<br />\\n<br />\\n\\nNote that nanos world weapons animations and aiming are completely generated procedurally, that means when you are in First Person, the weapon sight location is calculated dynamically to be positioned right in the middle of your eyes, in a true first person mode.\\n\\n\\n## SFX when Picking Up objects\\n\\nA subtle sound detail added when you grab and drop a Weapon, and also now the object is slightly thrown to forward:\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/weapons-improvements/picking-up.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n## Scopes\\n\\nIs is really easy to add attachable objects in any Weapon, for example attaching a AWP Scope, we use the `SM_Scope_25x56` mesh for that:\\n\\n```lua\\n-- Spawns a AWP Weapon\\nlocal weapon = Weapon(location or Vector(), rotation or Rotator(), \\"nanos-world::SK_AWP\\")\\n\\n-- Attaches a Scope mesh, with configured offset to be perfectly aligned\\nweapon:AddStaticMeshAttached(\\"sight\\", \\"nanos-world::SM_Scope_25x56\\", \\"\\", Vector(20, 0, 11))\\n\\n-- Adjusts Sight Location to put the Sniper at exact location where the scope center will be when ADS\\nweapon:SetSightTransform(Vector(-15, 0, -4.6), Rotator(0, 0, 0))\\n```\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/weapons-improvements/sniper-scope.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\nThis is completely procedural, it also uses the 3D Mesh scope materials!\\n\\n\\n:::tip\\n\\nYou can also check the [Official Weapons Package](https://github.com/nanos-world/nanos-world-weapons), and see how a RedDot has been added to a P90!\\n\\n:::\\n\\nThat\'s it! Thank you all!"},{"id":"sandbox-improvements","metadata":{"permalink":"/de/blog/sandbox-improvements","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2021-10-01-sandbox-improvements.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2021-10-01-sandbox-improvements.md","title":"Sandbox Improvements","description":"Lot\'s of improvements on Sandbox game-mode has been made in the past month, here\'s the highlights!","date":"2021-10-01T00:00:00.000Z","formattedDate":"1. Oktober 2021","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":3.41,"truncated":false,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"prevItem":{"title":"Weapons Improvements","permalink":"/de/blog/weapons-improvements"},"nextItem":{"title":"nanos world is coming to Alpha!","permalink":"/de/blog/alpha"}},"content":"Lot\'s of improvements on Sandbox game-mode has been made in the past month, here\'s the highlights!\\n\\n## Reworked Spawn Menu UI & UX\\n\\nWe thought a lot about how to make the experience of sandbox game-mode even better. And with that we made several improvements, including the addition of categories in the sidebar, new tabs and even new stuff to spawn! Not to mention several bug fixes and the overall usability has been improved! No more movement blocked when opening the Spawn Menu!\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/new-sandbox-ui.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n## New Props \ud83d\udce6\\n\\nWe\'re importing a big pack of props that will come with the base game.\\n\\nWe\'ve been debating a lot what the threshold is between shipping the game with several props or shipping it with no props and just allowing the player to download whatever they want from the Vault. It\'s a tough decision, but for now we\'ve decided to deliver a basic pack with some cool stuff, including new **Construction Props**, **Fruits**, **Tools** and even new **Weapons**!\\n\\n![](/img/blog/sandbox-improvements/new-props.jpg)\\n\\n\\n## NPCs \ud83e\udd16\\n\\nIt\'s been in there for some time, but we\'d like to highlight it! On Spawn Menu now there is a new tab which allows spawning NPCs.\\n\\nThose NPCs has some basic functionality defined in Lua, they walk around randomly and even run away when they are threatened! Insane!\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/npcs.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n## New Weapons  \ud83d\udd2b\\n\\nThis is not strictly related to Sandbox game-mode, but besides the new Props, we are shipping brand new and configured Weapons in the `nanos-world-weapons` default package!\\n\\nThis includes a P90, UMP-45, M1911 Pistol and many other!\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/new-weapons.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n## Weapons Pattern \ud83c\udfa8\\n\\nBesides the categories in the left-side, we are starting to add a new section to be our \\"options section\\", we started by adding a new option in the Weapons tab: **Patterns**.\\n\\n![](/img/blog/sandbox-improvements/weapon-pattern.jpg)\\n\\n![](/img/blog/sandbox-improvements/weapon-pattern-floor.jpg)\\n\\n![](/img/blog/sandbox-improvements/weapon-pattern-infernoo.jpg)\\n\\nYou can change and select any pattern from the hundreds included in the game to be applied in your weapon (it is synchronized with other players as well)! It\'s is really easy to add your own `.jpg` as pattern in the menu!\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/weapons-pattern.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n## Breakable Props \ud83c\udf49\\n\\nThis is an awesome feature which I\'ve been working in the last weeks, it\'s something 100% scripting side, I\'m not sure yet if this should become a built-in thing.\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/breakable-watermelon.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\nBut now on Sandbox we can configure Props to break when Hit or TakeDamage! It is also possible to easily configure which debris will be generated, it\'s randomness and much more, see an example:\\n\\n```lua\\nSetBreakableProp(\\"nanos-world::SM_Fruit_Watermelon_01\\", 700, {\\n    { mesh = \\"nanos-world::SM_Fruit_Watermelon_01_Half_01\\", rotation = Rotator() },\\n    { mesh = \\"nanos-world::SM_Fruit_Watermelon_01_Half_01\\", rotation = Rotator(180, 0, 0) },\\n    { mesh = \\"nanos-world::SM_Fruit_Watermelon_01_Crust_01\\" },\\n    { mesh = \\"nanos-world::SM_Fruit_Watermelon_01_Slice_01\\" },\\n    { mesh = \\"nanos-world::SM_Fruit_Watermelon_01_Slice_01\\" },\\n})\\n```\\n\\nAnd voila every time a Watermelon spawns through the Spawn Menu, it will be breakable!\\n\\n\\n## Explosive Props \ud83d\udca5\\n\\nIn a sub-category as Breakable Props, we can have Explosive ones! Which will not only break if they take damage or get Hit, but will also EXPLODE! Causing damage, and even start a chain reaction of explosions!\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/chain-explosions.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/gas-house-explosion.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/gas-explosion-danger.mp4\\" type=\\"video/mp4\\" />\\n</video>\\n\\nAs you can see it can be very dangerous to play with fire! \ud83d\ude05\\n\\n\\n## What\'s next! \ud83d\udca1\\n\\nWe are currently working on making everything ready for the official Alpha 1.0.0 release! We are slowly distributing Beta Keys to some testers, this way we can calmly fix some last bugs and give the finishing touches before the full launch!\\n\\nWe\'ve also implemented a LOT of new content for modding & scripting that will still be announced in the next weeks! This will make a HUGE changelog list so probably I will highlight all features in separated Blog News!\\n\\nThat\'s all for this blog! Thank you so much for all your support! \ud83e\udd70\\n\\n<video controls=\\"true\\" allowfullscreen=\\"true\\">\\n    <source src=\\"/videos/blog/sandbox-improvements/watch-teaser.mp4\\" type=\\"video/mp4\\" />\\n</video>"},{"id":"alpha","metadata":{"permalink":"/de/blog/alpha","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2021-09-01-alpha.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2021-09-01-alpha.md","title":"nanos world is coming to Alpha!","description":"So long has passed since we started developing nanos world. In late 2017 we started digging about this ambitious idea, we dreamed of creating a seamless open world sandbox gaming experience without the limitations of reverse engineering games such as Just Cause 3 or Grand Theft Auto. So we decided to create a game from scratch, but only in mid 2019 we started working hard, it was really a very enthusiastic idea, but after a lot of blood, love and sweat we are getting there! \ud83e\udd70","date":"2021-09-01T00:00:00.000Z","formattedDate":"1. September 2021","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":2.755,"truncated":false,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"prevItem":{"title":"Sandbox Improvements","permalink":"/de/blog/sandbox-improvements"},"nextItem":{"title":"\xdcberarbeitete Docs","permalink":"/de/blog/new-docs"}},"content":"![](/img/blog/alpha/alpha-banner.jpg)\\n\\nSo long has passed since we started developing nanos world. In late 2017 we started digging about this ambitious idea, we dreamed of creating a seamless open world sandbox gaming experience without the limitations of reverse engineering games such as Just Cause 3 or Grand Theft Auto. So we decided to create a game from scratch, but only in mid 2019 we started working hard, it was really a very enthusiastic idea, but after a lot of blood, love and sweat we are getting there! \ud83e\udd70\\n\\n## Alpha 1.0.0!\\n\\nAnd we\'re finally reaching the long-awaited Alpha announcement! Lots of things have happened, lots of iterations have been done (and lots will come \ud83d\ude1c) and thanks to all the support from our community and your feedback, we\'re getting closer and closer to releasing nanos world!\\n\\nThe official Alpha 1.0.0 update will come with tons of scripting and gaming news!\\n\\n## Steam!\\n\\n![](/img/blog/alpha/steam-guy.jpg)\\n\\nAlong with the Alpha announcement, we have LOTS of other surprises! As you may have noticed, now [nanos world is on STEAM](https://store.steampowered.com/app/1686450/nanos_world)!!! Itch was very good and helped us a lot at the time, and we will always be grateful that their service and support has always been free! But then we made the decision to take this next step moving to the biggest game platform!\\n\\n:::tip\\n\\n\ud83c\udf8b Please don\'t forget to **WISHLIST** and share [nanos world steam page](https://store.steampowered.com/app/1686450/nanos_world)!\\n\\n::: <iframe class=\\"steam-widget\\" src=\\"https://store.steampowered.com/widget/1686450/\\" frameborder=\\"0\\" width=\\"620\\" height=\\"190\\" loading=\\"lazy\\" mark=\\"crwd-mark\\"></iframe>\\n\\n## New Website!\\n\\n![](/img/blog/alpha/new-website.jpg)\\n\\nWe\'ve created a brand new website which contains a lot of information about nanos world which will help us marketing it! If you didn\'t yet, please take a look at [https://nanos.world](https://nanos.world)!\\n\\n## Lot of news to come!\\n\\nIn the meantime since the last update (0.73.0), we\'ve accumulated **A LOT** of new content for nanos world. Most couldn\'t be released as we were working alongside the Steam integration.\\n\\n### \ud83d\udd22 Versions\\n\\n![](/img/blog/alpha/betas.jpg)\\n\\nWith the arrival of Steam, there will be several changes to how we distribute updates! We will now have two branches `stable/latest` and `bleeding-edge`, we intend to keep the default branch as stable as possible, while working in upcoming content in the *bleeding-edge* branch.\\n\\nBy default all testers will have access to *bleeding-edge* to be able to help us testing the new features before releasing them officially! Also in the docs we are going to have two versions which represent each of the branch!\\n\\n:::info\\n\\nThe version **a1.0.0** is already present in *bleeding-edge* branch and will come to *stable* as soon as possible! Really soon we will start publishing the full changelog of that!\\n\\n:::\\n\\n### \ud83e\uddea Testers\\n\\n![](/img/blog/alpha/manny.jpg)\\n\\nWith this new stage we decided to start fresh and restart our Tester subscriptions. Please check out [Sign Up for Alpha Testing](/docs/signing-up-alpha) for more information on how to become a Tester.\\n\\nIf you already a Tester, please reach us in discord so you can get a Steam key. We will prioritize active members in the community!\\n\\n### \ud83d\udd2e Future plans\\n\\nWe\'ve also created a new [Roadmap](/docs/roadmap) page with all our plans and redirecting to our official Roadmap boards!\\n\\nIn the coming weeks we will gradually start distributing some Steam Keys and as soon we will release the first Steam update with a lot of new content!\\n\\nStay tuned! And thank you so much for all your support!"},{"id":"new-docs","metadata":{"permalink":"/de/blog/new-docs","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2021-08-27-new-docs.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2021-08-27-new-docs.md","title":"\xdcberarbeitete Docs","description":"Vor einiger Zeit haben wir unsere brandneue Dokumentations-Version in Markdown ver\xf6ffentlicht! Es benutzte GitBook-Dienste und Hosting, der Sprung war gro\xdf von der vorherigen Version in Sphinx.","date":"2021-08-27T00:00:00.000Z","formattedDate":"27. August 2021","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":1.505,"truncated":true,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"prevItem":{"title":"nanos world is coming to Alpha!","permalink":"/de/blog/alpha"},"nextItem":{"title":"Sandbox-Update","permalink":"/de/blog/sandbox"}},"content":"![](/img/docs/new-docs.png)\\n\\nVor einiger Zeit haben wir unsere brandneue Dokumentations-Version in Markdown ver\xf6ffentlicht! Es benutzte GitBook-Dienste und Hosting, der Sprung war gro\xdf von der vorherigen Version in Sphinx.\\n\\nSeitdem erforschen wir die Marktm\xf6glichkeiten, wir haben auch ReadMe, ReType und MdBook getestet.\\n\\nUnd dann endlich haben wir Docusaurus gefunden! Ein Open Source Doc, der eine Menge Anpassungen erlaubt, und sogar einige erstaunliche eingebaute Funktionen, die wir verwenden k\xf6nnen! Dies ist ein n\xe4chster Sprung zum Erfolg!\\n\\nSchauen Sie sich die Schl\xfcsselfunktionen an, die im vollst\xe4ndigen Beitrag hinzugef\xfcgt wurden!\\n\\n\x3c!--truncate--\x3e\\n\\n![Docusaurus](https://d33wubrfki0l68.cloudfront.net/ea8e37a6a30e9c260a8936d95c579af4a2dd3df7/6ee7e/img/docusaurus_keytar.svg)\\n\\n## Schl\xfcsselfunktionen\\n\\n### Dunkler Modus!\\n\\nVielen Dank! Nun k\xf6nnen wir das Lichtschema in der rechten oberen Ecke des Bildschirms umschalten!\\n\\n![](/img/blog/new-docs/dark-mode.jpg)\\n\\n### Bessere Suche\\n\\nDocusaurus stellt viele verschiedene Suchmaschinen zur Verf\xfcgung, wir werden sie manchmal ver\xe4ndern, um die beste zu finden!\\n\\n![](/img/blog/new-docs/search.jpg)\\n\\n### Versionierung\\n\\n![](/img/blog/new-docs/versions.jpg)\\n\\nJetzt k\xf6nnen unsere Dokumentation verschiedene Versionen haben! Im Vorfeld einiger Pl\xe4ne, die wir im Hinterkopf haben, werden Sie in der Lage sein, verschiedene Versionen anzuzeigen!\\n\\n### Mehrsprachig\\n\\nWir unterst\xfctzen jetzt mehrere Sprachen! Die \xdcbersetzung wird von Crowdin bereitgestellt, einer Cloud-basierten L\xf6sung, die die Lokalisierung vereinfacht! Jeder kann bei der \xdcbersetzung der Seiten und sogar der Blog-Beitr\xe4ge mitarbeiten!\\n\\n![](/img/blog/new-docs/languages.jpg)\\n\\nGehen Sie dazu bitte auf [nanos world official docs Crowdin page](https://crowdin.com/project/nanos-world-docs), erstellen Sie einen Account und helfen Sie uns, die Seiten zu \xfcbersetzen! Wir unterst\xfctzen derzeit Portugiesisch, Deutsch und Franz\xf6sisch, aber mehr k\xf6nnen bei Bedarf hinzugef\xfcgt werden!\\n\\n![](/img/blog/new-docs/crowdin.jpg)\\n\\n### Blog-Seite!\\n\\nSie m\xfcssen es schon lesen, aber wir k\xf6nnen eine eingebaute Blog-Seite haben! Immer wieder Neuigkeiten!\\n\\n### 100% Anpassungsm\xf6glichkeiten\\n\\nWir k\xf6nnen die Kraft von React in Markdown einbetten, so dass wir einige Seitenkreationen modularisieren und automatisieren k\xf6nnen! Weniger Aufwand f\xfcr uns! Auch k\xf6nnen wir unsere eigenen Komponenten verbessern und viel das UX erstellen!\\n\\n\\nBleiben Sie dran, weil wir n\xe4chste Wochen werden wir etwas GRO\xdfES ank\xfcndigen werden!\\n\\nWir freuen uns \xfcber Ihr Feedback!"},{"id":"sandbox","metadata":{"permalink":"/de/blog/sandbox","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2021-06-18-sandbox.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2021-06-18-sandbox.md","title":"Sandbox-Update","description":"","date":"2021-06-18T00:00:00.000Z","formattedDate":"18. Juni 2021","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":0.005,"truncated":false,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"prevItem":{"title":"\xdcberarbeitete Docs","permalink":"/de/blog/new-docs"},"nextItem":{"title":"Tresor-Update","permalink":"/de/blog/tresor"}},"content":"![](/img/blog/updates/sandbox.jpg)"},{"id":"tresor","metadata":{"permalink":"/de/blog/tresor","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2021-04-03-vault-update.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2021-04-03-vault-update.md","title":"Tresor-Update","description":"","date":"2021-04-03T00:00:00.000Z","formattedDate":"3. April 2021","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":0.005,"truncated":false,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"prevItem":{"title":"Sandbox-Update","permalink":"/de/blog/sandbox"},"nextItem":{"title":"Wasser-Update","permalink":"/de/blog/wasser"}},"content":"![](/img/blog/updates/vault.jpg)"},{"id":"wasser","metadata":{"permalink":"/de/blog/wasser","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2021-01-11-water-update.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2021-01-11-water-update.md","title":"Wasser-Update","description":"","date":"2021-01-11T00:00:00.000Z","formattedDate":"11. Januar 2021","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":0.005,"truncated":false,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"prevItem":{"title":"Tresor-Update","permalink":"/de/blog/tresor"},"nextItem":{"title":"Fahrzeug-Update","permalink":"/de/blog/fahrzeuge"}},"content":"![](/img/blog/updates/water.jpg)"},{"id":"fahrzeuge","metadata":{"permalink":"/de/blog/fahrzeuge","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2020-12-21-vehicles-update.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2020-12-21-vehicles-update.md","title":"Fahrzeug-Update","description":"","date":"2020-12-21T00:00:00.000Z","formattedDate":"21. Dezember 2020","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":0.005,"truncated":false,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"prevItem":{"title":"Wasser-Update","permalink":"/de/blog/wasser"},"nextItem":{"title":"Halloween","permalink":"/de/blog/halloween"}},"content":"![](/img/blog/updates/transformers.jpg)"},{"id":"halloween","metadata":{"permalink":"/de/blog/halloween","editUrl":"https://github.com/nanos-world/docs/edit/master/blog/2020-10-24-halloween.md","source":"@site/i18n/de/docusaurus-plugin-content-blog/2020-10-24-halloween.md","title":"Halloween","description":"","date":"2020-10-24T00:00:00.000Z","formattedDate":"24. Oktober 2020","tags":[{"label":"updates","permalink":"/de/blog/tags/updates"}],"readingTime":0.005,"truncated":false,"authors":[{"name":"Gabriel T. Nardy","title":"nanos world developer (SyedMuhammad)","url":"https://twitter.com/gtnardy","imageURL":"/img/blog/gtnardy.jpg","key":"gtnardy"}],"prevItem":{"title":"Fahrzeug-Update","permalink":"/de/blog/fahrzeuge"}},"content":"![](/img/blog/updates/halloween.jpg)"}]}')}}]);