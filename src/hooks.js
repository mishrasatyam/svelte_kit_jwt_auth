import {parse} from 'cookie';
import jsonwebtoken from 'jsonwebtoken'

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	const {request,locals} = event
	const cookies = parse(request.headers.get('cookie') || '');
    //verify your jwt here, pass data to session object using locals
    try{
		locals.user = cookies.jwt && jsonwebtoken.verify(cookies.jwt, import.meta.env.VITE_JWT_PRIVATE_KEY);		
	}catch(err){
		locals.user=undefined
	}
    const response = await resolve(event)
	return response;
}

/** @type {import('@sveltejs/kit').GetSession} */
export function getSession({ locals }) {
	return {
		user: locals.user && {
			...locals.user
		}
	};
}
