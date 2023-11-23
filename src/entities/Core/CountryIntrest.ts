export default interface CountryIntrest {
  data: {
    total_interests_count: number;
    countries: {
      name: string;
      interests_count: number;
    }[];
  };
}
