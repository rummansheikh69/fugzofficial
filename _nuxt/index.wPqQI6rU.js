import {
    o as _,
    c as a,
    a as s,
    q as m,
    b as o,
    w as e,
    d as l
} from "./entry.AK8gN7-F.js";
import {
    _ as d
} from "./_plugin-vue_export-helper.x3n3nnut.js";
import {
    _ as p
} from "./UiButton.oJyWWd_8.js";
import {
    _ as h
} from "./nuxt-link.rykRXo1G.js";
const g = "" + globalThis.__publicAssetsURL("images/hero-headline.svg"),
    b = "" + globalThis.__publicAssetsURL("images/hero.svg"),
    w = {
        class: "start__wrapper"
    },
    v = s("img", {
        class: "start__hero",
        src: g
    }, null, -1),
    y = s("img", {
        class: "start__landscape",
        src: b
    }, null, -1),
    x = s("div", {
        class: "start__text"
    }, [s("p", null, "Cute? Yes. Unhinged? Also yes."), s("p", null, "Meet the Fugz")], -1),
    $ = [v, y, x],
    T = {
        __name: "IndexStart",
        setup(n) {
            return (c, t) => (_(), a("div", w, $))
        }
    },
    k = T,
    L = "" + globalThis.__publicAssetsURL("images/follow-x.svg"),
    U = "" + globalThis.__publicAssetsURL("images/follow-instagram.svg"),
    z = "" + globalThis.__publicAssetsURL("images/follow-tiktok.svg"),
    A = "" + globalThis.__publicAssetsURL("images/follow-youtube.svg"),
    I = "" + globalThis.__publicAssetsURL("images/follow-discord.svg"),
    R = {},
    E = {
        class: "follow"
    },
    S = m('<h2 class="follow__headline">Fugz Follow Fugz</h2><p class="follow__socials-text">Join the family, join the fun! Stay up to date with all of our official announcements, updates and most importantly, our animations, to keep you smiling.</p><div class="follow__socials"><a class="follow__socials-item follow__socials-item--x" href="https://twitter.com/FugzOfficial" target="_blank"><div class="follow__socials-join">Join the family on</div><div class="follow__socials-plattform">X</div><img src="' + L + '" class="follow__socials-img"></a><a class="follow__socials-item follow__socials-item--ins" href="https://www.instagram.com/fugzofficial/" target="_blank"><div class="follow__socials-join">Join the family on</div><div class="follow__socials-plattform">Instagram</div><img src="' + U + '" class="follow__socials-img"></a><a class="follow__socials-item follow__socials-item--tt" href="https://www.tiktok.com/@fugzofficial" target="_blank"><div class="follow__socials-join">Join the family on</div><div class="follow__socials-plattform">TikTok</div><img src="' + z + '" class="follow__socials-img"></a><a class="follow__socials-item follow__socials-item--yt" href="https://www.youtube.com/@FugzOfficial" target="_blank"><div class="follow__socials-join">Join the family on</div><div class="follow__socials-plattform">YouTube</div><img src="' + A + '" class="follow__socials-img"></a><a class="follow__socials-item follow__socials-item--dc" href="http://play.fugzofficial.com/" target="_blank"><div class="follow__socials-join">Join the family on</div><div class="follow__socials-plattform">Discord</div><img src="' + I + '" class="follow__socials-img"></a></div>', 3),
    F = [S];

function N(n, c) {
    return _(), a("div", E, F)
}
const C = d(R, [
        ["render", N]
    ]),
    O = "" + globalThis.__publicAssetsURL("images/personalities/teaser-reveal.png"),
    P = "" + globalThis.__publicAssetsURL("images/personalities-anim.gif"),
    u = "" + globalThis.__publicAssetsURL("images/comingsoon-flat.png"),
    V = {},
    j = {
        class: "personalities-teaser"
    },
    B = {
        class: "personalities-teaser__reveal"
    },
    J = {
        class: "personalities-teaser__reveal--left"
    },
    X = m('<h2 class="personalities-teaser__headline">Fugz Personalities</h2><p class="personalities-teaser__subline">1 big family.</p><p class="personalities-teaser__subline">12 unique personality types.</p><p class="personalities-teaser__subline">Endless chaos.</p><div class="personalities-teaser__fugz"><img loading="lazy" src="' + O + '"></div>', 5),
    W = {
        class: "personalities-teaser__reveal--right"
    },
    Y = s("img", {
        loading: "lazy",
        src: P
    }, null, -1),
    q = {
        class: "personalities-teaser__collection"
    },
    D = {
        class: "personalities-teaser__collection-text"
    },
    M = s("h2", null, "Fugz Collection", -1),
    H = s("span", null, "XXXX Digital Collectibles.", -1),
    K = s("span", null, "200+ Traits.", -1),
    G = s("span", null, "How many will you collect?", -1),
    Q = {
        class: "personalities-teaser__desktop-layer"
    },
    Z = s("img", {
        loading: "lazy",
        class: "personalities-teaser__desktop-layer-img",
        src: u
    }, null, -1),
    ss = s("div", {
        class: "personalities-teaser__collection-gallery"
    }, null, -1),
    os = {
        class: "personalities-teaser__mobile-layer"
    },
    ts = s("img", {
        loading: "lazy",
        class: "personalities-teaser__mobile-layer-img",
        src: u
    }, null, -1);

function es(n, c) {
    const t = p,
        i = h;
    return _(), a("div", j, [s("div", B, [s("div", J, [X, o(i, {
        to: "/personalities"
    }, {
        default: e(() => [o(t, {
            class: "personalities-teaser__button personalities-teaser__button-xl",
            style: "accent"
        }, {
            default: e(() => [l(" VIEW PERSONALITIES")]),
            _: 1
        })]),
        _: 1
    })]), s("div", W, [Y, o(i, {
        to: "/personalities"
    }, {
        default: e(() => [o(t, {
            class: "personalities-teaser__button personalities-teaser__button-xs",
            style: "accent"
        }, {
            default: e(() => [l(" VIEW PERSONALITIES")]),
            _: 1
        })]),
        _: 1
    })])]), s("div", q, [s("div", D, [M, H, K, G, s("div", Q, [o(t, {
        class: "personalities-teaser__desktop-layer-btn",
        disabled: "",
        style: "accent"
    }, {
        default: e(() => [l("VIEW COLLECTION ")]),
        _: 1
    }), Z])]), ss, s("div", os, [o(t, {
        class: "personalities-teaser__mobile-layer-btn",
        disabled: "",
        style: "accent"
    }, {
        default: e(() => [l("VIEW COLLECTION ")]),
        _: 1
    }), ts])])])
}
const ls = d(V, [
        ["render", es]
    ]),
    is = "" + globalThis.__publicAssetsURL("images/team.png"),
    _s = "" + globalThis.__publicAssetsURL("images/team-mobile.png"),
    as = {
        class: "shorts"
    },
    ns = s("h2", {
        class: "shorts__headline"
    }, "Animations? Fug Yeah!", -1),
    cs = s("p", {
        class: "shorts__subline"
    }, "Keep up with cross-platform cuteness, so you can watch from your favourite app.", -1),
    rs = {
        key: 0,
        class: "shorts__coming-soon"
    },
    ds = s("span", null, [l("Update "), s("br"), l(" Coming soon!")], -1),
    ms = [ds],
    ps = s("img", {
        class: "shorts__team hidden md:block",
        loading: "lazy",
        src: is
    }, null, -1),
    hs = s("img", {
        class: "shorts__team md:hidden",
        loading: "lazy",
        src: _s
    }, null, -1),
    us = s("h2", {
        class: "shorts__headline mt-10 !mb-8"
    }, "Meet the Team", -1),
    fs = {
        __name: "IndexShorts",
        setup(n) {
            return (c, t) => {
                const i = p,
                    r = h;
                return _(), a("div", as, [ns, cs, (_(), a("div", rs, ms)), ps, hs, us, o(r, {
                    to: "/about"
                }, {
                    default: e(() => [o(i, {
                        class: "shorts__button",
                        style: "accent"
                    }, {
                        default: e(() => [l("ABOUT US")]),
                        _: 1
                    })]),
                    _: 1
                })])
            }
        }
    },
    gs = fs,
    bs = {},
    ws = {
        class: "index"
    },
    vs = {
        class: "index__start"
    },
    ys = {
        class: "index__follow"
    },
    xs = {
        class: "index__personalities"
    },
    $s = {
        class: "index__mission"
    };

function Ts(n, c) {
    const t = k,
        i = C,
        r = ls,
        f = gs;
    return _(), a("div", ws, [s("section", vs, [o(t)]), s("section", ys, [o(i)]), s("section", xs, [o(r)]), s("section", $s, [o(f)])])
}
const As = d(bs, [
    ["render", Ts]
]);
export {
    As as
    default
};