import { Schema } from 'mongoose';
import { Reservation } from './reservation';

export const ReservationSchema = new Schema<Reservation>(
  {
    state: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      required: true,
    },
    toName: {
      type: String,
      required: true,
    },
    isValid: { type: Boolean, default: true },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'Canchero',
      required: [true, 'an user is required to create a Reservation'],
    },
  },
  {
    timestamps: true,
  }
);

ReservationSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});
