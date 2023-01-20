import bcrypt from 'bcrypt';

export const encryptPassword = async (pass: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pass, salt);
};

export const validatePassword = async (
  password: string,
  encryptedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, encryptedPassword);
};
