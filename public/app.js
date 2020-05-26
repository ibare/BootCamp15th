function networkErrorHandler() {
  alert('네트워크를 확인해주세요.');
}

function contentErrorHandler() {
  alert('알 수 없는 오류가 발생했습니다.');
}

function main() {
  
  const api = new XMLHttpRequest();

  api.open('GET', '/api/bookmarks');

  api.addEventListener('load', () => {
    if (api.status === 200) {
      const container = document.querySelector('.bm-list');
      const bmList = JSON.parse(api.responseText);
      
      container.innerHTML = bmList
        .map(bookmark => `<li><a href="${bookmark.url}">${bookmark.title}(${bookmark.description})</a></li>`)
        .join('');

      container.innerHTML = bmList
        .map(({ url, title, description }) => `<li><a href="${url}">${title}(${description})</a></li>`)
        .join('');

    } else contentErrorHandler();
  });

  api.addEventListener('error', networkErrorHandler);

  api.send();
}

document.addEventListener('DOMContentLoaded', main);
