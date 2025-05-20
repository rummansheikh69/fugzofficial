import {
    o as n,
    c as s,
    S as o,
    K as a
} from "./entry.AK8gN7-F.js";
const l = {
        __name: "UiButton",
        props: {
            style: {
                type: String,
                default: "default"
            }
        },
        setup(t) {
            return (e, r) => (n(), s("button", {
                class: a([`ui-btn ui-btn-${t.style}`])
            }, [o(e.$slots, "default")], 2))
        }
    },
    u = l;
export {
    u as _
};