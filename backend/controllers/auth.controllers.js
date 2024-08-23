import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";

const generateAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = await user.generateAccessToken();

    return accessToken;
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ApiError(500, "Some error occured in generate access token"));
  }
};

const signupUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json(new ApiError(400, "All fields are required"));
    }

    const usernameAlreadyTaken = await User.findOne({ username });
    if (usernameAlreadyTaken) {
      res
        .status(400)
        .json(
          new ApiError(
            400,
            "Username already taken. Please try witb another username"
          )
        );
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      res
        .status(400)
        .json(new ApiError(400, "User with this username already exists"));
    }

    if (password.length < 6) {
      res.status(400).json(new ApiError(400, "Password too short"));
    }

    const user = await User.create({ username, email, password });
    const createdUser = await User.findById(user._id).select("-password");

    res
      .status(200)
      .json(new ApiResponse(200, createdUser, "SignUp sucessfully"));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ApiError(500, "Some error occured in signup controller"));
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json(new ApiError(400, "All fields are required"));
    }

    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).json(new ApiError(404, "No user found"));
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password);
    if (!isPasswordCorrect) {
      res.status(401).json(new ApiError(401, "Incorrect password"));
    }

    const accessToken = await generateAccessToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password");

    const options = {
      httpOnly: false,
      secure: false,
      maxAge: 900000000000,
    };

    // console.log(accessToken);

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .json(new ApiResponse(200, loggedInUser, "Login sucessfull"));
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json(new ApiError(500, "Some error occured in login controller"));
  }
};

export { signupUser, loginUser };
