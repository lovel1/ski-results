export const formatTime = (milliseconds: number) => {
    if (!milliseconds) return null

    const times = [
        milliseconds / 60 / 60 / 1000, 
        milliseconds / 60 / 1000 % 60,
        milliseconds / 1000 % 60,
        milliseconds % 100
    ]

    const formattedTime = times.map(unit => {
        const timeUnit = Math.floor(unit).toString()
        return timeUnit.length == 1 ? '0' + unit : unit
    }).join(':')

    return formattedTime
}