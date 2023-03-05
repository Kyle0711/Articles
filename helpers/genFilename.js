export const genFilename = (title) => {
    let filename = ''
    if (title.split(' ').length === 1) {
        filename = title.toLowerCase()
    } else if (title.split(' ').length === 2) {
        let titleArray = title.split(' ')
        filename = titleArray[0].toLowerCase() + titleArray[1]
    }
    return filename + '.css'
}