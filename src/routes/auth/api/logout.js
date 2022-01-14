import {serialize} from 'cookie'
export async function get({url}){
    return {
        headers: {
			'set-cookie': serialize('jwt','deleted',{expires:new Date(0),path:'/',domain:url.origin}),
            location:'/auth/login'
        },
        status:302
    }
}