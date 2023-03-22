export interface ResumeData {
    personal: {
        name: string;
        label: string;
        email: string;
        phone: string;
        url: string;
        location: {
            city: string;
            countryCode: string;
            region: string;
        };
        profiles: {
            network: string;
            username: string;
            url: string;
        }[];
    };
    education: {
        degree: string;
        field: string;
        concentration: string;
        date: string;
        gpa: string;
        university: string;
        location: string;
    }[];
    licenses: {
        name: string;
        number: string;
        date: string;
    }[];
    skills: {
        languages: string[];
        framework: string[];
        software: string[];
    };
    workExperience: {
        jobTitle: string;
        company: string;
        location: string;
        startDate: string;
        endDate: string;
        responsibilities: string[];
    }[];
    projects: {
        name: string;
        description: string;
        technologies: string[];
    };
  }
  