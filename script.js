function openRakhi() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="scene">

            <img
                src="assets/sister.png"
                class="sister-character"
                alt="Me"
            >

            <h1>Okay... here I am 👋</h1>

            <p>I have something for you.</p>

            <button onclick="showRakhiScene()">Continue</button>

        </section>
    `;
}


function showRakhiScene() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="scene rakhi-intro">

            <img
                src="assets/brother_hand.png"
                class="brother-hand-character"
                alt="Brother offering his wrist"
            >

            <p>Come here 🎀</p>

            <button onclick="startRakhiMoment()">
                Okay
            </button>

        </section>
    `;
}

function startRakhiMoment() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="rakhi-focus-scene">

            <div class="rakhi-focus">

                <img
                    src="assets/rakhi.png"
                    alt="Rakhi"
                >

                <div class="sparkle sparkle-one">✦</div>
                <div class="sparkle sparkle-two">✦</div>

            </div>

        </section>
    `;

    setTimeout(showTyingScene, 2200);
}


function showTyingScene() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="scene rakhi-tied-scene">

            <img
                src="assets/rakhi-tying.png"
                class="rakhi-tying-image"
                alt="Rakhi being tied"
            >

            <p class="small-action">
                🎀 Rakhi tied ✓
            </p>

            <button onclick="showGift()">
                Alright, your turn 😂
            </button>

        </section>
    `;
}

function showGift() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="scene gift-give-scene">

            <img
                src="assets/brother_idle.png"
                class="brother-character"
                alt="Brother"
            >

            <img
                src="assets/gift-box.png"
                class="gift-being-given"
                alt="Gift"
            >

            <button onclick="giveGift()">Give it 🎁</button>

        </section>
    `;
}

function giveGift() {

    const gift = document.querySelector(".gift-being-given");

    gift.classList.add("gift-move");

    setTimeout(() => {
        showReceivedGift();
    }, 1200);
}

function showReceivedGift() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="scene received-gift-scene">

            <img
                src="assets/gift-box.png"
                class="gift-box"
                alt="Gift"
            >

            <h1>You got me something 👀</h1>

            <button onclick="showGiftBox()">Continue</button>

        </section>
    `;
}


function showGiftBox() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="scene penguin-gift-scene">

            <img
                src="assets/penguin.png"
                class="gift-penguin"
                alt="Penguin toy"
            >

            <h1>awwww 🥹</h1>

            <button onclick="showFinalScene()">Continue</button>

        </section>
    `;
}
function showFinalScene() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <section class="scene final-scene">

            <img
                src="assets/girl-with-penguin.png"
                class="girl-penguin-image"
                alt="Girl holding penguin"
            >

            <h1>Happy Raksha Bandhan 🎀</h1>

        </section>
    `;
}



