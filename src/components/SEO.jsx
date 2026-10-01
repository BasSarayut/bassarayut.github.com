import { createElement } from 'react';
import { Helmet } from 'react-helmet-async';
import { headTags } from '../seo';

export default function SEO(props) {
  const { title, tags } = headTags(props);
  return <Helmet><title>{title}</title>{tags.map(({ tag, attrs, content }, index) => createElement(tag, { key: index, ...attrs }, content))}</Helmet>;
}
