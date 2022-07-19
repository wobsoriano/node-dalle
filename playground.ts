import { generateImage } from './src'

async function run() {
  const result = await generateImage('John cena playing basketball')
  console.log(result)
}

run()
