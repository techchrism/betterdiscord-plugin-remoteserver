import {promises as fs} from 'fs';
import {nanoid} from 'nanoid';

module.exports = class RemoteServer {
    async start() {
        let config = {
            ip: '127.0.0.1',
            port: 26745,
            password: nanoid()
        };
        const configFileName = 'RemoteServer.config.json';
        try {
            config = JSON.parse(await fs.readFile(configFileName, 'utf-8'));
        } catch(e) {
            console.warn('Failed reading RemoteServer config, writing default config...');
            await fs.writeFile(configFileName, JSON.stringify(config), 'utf-8');
        }


    }
    stop() {

    }
}

