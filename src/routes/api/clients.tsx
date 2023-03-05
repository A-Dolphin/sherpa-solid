export async function GET() {
    const clients = JSON.stringify(
        [
            {
              id: 1,
              firstName: 'Joe',
              lastName: 'Bloggs',
              clientType: 'bhuna',
            },
            {
              id: 2,
              firstName: 'Ted',
              lastName: 'Codes',
              clientType: 'naan',
            },
        ]
    );
    return new Response(clients, { status:200 })

}