// �L���b�V���t�@�C���̎w��
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    '/tsurikichi.github.io/leaflet-VectorGrid/index.html',
];

// �C���X�g�[������
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache.map(url => new Request(url, { credentials: 'same-origin' })));
//                return cache.addAll(urlsToCache);
            })
    );
});

// ���\�[�X�t�F�b�`���̃L���b�V�����[�h����
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function (response) {
                return response ? response : fetch(event.request);
            })
    );
});