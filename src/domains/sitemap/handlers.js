import changeCase from 'change-case';
import sm from 'sitemap';
import bucketS3 from '../../infrastructure/bucket-s3';
import trilhasAPI from '../../infrastructure/trilhas-api';

const _generateSitemap = (trilhas) => {
  const trilhasUrls = trilhas
    .map( ({ titulo }) => titulo )
    .map(changeCase.paramCase)
    .map( titulo => `/assinar/${titulo}`)
    .map( url => ({ url, changefreq: 'weekly' }) );

  const urls = [
    { url: '/', changefreq: 'weekly' },
    ...trilhasUrls,
  ];

  const sitemap = sm.createSitemap({
    hostname: "https://yurah.com.br",
    cacheTime: 600000,
    urls,
  })

  return sitemap.toString();
};

const update = () =>
  Promise.resolve({})
    .then(trilhasAPI.getAll)
    .then(_generateSitemap)
    .then(bucketS3.uploadSitemap);

export default {
  update,
}
