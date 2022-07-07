import React from "react";

const captionContainer = ({ titleMiddle }) => {
  let result = 'absolute inset-0 flex flex-col gap-y-1 flex-wrap pl-2';
  result += ' ' + (titleMiddle ? 'justify-around items-center text-zinc-500' : 'text-white');
  return result;
}
const captionTitle = ({ titleMiddle }) => {
  let result = 'overflow-hidden flex flex-wrap';
  result += ' ' + (titleMiddle ? 'items-center justify-center' : 'flex-1  items-end')
  return result;
}

const ImageStory = ({ image = "", title = "", date = "", className = "", error, loading, titleMiddle = false }) => (
  <figure className={`relative rounded-lg overflow-hidden ${className} ${loading ? "animate-loading" : ""}`}>
    <img src={image} alt={error || title} />
    <figcaption className={captionContainer({ titleMiddle })}>
      <main className={captionTitle({ titleMiddle })}>
        <span className={`${titleMiddle ? 'text-2xl text-center' : 'text-xl font-semibold'}`}>
          <span className={titleMiddle ? 'bg-slate-300' : "bg-slate-400"}> {title || error} </span>
        </span>
      </main>
      <p className={`w-fit ${titleMiddle ? 'text-xl bg-slate-300' : 'text-sm bg-slate-400'}`}> {date} </p>
    </figcaption>
  </figure>
);
export const ImageStoryMemo = React.memo(ImageStory);
export default ImageStory;
