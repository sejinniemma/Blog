// 데이터를 /api로 POST 요청 (실제 서버에 요청)
// 이 곳은 클라이언트에서 요청한 것이므로 브라우저에서 실행된 함수이므로 클라이언트
export async function sendContactEmail(data) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = await response.json(); // 서버로 부터 응답 받아옴
  if (!response.ok) {
    throw new Error(res.message || '서버 요청에 실패함');
  } else {
    // 성공적으로 전송된 경우
    return res;
  }
}
