import {
    _ as O
} from "./nuxt-link.rykRXo1G.js";
import {
    _ as W
} from "./UiButton.oJyWWd_8.js";
import {
    L as B,
    g as P,
    o as w,
    c as x,
    a as s,
    b as a,
    w as r,
    K as b,
    u as f,
    d as h,
    F as G,
    _ as V,
    q as F,
    M as ss,
    N as ts,
    r as L,
    O as I,
    P as A,
    Q as M,
    R as H,
    T as D,
    H as es,
    S as os
} from "./entry.AK8gN7-F.js";
import {
    _ as is
} from "./_plugin-vue_export-helper.x3n3nnut.js";
const S = "" + globalThis.__publicAssetsURL("layout/youtube.svg"),
    T = "" + globalThis.__publicAssetsURL("layout/instagram.svg"),
    R = "" + globalThis.__publicAssetsURL("layout/tiktok.svg"),
    q = "" + globalThis.__publicAssetsURL("layout/close-icon.svg"),
    k = "" + globalThis.__publicAssetsURL("layout/mobile-menu-arrow-right.svg"),
    J = "" + globalThis.__publicAssetsURL("layout/user-profile.svg"),
    K = "" + globalThis.__publicAssetsURL("layout/mobile-header-coming-soon.png"),
    C = "" + globalThis.__publicAssetsURL("layout/x-com.svg"),
    E = "" + globalThis.__publicAssetsURL("layout/discord.svg"),
    ls = {
        class: "mobile__menu-head"
    },
    as = s("img", {
        src: V
    }, null, -1),
    ns = s("img", {
        width: "20",
        height: "20",
        src: q
    }, null, -1),
    cs = {
        class: "mobile__menu-links"
    },
    rs = s("span", null, "Home", -1),
    _s = s("img", {
        src: k
    }, null, -1),
    ds = s("span", null, "Personalities", -1),
    ms = s("img", {
        src: k
    }, null, -1),
    us = s("span", null, [h("Collectibles "), s("span", {
        class: "soon-badge"
    }, "Soon!")], -1),
    fs = s("img", {
        src: k
    }, null, -1),
    gs = s("span", null, "About Us", -1),
    hs = s("img", {
        src: k
    }, null, -1),
    ps = {
        class: "mobile__menu-sign-in"
    },
    vs = s("div", {
        class: "mobile__menu-sign-in-pfp"
    }, [s("img", {
        src: J
    })], -1),
    bs = s("div", {
        class: "absolute w-full top-0 left-0"
    }, [s("img", {
        class: "mx-auto mt-16",
        src: K
    })], -1),
    ks = F('<div class="mobile__menu-mobile-socials"><div class="mobile__menu-mobile-socials-links"><a href="https://giphy.com/channel/FugzOfficial" target="_blank">Giphy</a><a href="https://tenor.com/users/fugzofficial" target="_blank">Tenor</a><a href="https://memedepot.com/d/fugzofficial" target="_blank">MemeDepot</a></div><div class="mobile__menu-mobile-socials-items"><a href="https://twitter.com/FugzOfficial" target="_blank"><img src="' + C + '"></a><a href="https://www.instagram.com/fugzofficial/" target="_blank"><img src="' + T + '"></a><a href="http://play.fugzofficial.com/" target="_blank"><img src="' + E + '"></a><a href="https://www.tiktok.com/@fugzofficial" target="_blank"><img src="' + R + '"></a><a href="https://www.youtube.com/@FugzOfficial" target="_blank"><img src="' + S + '"></a></div></div>', 1),
    ys = {
        __name: "MobileHeader",
        emits: ["close"],
        setup(o, {
            emit: i
        }) {
            const e = B(),
                t = i;
            return P(() => e.path, u => t("close")), (u, n) => {
                const d = W,
                    c = O;
                return w(), x(G, null, [s("div", ls, [as, a(d, {
                    onClick: n[0] || (n[0] = v => t("close")),
                    class: "mobile__menu-close",
                    style: "default"
                }, {
                    default: r(() => [ns]),
                    _: 1
                })]), s("div", cs, [a(c, {
                    to: "/",
                    class: b([{
                        "active-route": f(e).name === "index"
                    }, "mobile__menu-links-item"])
                }, {
                    default: r(() => [rs, _s]),
                    _: 1
                }, 8, ["class"]), a(c, {
                    to: "/personalities",
                    class: b([{
                        "active-route": f(e).name === "personalities"
                    }, "mobile__menu-links-item"])
                }, {
                    default: r(() => [ds, ms]),
                    _: 1
                }, 8, ["class"]), a(c, {
                    to: "#",
                    class: b([{
                        "active-route": f(e).name === "collectibles"
                    }, "mobile__menu-links-item"])
                }, {
                    default: r(() => [us, fs]),
                    _: 1
                }, 8, ["class"]), a(c, {
                    to: "/about",
                    class: b([{
                        "active-route": f(e).name === "about"
                    }, "mobile__menu-links-item"])
                }, {
                    default: r(() => [gs, hs]),
                    _: 1
                }, 8, ["class"])]), s("div", ps, [vs, a(d, {
                    class: "mobile__menu-sign-in-button",
                    style: "accent"
                }, {
                    default: r(() => [h("SIGN IN")]),
                    _: 1
                }), bs]), ks], 64)
            }
        }
    },
    ws = ys,
    $s = "" + globalThis.__publicAssetsURL("layout/desktop-header-logo.svg"),
    p = "" + globalThis.__publicAssetsURL("layout/desktop-header-line-fug.svg"),
    zs = {
        class: "desktop__left"
    },
    xs = {
        class: "desktop__sign-in"
    },
    Fs = s("div", {
        class: "desktop__sign-in-pfp"
    }, [s("img", {
        src: J
    })], -1),
    As = s("div", {
        class: "absolute w-full top-0 left-0"
    }, [s("img", {
        class: "mx-auto mt-16",
        src: K
    })], -1),
    Ls = s("img", {
        class: "desktop__logo",
        src: $s
    }, null, -1),
    Us = {
        class: "desktop__right"
    },
    Os = {
        class: "desktop__links"
    },
    Ss = s("span", null, "Home", -1),
    Ts = s("img", {
        src: k
    }, null, -1),
    Rs = s("span", null, "Personalities", -1),
    Cs = s("img", {
        src: k
    }, null, -1),
    Es = s("span", null, [h("Collectibles "), s("span", {
        class: "soon-badge"
    }, "Soon!")], -1),
    Ns = s("img", {
        src: k
    }, null, -1),
    Ws = s("span", null, "About Us", -1),
    Ps = s("img", {
        src: k
    }, null, -1),
    Is = F('<div class="desktop__socials"><div class="desktop__socials-links"><a href="https://giphy.com/channel/FugzOfficial" target="_blank">Giphy</a><a href="https://tenor.com/users/fugzofficial" target="_blank">Tenor</a><a href="https://memedepot.com/d/fugzofficial" target="_blank">MemeDepot</a></div><div class="desktop__socials-items"><a href="https://twitter.com/FugzOfficial" target="_blank"><img src="' + C + '"></a><a href="https://www.instagram.com/fugzofficial/" target="_blank"><img src="' + T + '"></a><a href="http://play.fugzofficial.com/" target="_blank"><img src="' + E + '"></a><a href="https://www.tiktok.com/@fugzofficial" target="_blank"><img src="' + R + '"></a><a href="https://www.youtube.com/@FugzOfficial" target="_blank"><img src="' + S + '"></a></div></div>', 1),
    Ms = F('<div class="desktop__line"><div class="scrolling-text"><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div><div class="ml-2.5 flex items-center"><div class="scrolling-text-detail">Welcome to the Fugz Family!</div><img class="mr-5" src="' + p + '"></div></div></div>', 1),
    Hs = {
        __name: "DesktopHeader",
        emits: ["close"],
        setup(o, {
            emit: i
        }) {
            const e = B(),
                t = i;
            return P(() => e.path, u => t("close")), (u, n) => {
                const d = W,
                    c = O;
                return w(), x(G, null, [s("div", zs, [s("div", xs, [Fs, a(d, {
                    class: "desktop__sign-in-button",
                    style: "accent"
                }, {
                    default: r(() => [h("SIGN IN")]),
                    _: 1
                }), As]), Ls]), s("div", Us, [s("div", Os, [a(c, {
                    to: "/",
                    class: b([{
                        "active-route": f(e).name === "index"
                    }, "desktop__links-item !mt-0"])
                }, {
                    default: r(() => [Ss, Ts]),
                    _: 1
                }, 8, ["class"]), a(c, {
                    to: "/personalities",
                    class: b([{
                        "active-route": f(e).name === "personalities"
                    }, "desktop__links-item"])
                }, {
                    default: r(() => [Rs, Cs]),
                    _: 1
                }, 8, ["class"]), a(c, {
                    to: "#",
                    class: b([{
                        "active-route": f(e).name === "collectibles"
                    }, "desktop__links-item"])
                }, {
                    default: r(() => [Es, Ns]),
                    _: 1
                }, 8, ["class"]), a(c, {
                    to: "/about",
                    class: b([{
                        "active-route": f(e).name === "about"
                    }, "desktop__links-item"])
                }, {
                    default: r(() => [Ws, Ps]),
                    _: 1
                }, 8, ["class"])]), Is]), Ms], 64)
            }
        }
    },
    Ds = Hs;

function js(o) {
    return ss() ? (ts(o), !0) : !1
}

function Q(o) {
    return typeof o == "function" ? o() : f(o)
}
const X = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Bs = Object.prototype.toString,
    Gs = o => Bs.call(o) === "[object Object]",
    U = () => {},
    Vs = qs();

function qs() {
    var o, i;
    return X && ((o = window == null ? void 0 : window.navigator) == null ? void 0 : o.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((i = window == null ? void 0 : window.navigator) == null ? void 0 : i.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent))
}

function z(o) {
    var i;
    const e = Q(o);
    return (i = e == null ? void 0 : e.$el) != null ? i : e
}
const Y = X ? window : void 0;

function N(...o) {
    let i, e, t, u;
    if (typeof o[0] == "string" || Array.isArray(o[0]) ? ([e, t, u] = o, i = Y) : [i, e, t, u] = o, !i) return U;
    Array.isArray(e) || (e = [e]), Array.isArray(t) || (t = [t]);
    const n = [],
        d = () => {
            n.forEach(m => m()), n.length = 0
        },
        c = (m, y, l, _) => (m.addEventListener(y, l, _), () => m.removeEventListener(y, l, _)),
        v = P(() => [z(i), Q(u)], ([m, y]) => {
            if (d(), !m) return;
            const l = Gs(y) ? { ...y
            } : y;
            n.push(...e.flatMap(_ => t.map(g => c(m, _, g, l))))
        }, {
            immediate: !0,
            flush: "post"
        }),
        $ = () => {
            v(), d()
        };
    return js($), $
}
let j = !1;

function Js(o, i, e = {}) {
    const {
        window: t = Y,
        ignore: u = [],
        capture: n = !0,
        detectIframe: d = !1
    } = e;
    if (!t) return U;
    Vs && !j && (j = !0, Array.from(t.document.body.children).forEach(l => l.addEventListener("click", U)), t.document.documentElement.addEventListener("click", U));
    let c = !0;
    const v = l => u.some(_ => {
            if (typeof _ == "string") return Array.from(t.document.querySelectorAll(_)).some(g => g === l.target || l.composedPath().includes(g)); {
                const g = z(_);
                return g && (l.target === g || l.composedPath().includes(g))
            }
        }),
        m = [N(t, "click", l => {
            const _ = z(o);
            if (!(!_ || _ === l.target || l.composedPath().includes(_))) {
                if (l.detail === 0 && (c = !v(l)), !c) {
                    c = !0;
                    return
                }
                i(l)
            }
        }, {
            passive: !0,
            capture: n
        }), N(t, "pointerdown", l => {
            const _ = z(o);
            c = !v(l) && !!(_ && !l.composedPath().includes(_))
        }, {
            passive: !0
        }), d && N(t, "blur", l => {
            setTimeout(() => {
                var _;
                const g = z(o);
                ((_ = t.document.activeElement) == null ? void 0 : _.tagName) === "IFRAME" && !(g != null && g.contains(t.document.activeElement)) && i(l)
            }, 0)
        })].filter(Boolean);
    return () => m.forEach(l => l())
}
const Ks = {
        class: "header"
    },
    Qs = {
        class: "header__logo"
    },
    Xs = s("img", {
        src: V
    }, null, -1),
    Ys = {
        class: "header__menu"
    },
    Zs = {
        class: "header__menu-socials"
    },
    st = s("a", {
        href: "#",
        class: "header__menu-socials-item"
    }, [h("Collectibles "), s("div", {
        class: "soon-badge"
    }, "Soon!")], -1),
    tt = s("img", {
        width: "18",
        height: "18",
        src: q
    }, null, -1),
    et = {
        __name: "UiHeader",
        setup(o) {
            const i = L(null),
                e = L(null);
            Js(i, () => {
                t.value = !1
            }, {
                ignore: [e]
            });
            let t = L(!1);
            return (u, n) => {
                const d = O,
                    c = W,
                    v = ws,
                    $ = Ds;
                return w(), x("div", Ks, [s("div", Qs, [a(d, {
                    to: "/"
                }, {
                    default: r(() => [Xs]),
                    _: 1
                })]), s("div", Ys, [s("div", Zs, [a(d, {
                    to: "/personalities",
                    class: "header__menu-socials-item"
                }, {
                    default: r(() => [h("Personalities")]),
                    _: 1
                }), st, a(d, {
                    to: "/about",
                    class: "header__menu-socials-item"
                }, {
                    default: r(() => [h("About Us")]),
                    _: 1
                })]), f(t) ? (w(), I(c, {
                    key: 1,
                    onClick: n[1] || (n[1] = m => A(t) ? t.value = !1 : t = !1),
                    class: "header__menu-trigger--close",
                    style: "default"
                }, {
                    default: r(() => [tt]),
                    _: 1
                })) : (w(), I(c, {
                    key: 0,
                    onClick: n[0] || (n[0] = m => A(t) ? t.value = !0 : t = !0),
                    class: "header__menu-trigger",
                    style: "default"
                }, {
                    default: r(() => [h(" Menu ")]),
                    _: 1
                })), a(D, {
                    name: "slide"
                }, {
                    default: r(() => [M(s("div", {
                        class: "header__menu-mobile",
                        ref_key: "mobilemenu",
                        ref: e
                    }, [a(v, {
                        onClose: n[2] || (n[2] = m => A(t) ? t.value = !1 : t = !1)
                    })], 512), [
                        [H, f(t)]
                    ])]),
                    _: 1
                }), a(D, {
                    name: "fade"
                }, {
                    default: r(() => [M(s("div", {
                        class: "header__menu-desktop",
                        ref_key: "desktopmenu",
                        ref: i
                    }, [a($, {
                        onClose: n[3] || (n[3] = m => A(t) ? t.value = !1 : t = !1)
                    })], 512), [
                        [H, f(t)]
                    ])]),
                    _: 1
                })])])
            }
        }
    },
    ot = et,
    it = "" + globalThis.__publicAssetsURL("images/footer/footerscene-lg.svg"),
    Z = "" + globalThis.__publicAssetsURL("images/footer/footerlogo-lg.svg"),
    lt = {},
    at = {
        class: "footer"
    },
    nt = s("img", {
        class: "footer__image-scene",
        loading: "lazy",
        src: it
    }, null, -1),
    ct = s("img", {
        class: "footer__image-logo lg:hidden",
        loading: "lazy",
        src: Z
    }, null, -1),
    rt = s("div", {
        class: "footer__copyright lg:hidden"
    }, " © FugzOfficial 2025. ", -1),
    _t = {
        class: "footer__links"
    },
    dt = s("div", {
        class: "footer__links-block min-w-[184px] !hidden lg:!flex lg:flex-col"
    }, [s("img", {
        class: "footer__image-logo",
        loading: "lazy",
        src: Z
    }), s("div", {
        class: "footer__copyright"
    }, " © FugzOfficial 2025. ")], -1),
    mt = {
        class: "w-full"
    },
    ut = {
        class: "flex justify-between lg:justify-normal"
    },
    ft = {
        class: "footer__links-block"
    },
    gt = s("div", {
        class: "soon-badge"
    }, "Soon!", -1),
    ht = s("div", {
        class: "footer__links-block"
    }, [s("a", {
        href: "https://giphy.com/channel/FugzOfficial",
        target: "_blank"
    }, "Giphy"), s("a", {
        href: "https://tenor.com/users/fugzofficial",
        target: "_blank"
    }, "Tenor"), s("a", {
        href: "https://memedepot.com/d/fugzofficial",
        target: "_blank"
    }, "MemeDepot")], -1),
    pt = F('<div class="items-center hidden lg:flex lg:justify-between"><div class="footer__socials-headline mr-5">Join the fun!</div><a href="https://twitter.com/FugzOfficial" target="_blank"><img src="' + C + '" class="footer__socials-item"></a><a href="https://www.instagram.com/fugzofficial/" target="_blank"><img loading="lazy" src="' + T + '" class="footer__socials-item"></a><a href="http://play.fugzofficial.com/" target="_blank"><img loading="lazy" src="' + E + '" class="footer__socials-item"></a><a href="https://www.tiktok.com/@fugzofficial" target="_blank"><img loading="lazy" src="' + R + '" class="footer__socials-item"></a><a href="https://www.youtube.com/@FugzOfficial" target="_blank"><img loading="lazy" src="' + S + '" class="footer__socials-item"></a></div>', 1),
    vt = F('<div class="footer__socials lg:hidden"><div class="footer__socials-headline">Join the fun!</div><div class="flex justify-center"><a href="https://twitter.com/FugzOfficial" target="_blank"><img loading="lazy" src="' + C + '" class="footer__socials-item"></a><a href="https://www.instagram.com/fugzofficial/" target="_blank"><img loading="lazy" src="' + T + '" class="footer__socials-item"></a><a href="http://play.fugzofficial.com/" target="_blank"><img loading="lazy" src="' + E + '" class="footer__socials-item"></a><a href="https://www.tiktok.com/@fugzofficial" target="_blank"><img loading="lazy" src="' + R + '" class="footer__socials-item"></a><a href="https://www.youtube.com/@FugzOfficial" target="_blank"><img loading="lazy" src="' + S + '" class="footer__socials-item"></a></div></div>', 1);

function bt(o, i) {
    const e = O;
    return w(), x("div", at, [nt, ct, rt, s("div", _t, [dt, s("div", mt, [s("div", ut, [s("div", ft, [a(e, {
        to: "/personalities"
    }, {
        default: r(() => [h("Personalities")]),
        _: 1
    }), a(e, {
        to: "#",
        class: "flex"
    }, {
        default: r(() => [h("Collectibles "), gt]),
        _: 1
    }), a(e, {
        to: "/about"
    }, {
        default: r(() => [h("About Us")]),
        _: 1
    })]), ht]), pt])]), vt])
}
const kt = is(lt, [
        ["render", bt]
    ]),
    yt = "" + globalThis.__publicAssetsURL("images/music/musichiro.png"),
    wt = {
        class: "relative"
    },
    $t = {
        class: "hiro__music"
    },
    zt = s("img", {
        class: "hiro__music-character",
        src: yt
    }, null, -1),
    xt = ["src"],
    Ot = {
        __name: "default",
        setup(o) {
            const i = L(!1);
            let e = null;

            function t() {
                e && (i.value = !i.value, i.value ? e.play() : e.pause())
            }
            return es(() => {
                e = new Audio("/INEEDAHIRO.mp3")
            }), (u, n) => {
                const d = ot,
                    c = kt;
                return w(), x("div", wt, [a(d), os(u.$slots, "default"), s("div", $t, [zt, s("img", {
                    onClick: n[0] || (n[0] = v => t()),
                    src: `/images/music/${i.value?"pause.svg":"play.svg"}`,
                    class: "h-[30px] cursor-pointer"
                }, null, 8, xt)]), a(c)])
            }
        }
    };
export {
    Ot as
    default
};