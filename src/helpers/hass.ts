import bcrypt from "bcryptjs";

const saltRounds = 10;

export const hashPassword = async (password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error("Hashing failed");
  }
};

export const verifyPassword = async (
  password: string,
  hash: string
): Promise<Boolean> => {
  try {
    const result = await bcrypt.compare(password, hash);
    return result;
  } catch (error) {
    throw new Error("Verification failed");
  }
};
