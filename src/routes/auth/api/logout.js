import {serialize} from 'cookie'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({url}){
    return {
        headers: {
			'set-cookie': serialize('jwt','deleted',{expires:new Date(0),path:'/',domain:url.hostname}),
            location:'/auth/login'
        },
        status:302
    }
}