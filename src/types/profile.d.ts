export interface ProfileResponse {
    data: Profile;
    message: string;
}

export interface Profile {
    about: string;
    city: string;
    company: string;
    company_description: string;
    company_domain: string;
    company_employee_range: string;
    company_industry: string;
    company_linkedin_url: string;
    company_logo_url: string;
    company_website: string;
    company_year_founded: number;
    connection_count: number;
    country: string;
    current_company_join_month: number;
    current_company_join_year: number;
    current_job_duration: string;
    educations: Education[];
    email: string;
    experiences: Experience[];
    first_name: string;
    follower_count: number;
    full_name: string;
    headline: string;
    hq_city: string;
    hq_country: string;
    hq_region: string;
    job_title: string;
    languages: Language[];
    last_name: string;
    linkedin_url: string;
    location: string;
    phone: string;
    profile_id: string;
    profile_image_url: string;
    public_id: string;
    redirected_url: string;
    school: string;
    state: string;
    urn: string;
}

interface Education {
    activities: string;
    date_range: string;
    degree: string;
    end_month: string;
    end_year: number;
    field_of_study: string;
    school: string;
    school_id: string;
    school_linkedin_url: string;
    school_logo_url: string;
    start_month: string;
    start_year: number;
}

interface Experience {
    company: string;
    company_id: string;
    company_linkedin_url: string;
    company_logo_url: string;
    date_range: string;
    description: string;
    duration: string;
    end_month: string | number;
    end_year: string | number;
    is_current: boolean;
    job_type: string;
    location: string;
    skills: string;
    start_month: string | number;
    start_year: number;
    title: string;
}

interface Language {
    name: string;
    proficiency: string;
} 