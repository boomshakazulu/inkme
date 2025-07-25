import { useState } from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_BOOKING = gql`
  mutation CreateBooking(
    $artistId: String!
    $name: String!
    $email: String!
    $date: String!
    $bodyArea: String!
    $description: String
  ) {
    createBooking(
      artistId: $artistId
      name: $name
      email: $email
      date: $date
      bodyArea: $bodyArea
      description: $description
    ) {
      id
    }
  }
`;

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    bodyArea: "",
    description: "",
  });

  const [createBooking] = useMutation(CREATE_BOOKING);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBooking({ variables: { ...form, artistId: "123" } });
    alert("Booking submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 rounded-lg shadow-lg p-6 space-y-4"
    >
      <h2 className="text-2xl font-bold">Book a Session</h2>
      <input
        className="w-full p-2 bg-zinc-700 rounded"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        className="w-full p-2 bg-zinc-700 rounded"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        className="w-full p-2 bg-zinc-700 rounded"
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        className="w-full p-2 bg-zinc-700 rounded"
        placeholder="Body Area"
        value={form.bodyArea}
        onChange={(e) => setForm({ ...form, bodyArea: e.target.value })}
      />
      <textarea
        className="w-full p-2 bg-zinc-700 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <button
        className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
