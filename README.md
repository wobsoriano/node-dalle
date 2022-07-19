# node-dalle

AI model drawing images for Node using [min(DALL·E)](https://github.com/kuprel/min-dalle). Requires python3.

## Installation

```bash
npm install dalle
```

<details>

<summary>Complete instructions</summary>

### **Linux**: install node, npm, node-gyp, python3, python3-dev, g++ and make

#### Install Node
```
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
sudo apt install nodejs
```

#### Install Python
```
sudo apt install python3
sudo apt install python3-dev
```

#### Install Node-gyp
```
sudo apt install make
sudo apt install g++
sudo npm install -g node-gyp
```

### **Windows**: install [NodeJS](https://nodejs.org/en/download/) and [Python](https://www.python.org/downloads/)
  
#### Install Node-gyp if missing
```
npm install --global --production windows-build-tools
npm install -g node-gyp
```

### **Mac**: install XCode from AppStore, [NodeJS](https://nodejs.org/en/download/) and [Python](https://www.python.org/downloads/)

</details>

## Usage

```js
import { generateImage } from 'dalle'
import ImageDataURI from 'image-data-uri'

async function start() {
  const dataURI = await generateImage('Nuclear explosion broccoli', { gridSize: 2 })
  ImageDataURI.outputFile(result, 'brocolli.png')
}

start()
```

<img src="https://i.imgur.com/4g1KkYk.png" />

The `generateImage` function will load the model parameters once and reuse the model to generate multiple images.


## License

[MIT](./LICENSE) License © 2022 [Robert Soriano](https://github.com/wobsoriano)
