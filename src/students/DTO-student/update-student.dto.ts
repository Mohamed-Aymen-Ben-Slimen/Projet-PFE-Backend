export class UpdateStudentDto {
  firstname: string;
  lastname: string;
  email: string;
  nationality: string;
  phoneNumber: string;
  birthDate: Date;
  birthPlace: string;
  firstName: string;
  lastName: string;
  username: string;
  address: {
    street: string;
    city: string;
    country: string;
    postalCode: number;
  };
}
