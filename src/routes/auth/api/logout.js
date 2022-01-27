import {serialize} from 'cookie'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({url}){
    console.log(url.origin)
    return {
        headers: {
			'set-cookie': serialize('jwt','deleted',{expires:new Date(0),path:'/',domain:url.origin}),
            location:'/auth/login'
        },
        status:302
    }
}