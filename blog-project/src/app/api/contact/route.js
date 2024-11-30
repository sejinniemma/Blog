import { sendEmail } from '@/service/email';

export async function POST(req) {
  const body = await req.json();
  const { from, subject, message } = body; // 클라이언트로부터 받아온 정보
  return sendEmail(body) // Node Mailer 정의 (service)
    .then(
      () =>
        new Response(JSON.stringify({ message: 'Successfully submitted' }), {
          status: 200,
        })
    )
    .catch(() => {
      console.error(error);
      return new Response(JSON.stringify({ message: 'Failed submitted' }), {
        status: 500,
      });
    });
}
