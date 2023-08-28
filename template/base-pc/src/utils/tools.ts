export function getQuery (path = location.href) {
  const queryObj: { [key: string]: string } = {}
  new URL(path).searchParams.forEach((item, key) => {
    queryObj[key] = item
  })
  return queryObj
}

export function addQuery (link: string, obj: object) {
  let query = ''
  const queryObj = { ...getQuery(link), ...obj }
  Object.keys(queryObj).forEach(item => {
    query += `&${item}=${queryObj[item]}`
  })
  return `${link.replace(new URL(link).search, '')}${query.replace('&', '?')}`
}
