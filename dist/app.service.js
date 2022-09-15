"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
var readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');
let AppService = class AppService {
    async zapzipzop() {
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();
        const url = "https://web.whatsapp.com";
        await page.goto(url);
        let vitima = readlineSync.question('Informe o nome do contato: ');
        const target = await page.waitForSelector("span[title='" + vitima + "']");
        let mensagem = readlineSync.question('Mensagem: ');
        let quantidade = readlineSync.question('Informe quantas mensagens sera enviada: ');
        await target.click();
        var input = await page.$("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv > p");
        for (let i = 0; i < (quantidade); i++) {
            await input.type(mensagem);
            await page.keyboard.press("Enter");
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map