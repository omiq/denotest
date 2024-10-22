// deno run --allow-all --unstable index.ts




import { WebUI } from "https://deno.land/x/webui/mod.ts";

const win = new WebUI();
win.show('<html><head><title>Deno World</title><script src="webui.js"></script></head><body> Hello World from Deno! </html>');
await WebUI.wait();
