import React from 'react'
import { tailwindClass } from '../../tailwind/expandClasses';

const topAirtcle = ({ imageSide, textSmall, noImage, className, loading }) => {
  let result = tailwindClass`grid gap-y-1`;
  result += ' ' + (loading ? 'animate-loading' : '');
  if (noImage) return result + ' ' + className;
  result += ' ' + (imageSide ? 'grid-cols-2 gap-x-2' : '');
  result += ' ' + (imageSide ? textSmall ? tailwindClass`grid-rows-[auto_auto]` : 'grid-rows-[auto_auto_auto]' : textSmall ? 'gap-y-2' : '');
  result += ' ' + (imageSide || textSmall ? '' : tailwindClass`bg-stone-100`);
  return result + ' ' + className;
}
const mainImage = ({ imageSide, textSmall, noImage }) => {
  let result = '';
  if (noImage) return result;
  result += ' ' + (imageSide ? tailwindClass`col-span-1` : '')
  result += ' ' + (imageSide ? textSmall ? tailwindClass`row-span-2` : tailwindClass`row-span-3` : '');
  return result
}
const postTitle = ({ padding, imageSide, textSmall }) => {
  let result = tailwindClass`font-medium break-words`;
  result += ' ' + (imageSide && textSmall ? 'text-lg' : 'text-xl');
  return result + ' ' + padding;
}

export const Post = ({ image = '', title = '', description = '', date = '', className = '', error, imageSide = false, textSmall = false, noImage = false, loading }) => {
  const padding = textSmall || imageSide ? '' : 'px-4';
  return (
    <article className={topAirtcle({ imageSide, textSmall, noImage, className, loading })}>
      {!noImage &&
        <figure className={mainImage({ imageSide, textSmall, noImage })}>
          <img src={image} alt={title || error} />
        </figure>}
      <p className={postTitle({ padding, imageSide, textSmall })}>{title}</p>
      {!textSmall &&
        <p className={`${padding} ${imageSide ? 'self-center' : ''} break-words`}>
          {description && description.substring(0, noImage ? 250 : 150) + (noImage ? '' : '...')}
        </p>
      }
      <p className={`${padding} self-end break-words`}>{date || error}</p>
    </article>
  );
};
export const PostMemo = React.memo(Post);
export default Post