type ClassValue = string | { [key: string]: boolean } | ClassValue[]

function classNames(...args: ClassValue[]): string {
  const classes: string[] = []

  args.forEach((arg) => {
    if (typeof arg === 'string') {
      classes.push(arg)
    } else if (Array.isArray(arg)) {
      classes.push(classNames(...arg))
    } else if (typeof arg === 'object') {
      Object.keys(arg).forEach((key) => {
        if (arg[key]) {
          classes.push(key)
        }
      })
    }
  })

  return classes.join(' ')
}
export default classNames
