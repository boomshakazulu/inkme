import { gql, useQuery } from "@apollo/client";

const GET_BOOKINGS = gql`
  query GetBookings($artistId: String!) {
    getBookings(artistId: $artistId) {
      id
      name
      date
    }
  }
`;

export default function CalendarPage() {
  const { loading, error, data } = useQuery(GET_BOOKINGS, {
    variables: { artistId: "123" },
  });

  if (loading) return <p>Loading calendar...</p>;
  if (error) return <p>Error loading calendar</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Calendar</h2>
      <ul className="space-y-2">
        {data.getBookings.map((booking) => (
          <li key={booking.id} className="bg-zinc-800 p-3 rounded shadow">
            <span className="text-emerald-400">
              {new Date(booking.date).toLocaleDateString()}
            </span>{" "}
            — {booking.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
