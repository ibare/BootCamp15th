function networkErrorHandler() {
  alert('네트워크를 확인해주세요.');
}

function contentErrorHandler() {
  alert('알 수 없는 오류가 발생했습니다.');
}

async function onClickAddBookmark() {
  const txtUrl = document.querySelector('.url');

  if (txtUrl.value === '') {
    alert('웹사이트의 주소를 입력해 주세요.');
    return;
  }

  const response = await fetch('/api/bookmarks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: txtUrl.value
    }),
  });

  const result = await response.json();

  console.log(result);
}

async function main() {
  const container = document.querySelector('.bm-list');
  const btnAdd = document.querySelector('#new-bookmark');
  const api = new XMLHttpRequest();

  btnAdd.addEventListener('click', onClickAddBookmark);

  const response = await fetch('/api/bookmarks');
  const bmList = await response.json();
      
  container.innerHTML = bmList
    .map(({ url, title, description }) => `<li><a href="${url}">${title}(${description})</a></li>`)
    .join('');
}

document.addEventListener('DOMContentLoaded', main);
