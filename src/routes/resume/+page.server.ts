import { getWorkExperience } from '$lib/resume/api';

export async function load() {
	const workExperience = await getWorkExperience();
	return {
		experience: workExperience
	};
}