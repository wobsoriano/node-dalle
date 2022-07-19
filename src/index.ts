import path from 'path'
import nodecallspython from 'node-calls-python'

const py = nodecallspython.interpreter
const pyFile = path.join(__dirname, 'main.py')

export interface Options {
  gridSize?: number
}

export type DataURI = string

export async function generateImage(text: string, options: Options = {
  gridSize: 1,
}): Promise<DataURI> {
  const pyModule = await py.import(pyFile)
  const result = await py.call(
    pyModule,
    'generate_image',
    text,
    options.gridSize,
  )
  return result
}

export default generateImage
