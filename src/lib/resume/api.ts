/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */

export interface WorkExperience {
	companySlug: string,
	company: string,
	jobTitle: string,
	period: string,
	current?: boolean,
	location: string,
	description: any,
}