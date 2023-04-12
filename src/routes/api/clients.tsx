export async function GET() {
    const clients = JSON.stringify(
        [
            {
              id: 1,
              firstName: 'Joe',
              lastName: 'Bloggs',
              clientType: 'bhuna',
              nextBooking: '22-06-23',
              lastPayment: '26-01-23',
            },
            {
              id: 2,
              firstName: 'Ted',
              lastName: 'Codes',
              clientType: 'naan',
              nextBooking: '12-05-23',
              lastPayment: '07-03-23',
            },
        ]
    );
    return new Response(clients, { status:200 })

}