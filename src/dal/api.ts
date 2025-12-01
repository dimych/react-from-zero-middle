const apiKey = '3e5958c7-092c-49db-868c-1eccea714615'
const headers = {
    'api-key': apiKey
}

export const getTrack = (trackId: string) => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: headers
    })
        .then(res => res.json())
}

export const getTracks = () => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
        headers: headers
    })
        .then(res => res.json())
}