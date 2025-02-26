import { api } from "../../lib/api.js";
import type { ProfileResponse } from "../../types/profile.js";

export const getProfile = async (name: string): Promise<ProfileResponse> => {
  const params = {
    linkedin_url: `https://www.linkedin.com/in/${name}`,
    include_skills: "false",
    include_certifications: "false",
    include_publications: "false",
    include_honors: "false",
    include_volunteers: "false",
    include_projects: "false",
    include_patents: "false",
    include_courses: "false",
    include_organizations: "false"
  };

  const profile = await api<ProfileResponse>(
    'get-linkedin-profile',
    { params }
  );

  console.debug(
    `Successfully fetched profile with name ${profile.data.first_name}`,
  );
  return profile;
};