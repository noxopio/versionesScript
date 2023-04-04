import { getData } from './api.mjs'

export async function solution() {
  return await getData()
}

console.log(getData())