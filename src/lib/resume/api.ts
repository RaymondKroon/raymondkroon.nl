/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */
import path from 'path';
import fs from 'fs-extra';
import grayMatter from 'gray-matter';

export interface WorkExperience {
	companySlug: string,
	company: string,
	jobTitle: string,
	timeframe: string,
	current?: boolean,
	location: string,
	description: string,
}

export const workExperienceFromFrontmatter = ({data, content}: any): WorkExperience => {
	return {
		companySlug: data.companySlug,
		company: data.company,
		jobTitle: data.jobTitle,
		timeframe: data.timeframe,
		current: data.current,
		location: data.location,
		description: content,
	}
}

const experienceDir = path.join(process.cwd(), 'data/resume/experience');

export const getWorkExperience = async (): Promise<WorkExperience[]> => {
 	const fileNames = await fs.readdir(experienceDir);
	const mdFiles = fileNames.filter((fileName: string) => fileName.endsWith('.md'));
	mdFiles.reverse();

	const items: WorkExperience[] = [];

	for (const mdFile of mdFiles) {
		const fileContent = await fs.readFile(`${experienceDir}/${mdFile}`, 'utf-8');
		const parsedData = grayMatter(fileContent);
		items.push(workExperienceFromFrontmatter(parsedData));
	}

	return items;
}