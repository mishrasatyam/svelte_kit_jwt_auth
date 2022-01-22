import {parse} from 'cookie';
import * as jwt from 'jsonwebtoken'

const {verify} = jwt

export async function handle({ event, resolve }) {
	const {request,locals} = event
	const cookies = parse(request.headers.get('cookie') || '');
    //verify your jwt here, pass data to session object using locals
    try{
		locals.user = cookies.jwt && verify(cookies.jwt, import.meta.env.VITE_JWT_PRIVATE_KEY);		
	}catch(err){
		locals.user=undefined
	}
    const response = await resolve(event)
	return response;
}

export function getSession({ locals }) {
	return {
		user: locals.user && {
			...locals.user
		}
	};
}
