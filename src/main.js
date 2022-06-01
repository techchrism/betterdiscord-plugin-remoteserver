import {promises as fs} from 'fs';
import path from 'path';
import {nanoid} from 'nanoid';
import WebServer from './WebServer.js';

module.exports = class RemoteServer {
    async start() {
        let config = {
            host: '127.0.0.1',
            port: 26745,
            password: nanoid()
        };
        const configFileName = 'RemoteServer.config.json';
        const configPath = path.join(BdApi.Plugins.folder, configFileName);
        try {
            config = JSON.parse(await fs.readFile(configPath, 'utf-8'));
        } catch(e) {
            console.warn('Failed reading RemoteServer config, writing default config...');
            await fs.writeFile(configPath, JSON.stringify(config, null, 4), 'utf-8');
        }

        this.webServer = new WebServer(config.host, config.port, config.password);
        this.webServer.start();
    }
    stop() {
        this.webServer.stop();
    }
}

