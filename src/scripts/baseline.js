const gen_users = _n => {
    const p = []
    for (let i=0; i < _n; i++) {
        p.push({
            _wallet: '0x' + [...Array(40).keys()].map(() => {
                return '0123456789ABCDEFabcdef'[Math.floor(Math.random() * hex.length)]
            }).join(''),
            _balance: Math.floor(Math.random() * 1000),
            _user_stats: {
                // games_played: int
                // return_ratio: float
                // active_game: Object
            }
        })
    }
    return p
}

const gen_player = () => {

}

const gen_game = (_p, _n) => {
    const players = []
    for (let i=0; i < _n; i++;
}

const __init__ = () => {
    const users = gen_users(100)
    console.log(users)
}

__init__()
//export default __init__
