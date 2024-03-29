<template>
    <div style="margin-top: 60px;">
        <h1>K-OS TERMINAL INTERFACE</h1>

        <div id="terminal"/>

        <h6 style="margin-top: 30px; color: #003a31; font-style: oblique">
            "it's not bad, don't be so afraid of command lines" - Vim User
        </h6>

        <hr class="separator">
        <div>
            <ul class="social-button-list">
                <li class="social-button">
                    <a href="https://github.com/NavidK0"><img src="/images/github.svg" alt="github"></a>
                </li>

                <li class="social-button">
                    <a href="https://www.linkedin.com/in/navidk0/"><img src="/images/linkedin.svg" alt="linkedin"></a>
                </li>

                <li class="social-button">
                    <a href="https://soundcloud.com/navidk0"><img src="/images/soundcloud.svg" alt="soundcloud"></a>
                </li>

                <li class="social-button">
                    <a href="https://twitter.com/NavidK0"><img src="/images/twitter.svg" alt="twitter"></a>
                </li>

                <li class="social-button">
                    <a href="https://www.youtube.com/channel/UCcdPMZe5RvjzTVzZs_zmmVQ">
                        <img
                                src="/images/youtube.svg"
                                alt="youtube"
                        ></a>
                </li>

                <li class="social-button">
                    <a href="https://www.instagram.com/navidk0/"><img src="/images/instagram.svg" alt="instagram"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import {Terminal} from "xterm";
import {FitAddon} from "xterm-addon-fit";
import {WebLinksAddon} from 'xterm-addon-web-links';
import Vue from "vue";
import LocalEchoController from 'local-echo';
import ansi from 'ansi-escape-sequences';

const term = new Terminal(
    {
        convertEol: true,
        cursorStyle: "underline",
        cursorBlink: true,
        rendererType: "canvas",

        allowTransparency: true,

        fontSize: 18,

        theme: {
            background: "hsl(180,57%,10%)"
        }
    }
);

const localEcho = new LocalEchoController(term, {
    historySize: 10,
    maxAutocompleteEntries: 100
});

const fitAddon = new FitAddon();

let DISABLE_STARTUP = false;

export default Vue.extend({
    name: 'App',

    data() {
        return {
            inputBuffer: '' as string | null | undefined
        };
    },

    head: {
        link: [
            {
                rel: 'stylesheet',
                href: '/css/xterm.css'
            }
        ]
    },

    beforeMount() {
        if (sessionStorage.getItem("disableConsoleStartup") === "true") {
            DISABLE_STARTUP = true;
        }

        if (!sessionStorage.getItem("disableConsoleStartup") || sessionStorage.getItem("disableConsoleStartup") === "false") {
            sessionStorage.setItem("disableConsoleStartup", "true");
        }
    },

    async mounted() {
        const terminalElement = document.getElementById('terminal');

        if (!terminalElement) {
            console.error("Could not find terminal element.");
            return;
        }

        term.loadAddon(fitAddon);
        term.loadAddon(new WebLinksAddon());

        term.open(terminalElement);

        fitAddon.fit();
        window.addEventListener('resize', this.onResize.bind(this));

        term.write('login as: ');
        await this.typeTextLn('guest', 0.1);

        await this.sleep(1);

        term.writeln('Authenticating with public key "guest@NAVID-WEB"');

        await this.sleep(1);

        term.writeln('\n');
        term.writeln('Welcome to K-OS 6.1.5 LTS (K-OS/Linux 5.4.0-52-generic x86_64)');
        term.writeln('\n');
        term.writeln(' * Documentation: https://navidk0.dev');
        term.writeln(' * Contact: navid.kabir@ngon.gg');
        term.writeln(' ');
        term.writeln('Last login: ' + new Date().toLocaleString());
        term.writeln(' ');

        await this.startTextSequence();

        term.writeln(' ');

        DISABLE_STARTUP = false;
        await this.recursivelyListenForInput();
    },

    methods: {
        async startTextSequence() {
            await this.typeTextLn("Hey there, I'm Navid Kabir! ", 0.02);
            await this.typeTextLn("I'm a software engineer who loves to compose music and work on video games.\n", 0.02);
            await this.typeTextLn("Welcome to my site.", 0.02);

            await this.typeTextLn('Type "help" to get started.', 0.02);
        },

        async recursivelyListenForInput() {
            try {
                const input = await localEcho.read(`${ansi.style.cyan}guest@navidk0.dev${ansi.style.reset}:~# `);
                await this.parseCommand(input);
                await this.recursivelyListenForInput();
            } catch (error) {
                console.error("An error occurred while running a command.");
            }
        },

        async parseCommand(cmd: string) {
            const args = cmd.split(" ");

            switch (args[0].toLowerCase()) {
                case "help":
                    this.printHelpText();
                    return;

                case "about":
                    term.writeln(`
Passionate about programming, music, and game development, I create video games, compose music, and build companies.

Embracing games as the ultimate art form, I've always dreamt of crafting my own, while also enjoying making music inspired by my background in playing instruments and participating in school bands.

Simply put, I love making things!
`);
                    return;

                case "echo": {
                    const copy = [...args];
                    copy.shift();

                    term.writeln(copy.join(" "));
                    return;
                }

                case "clear": {
                    term.write(ansi.erase.display(2));
                    term.clear();
                    return;
                }

                case "ls":
                    term.writeln(ansi.style.blue + "memes  coffee  huginn  nf  spacepulse  chronoflux  deadgames extremely_top_secret_documents");
                    return;

                case "cd":
                    term.writeln("Yeah... no, sorry. I wasn't actually going to program this in.\nI hope the illusion isn't completely shattered.");
                    return;

                case "mkdir":
                    term.writeln("Beep bloop! I have made a directory somewhere in the universe!\n");
                    return;

                case "rm":
                    term.writeln("Beep bloop! I have removed a directory from somewhere in the universe!\n");
                    return;

                case "contact":
                    term.writeln("Opening your mail client...");
                    window.open("mailto:navid.kabir@ngon.gg?subject=Contact%20-%20navidk0.dev&body=I%20got%20somethin'%20to%20say%20to%20ya!");
                    return;

                case "roto roto":
                case "roto":
                case "rotoscape":
                    await this.typeTextLn("Hell YEAH! Proud of this one! 🚀", 0.025, 0.025);
                    await this.sleep(1);
                    window.open("https://store.steampowered.com/app/663940/Rotoscape/");
                    return;

                case "spacepulse":
                case "sp":
                    await this.typeTextLn("Back from the dead baby! 🚀", 0.025, 0.025);
                    await this.sleep(1);
                    window.open("https://ngon.gg/games/spacepulse");
                    return;

                case "exigence":
                case "chronoflux":
                    await this.typeTextLn("Sorry Kevin, but it's beyond dead.", 0.025, 0.025);
                    return;

                case "ngon":
                    window.open("https://ngon.gg");
                    return;

                case "discord":
                    await this.typeTextLn("Feel free to reach out! NavidK0#0001", 0.025, 0.025);
                    return;

                case "twitter":
                    window.open("https://twitter.com/NavidK0");
                    return;

                case "github":
                    window.open("https://github.com/NavidK0");
                    return;

                case "soundcloud":
                case "sc":
                    window.open("https://soundcloud.com/navidk0");
                    return;

                case "youtube":
                case "yt":
                    window.open("https://www.youtube.com/channel/UCcdPMZe5RvjzTVzZs_zmmVQ");
                    return;

                case "instagram":
                    window.open("https://www.instagram.com/navidk0/");
                    return;

                case "ping":
                    term.writeln("Pong!");
                    return;

                case "pong":
                    term.writeln("Ping!");
                    return;

                case "navidk0":
                case "navid":
                case "kabir":
                    await this.typeTextLn("That's me! 😅", 0.025, 0.025);
                    await this.sleep(1);
                    return;

                case "0kdivan":
                case "divan":
                case "ribak":
                    await this.typeTextLn("🤔  !em s'tahT", 0.025, 0.025);
                    await this.sleep(1);
                    return;

                case "nk0":
                case "/nk0":
                    await this.typeTextLn("You found a secret...?!?!!", 0.05, 0.05);
                    await this.sleep(2);
                    window.open("https://soundcloud.com/navidk0/roto-baws-tress/s-jJReDBCJI1n");

                    return;

                case "":
                case null:
                case undefined:
                    return;

                default:
                    term.writeln(cmd + ": command not found");
            }
        },

        printHelpText() {
            const text = `K-OS bash, version 1.0.0.1(1)-release (x86_64-pc-linux-k0)
These shell commands are defined internally. Type 'help' to see this list.
Don't bother typing 'help name', you won't get any extra info.
There may or may not be commands that are not listed here nor documented.
[]: Optional
<>: Required

about: Get some extra info.
echo [args]: ECHO!
clear: Clears the screen.

ls: Lists all the files and directories located within the current directory.
mkdir: Create a directory.
rm: Removes a directory.

contact: Email me.

-- Alive Games --
rotoscape: A game about rotating shapes. Very cool, definitely not biased.

-- Dead Games --
spacepulse: rip.
exigence: Oof.
chronoflux: Lol.


discord: Open up a link to the Last Abyss Discord!
ngon: Get more info on N-GON Interactive!

twitter: Open up my Twitter profile.
github: Open up my GitHub profile.
soundcloud: Open up my SoundCloud profile.
youtube: Open up my YouTube channel.
instagram: Open up my Instagram profile.

ping: Pong!
pong: Ping!
`;
            term.writeln(text);
        },

        /**
         * Type text like a typewriter.
         * @param text
         * @param charPause
         * @param punctPause
         */
        async typeText(text: string, charPause: number = 0.02, punctPause?: number) {
            if (punctPause === undefined) {
                punctPause = charPause + 0.4;
            }

            for (let i = 0; i < text.length; i++) {
                const char = text.charAt(i);

                term.write(char);

                if (!char.match(/^[.,:!?]/)) {
                    await this.sleep(charPause);
                } else {
                    await this.sleep(punctPause);
                }
            }
        },

        /**
         * Type text like a typewriter.
         * @param text
         * @param charPause
         * @param punctPause
         */
        async typeTextLn(text: string, charPause: number = 0.02, punctPause?: number) {
            await this.typeText(text, charPause, punctPause);
            term.write('\n');
        },

        sleep(seconds: number) {
            if (DISABLE_STARTUP) {
                return Promise.resolve();
            }
            return new Promise(resolve => setTimeout(resolve, seconds * 1000));
        },

        onResize() {
            fitAddon.fit();
        }
    }
});
</script>

<style lang="scss">
$main-color: #030B0B;
$secondary-color: #10D2C0;
$text-color: white;

body {
  background-color: $main-color;
  margin-left: 25%;
  margin-right: 25%;
}

h1 {
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
}

h1, h2, h3, h4, h5, h6, p, a {
  color: $text-color;
}

.separator {
  margin: 50px auto;
  max-width: 890px;
}

#terminal {
  margin: 0 auto;
  max-width: 890px;
}

@media (max-width: 1300px) {
  body {
    margin-left: 10%;
    margin-right: 10%;
  }
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;

}

a:active {
  text-decoration: underline;
  transform: scale(1.1);
}

.social-button-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  width: 300px;

  list-style: none;
}

.social-button {
  margin: 15px auto;
  padding: 1rem;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }

  a {
    img {
      width: 50px;
      height: 50px;

      filter: invert(100%);
    }
  }

  transition: all .15s ease-in-out;
}

</style>
