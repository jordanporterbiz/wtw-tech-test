import _ from 'lodash'

export const toCamelCase = <T>(obj: T | any): T | any =>
  _.transform(obj, (acc: any, value: any, key: any, target: any) => {
    const snakeKey = _.isArray(target) ? key : _.camelCase(key.toString())
    acc[snakeKey] = _.isObject(value) ? toCamelCase(value) : value
  })
