import { model, Schema } from 'mongoose'
import { TUser } from './user.interface'
import config from '../../config'
import bcrypt from 'bcrypt'

const mUserSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [1, 'Name cannot be empty'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: {
        values: ['admin', 'user'],
        message: `{VALUE} is not a valid role`,
      },
      default: 'user',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: function (_doc, ret) {
        delete ret.password
        delete ret.__v
      },
    },
  },
)

mUserSchema.pre('save', async function (next) {
  const user = this
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  )
  next()
})

export const MUser = model<TUser>('users', mUserSchema)