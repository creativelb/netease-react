import {request} from './request'

export const getBanner = function(type = 0) {
    return request({
        url: '/banner',
        method: 'get',
        params: {
            type
        }
    })
}

export const getNewSong = function(limit = 10) {
    return request({
        url: '/banner',
        method: 'get',
        params: {
            limit
        }
    })
}
