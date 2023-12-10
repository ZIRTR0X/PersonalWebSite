export class Experience {
  public readonly languages: string[];
  public readonly startDate: number;
  public readonly endDate: number;
  public readonly company: string;
  public readonly position: string;
  public readonly description: string;

  constructor(
    languages: string[],
    startDate: number,
    endDate: number,
    company: string,
    position: string,
    description: string
  ) {
    this.languages = languages;
    this.startDate = startDate;
    this.endDate = endDate;
    this.company = company;
    this.position = position;
    this.description = description;
  }
}
