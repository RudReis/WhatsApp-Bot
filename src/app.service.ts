import { Injectable } from '@nestjs/common';
import { type } from 'os';
var readlineSync = require('readline-sync');
const puppeteer = require('puppeteer');

@Injectable()
export class AppService {
 async zapzipzop ()  {

      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
      const url ="https://web.whatsapp.com"
      await page.goto(url);
      //aqui coloca o nome do contato
      let vitima = readlineSync.question('Informe o nome do contato: ');
      const target = await page.waitForSelector("span[title='"+vitima+"']");
      let mensagem = readlineSync.question('Mensagem: ');
      let quantidade = readlineSync.question('Informe quantas mensagens sera enviada: ');
    
      await target.click();
    
      var input = await page.$ ("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div.fd365im1.to2l77zo.bbv8nyr4.mwp4sxku.gfz4du6o.ag5g9lrv > p");
    
      for (let i = 0; i < (quantidade); i++) {
        //Aqui colocar a mensagem que deseja enviar
        await input.type(mensagem); 
        await page.keyboard.press("Enter");
      }
      
    }
 
// return 'Hello World!';
  }

