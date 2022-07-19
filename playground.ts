import ImageDataURI from 'image-data-uri'
import { generateImage } from './src'

async function run() {
  const result = await generateImage('Dali painting of WALL·E', {
    gridSize: 2,
  })
  await ImageDataURI.outputFile(result, 'test.png')
}

run()
