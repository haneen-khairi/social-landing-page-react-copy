type VolunteerInputs = {
  name: string;
  country: number;
  email: string;
  phone_number: string;
  field_of_work: number[];
  volunteer_hours: string;
  years_of_experience: string;
  error?: string | undefined;
};

export default VolunteerInputs;
