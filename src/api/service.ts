import fetchJsonp from "fetch-jsonp"

interface Option {
  field?: string
  start?: string
  count?: string
}

export const apikey = '0df993c66c0c636e29ecbb5344252a4a'
const baseApiUrl = 'https://api.douban.com/v2/book'

const getSearchApi = (value?: string, tag?: string, field?: string, start?: string, count?: string) => {
  const valueStr = `${value ? '&q=' + value : ''}`
  const tagStr = `${tag ? '&tag=' + tag : ''}`
  const fieldStr = `${field ? '&field=' + field : ''}`
  const startStr = `${start ? '&start=' + start : ''}`
  const countStr = `${count ? '&count=' + count : ''}`
  return `${baseApiUrl}/search?apikey=${apikey}${valueStr}${tagStr}${fieldStr}${startStr}${countStr}`
}
const getIsbnQueryApi = (isbn: string) => {
  return `${baseApiUrl}/isbn/${isbn}?apikey=${apikey}`
}

export const searchValueFetch = async (value: string, option: Option) => {
  const {field, start, count = '10'} = option
  const url = getSearchApi(value, undefined, field, start, count)
  return await fetchJsonp(url).then((res) => res.json())
}

export const searchTagFetch = async (tag: string, option: Option) => {
  const {field, start, count = '10'} = option
  const url = getSearchApi(undefined, tag, field, start, count)
  return await fetchJsonp(url).then((res) => res.json())
}
export const queryisbnFetch = async (isbn: string) => {
  return await fetchJsonp(getIsbnQueryApi(isbn)).then((res) => res.json())
}
