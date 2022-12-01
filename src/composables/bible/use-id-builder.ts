export const useIdBuilder = (data: any, fmt: string) => {
  const bookId = useBookResolver(data.bookId)
  const chapterId = parseFloat(data.chapterId)
  const id = '1'

  const _fmtr = (num: number | string, min: number) => {
    return num.toLocaleString('en-US', {
      minimumIntegerDigits: min,
      useGrouping: false,
    })
  }

  switch (fmt) {
    case 'BB': {
      const fmtId = `${id}${_fmtr(bookId, 2)}`
      return parseInt(fmtId)
    }
    case 'BBCCC': {
      const fmtId = `${id}${_fmtr(bookId, 2)}${_fmtr(chapterId, 3)}`
      return parseInt(fmtId)
    }
    case 'BBCCCVVV': {
      const { verseId } = data
      const fmtId = `${id}${_fmtr(bookId, 2)}${_fmtr(chapterId, 3)}${_fmtr(verseId, 3)}`
      return parseInt(fmtId)
    }
  }
}
