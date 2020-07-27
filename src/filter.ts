export function getDate(date: any) {
  let dateInstance = date
  if (typeof date === 'string') {
    dateInstance = new Date(date)
    if (isNaN(dateInstance.getTime())) {
      dateInstance = new Date(date.replace(/-/g, '/')) // 兼容safari
    }
  }
  return dateInstance
}

export function formatDate(date: any, fmt?: any) {
  if (typeof date === 'string') {
    date = getDate(date)
  } else if (!date) {
    return '' // empty
  }

  const o = {
    'M+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'Q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(Y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? ((o as any)[k]) : (('00' + (o as any)[k]).substr(('' + (o as any)[k]).length)))
    }
  }
  return fmt
}
