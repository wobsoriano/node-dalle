# node-dalle

AI model drawing images for Node using [min(DALL·E)](https://github.com/kuprel/min-dalle). Requires python3.

## Installation

```bash
npm install dalle
```

Sometimes you have to install prerequisites to make it work. Check below:

<details>

<summary>Linux</summary>

#### Install Python
```bash
sudo apt install python3
sudo apt install python3-dev
```

#### Install Node-gyp
```bash
sudo apt install make
sudo apt install g++
sudo npm install -g node-gyp
```

</details>

<details>
<summary>Windows</summary>

#### Install Python, Node-gyp if missing
```bash
npm install --global --production windows-build-tools
npm install -g node-gyp
```
</details>

<details>
<summary>Mac</summary>

#### Install XCode from AppStore, Python

</details>

## Usage

```js
import { generateImage } from 'dalle'
import ImageDataURI from 'image-data-uri'

async function start() {
  const dataURI = await generateImage('Nuclear explosion broccoli', { gridSize: 2 })
  ImageDataURI.outputFile(dataURI, 'brocolli.png')
}

start()
```

<img src="https://i.imgur.com/4g1KkYk.png" width="300" />

The `generateImage` function will load the model parameters once and reuse the model to generate multiple images.


## License

[MIT](./LICENSE) License © 2022 [Robert Soriano](https://github.com/wobsoriano)
