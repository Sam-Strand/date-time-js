/**
 * Форматирует Date в строку для ClickHouse (МСК, без часового пояса)
 * @param {Date} date - объект Date
 * @returns {null | string} строка в формате 'YYYY-MM-DD HH:MM:SS'
 */
export function toDateTime(date) {
    if (!date || isNaN(date.getTime())) {
        return null
    }

    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
