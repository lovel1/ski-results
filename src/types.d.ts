export type RootDrawerParamList = {
    Init: undefined,
    Ongoing: {
        racersNumber: number
    },
    Results: {
        racers: Racers
    }
}

export type Racer = {
    number: number,
    finishTime: null | number
}

export type Racers = Racer[]