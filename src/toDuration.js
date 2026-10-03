/**
 * Форматирует продолжительность в читаемую строку.
 * @param {Date | number | null | undefined} value - объект Date или timestamp в мс
 * @returns {string} строка вида "1ч 5м 30с", "5м 30с", "30с" или "Нет данных"
 */
export function toDuration(value) {
    if (value == null) return 'Нет данных'

    const ms = value instanceof Date ? value.getTime() : value
    if (!Number.isFinite(ms)) return 'Нет данных'

    const totalSeconds = Math.floor(Math.abs(ms) / 1000)
    const hours = Math.floor(totalSeconds / 3600)

    // дальше считаем минуты/секунды только если часы реально есть
    if (hours > 0) {
        const minutes = Math.floor(totalSeconds / 60) % 60
        const seconds = totalSeconds % 60
        return `${hours}ч ${minutes}м ${seconds}с`
    }

    const minutes = Math.floor(totalSeconds / 60)
    if (minutes > 0) {
        const seconds = totalSeconds % 60
        return `${minutes}м ${seconds}с`
    }

    return `${totalSeconds}с`
}
