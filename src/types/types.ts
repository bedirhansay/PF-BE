export type SkillsDTO = {
  title: string;
  items: string[];
  bgColor: string;
  image: string;
  itemColor: string;
};

export type ProjectDTO = {
  company: string;
  projectName: string;
  url?: string;
  time: number;
  area: string;
  tags?: string[];
  description?: string;
  goals?: string[];
  scope?: string;
  requirements?: string[];
  tasks?: string[];
};

export type CategoryDTO = {
  name: string;
  image: string;
};

export type ExperienceDTO = {
  title: string;
  location: string;
  position: string;
  description: string;
  url: string;
  date: string;
  skills: string[];
};

export type BlogDTO = {
  title: string;
  slug?: string;
  description?: string;
  image?: string;
  viewCount?: number;
  category?: CategoryDTO;
};
