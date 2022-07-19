import path from 'path'
import nodecallspython from 'node-calls-python'

const py = nodecallspython.interpreter
const pyFile = path.join(__dirname, 'main.py')

export interface Options {
  text: string
  gridSize?: number
}

export type DataURI = string

export async function generateImage(options: Options = {
  text: 'Dali painting of WALL·E',
}): Promise<DataURI> {
  const pyModule = await py.import(pyFile)
  const result = await py.call(
    pyModule,
    'generate_image',
    options.text,
    options.gridSize,
  )
  return result
}

export default generateImage
